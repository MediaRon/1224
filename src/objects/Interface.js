/* eslint-disable no-unused-vars */
/**
 * The Game Interface Wrapper.
 */

import React from 'react';
import { IMaskMixin } from 'react-imask';
import styled from 'styled-components';
import TwelveHourData from '../data/TwelveHour';
import ProgressBar from '../components/ProgressBar';

//Wrapper around the game interface.
const InterfaceWrapper = styled.section`
	background: rgba( 255, 255, 255, 0.95 );
	padding: 15px 20px;
	max-width: 800px;
	margin: 0 auto;
	margin-top: 1.5em;
	border-radius: 10px;
`;

const TimeWrapper = styled.div`
	font-family: utile, sans-serif;
	font-size: 3em;
	letter-spacing: 0.02em;
	color: #999999;
	line-height: 1.2em;
	text-align: center;
`;

const StyledMaskedInput = styled.input`
	display: block;
	font-family: utile, sans-serif;
	font-size: 2em;
	text-align: center;
	max-width: 280px;
	margin: 1.1em auto;
	background: #fffdf4;
	color: #000;
	border: 1px solid #9ebfb0;
`;

const StyledSubmitButton = styled.input`
	display: block;
	margin: 1.1em auto;
	background: #b77900;
	font-size: 1.6em;
	max-width: 280px;
	color: #fff;
	border: 1px solid #e1ecf0;
	padding: 10px 20px;
	border-radius: 5px;
	transition: background-color 0.5s ease;

	&:hover {
		background: #956302;
	}
`;

const MaskedStyledInput = IMaskMixin( ( { inputRef, ...props } ) => (
	<StyledMaskedInput { ...props } ref={ inputRef } />
) );

const CEILING = 287;
const FLOOR = 1;

const getRandomTime = () => {
	return Math.floor( Math.random() * ( CEILING - FLOOR + 1 ) + FLOOR );
};

// Vars set with wide scope to work with timers and state.
let timerInMilliseconds = 0;

class Interface extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			index: null,
			currentTime: null,
			currentTimeMatch: null,
			answer: '',
			autoSubmit: false,
			timerObj: null,
			timerPercentage: 100,
			intervalKey: {},
			paused: props.paused || false,
		};

		this.maskedInput = React.createRef( null );
	}

	// Set the initial time for the app.
	setTime = () => {
		const dataIndex = getRandomTime();

		this.setState( {
			answer: '',
			index: dataIndex,
			currentTime: TwelveHourData[ dataIndex ].label,
			currentTimeMatch: TwelveHourData[ dataIndex ].match,
		} );
	};

	decrementTime = () => {
		timerInMilliseconds = parseInt( timerInMilliseconds + 100 );
		if ( timerInMilliseconds >= 7000 ) {
			timerInMilliseconds = 0;
			this.stopTimer();
			this.setState( {
				timerPercentage: 0,
			} );

			// Sent answer event back to parent.
			this.props.onAnswer( false, 0 );
			return;
		}

		this.setState( {
			timerPercentage:
				100 - Math.floor( ( timerInMilliseconds / 7000 ) * 100 ),
		} );
	};

	/**
	 * Set up a 7-second timer to countdown to zero.
	 */
	startTimer = () => {
		this.setState( {
			timerPercentage: 100,
			intervalKey: setInterval( this.decrementTime, 100 ),
		} );
	};

	/**
	 * Stop the timer/countdown.
	 */
	stopTimer = () => {
		clearInterval( this.state.intervalKey );
	};

	/**
	 * Check for a paused state.
	 *
	 * @param {*} prevProps Previous props.
	 * @param {*} prevState Previous state.
	 */
	componentDidUpdate = ( prevProps, prevState ) => {
		if ( this.props.paused !== prevProps.paused ) {
			if ( this.props.paused ) {
				this.stopTimer();
				this.setState( {
					paused: true,
				} );
			} else {
				this.setState(
					{
						intervalKey: setInterval( this.decrementTime, 100 ),
						paused: false,
					},
					() => {
						// Provide focus to masked input.
						this.maskedInput.current.element.focus();
					}
				);
			}
		}
	};

	/**
	 * Set time, start timer, and focus input.
	 */
	componentDidMount = () => {
		timerInMilliseconds = 0; // For game refreshes (When "N" is pressed).
		this.stopTimer(); // For game refreshes.
		this.setTime();
		this.startTimer();

		// Provide focus to masked input.
		this.maskedInput.current.element.focus();
	};

	/**
	 * Reset any timers on unount.
	 */
	componentWillUnmount = () => {
		this.stopTimer();
	};

	/**
	 * Check an answer for correctness.
	 *
	 * @param {number} answerToCheck The answer to check.
	 * @return {boolean} true if valid, false if not.
	 */
	checkAnswer = ( answerToCheck ) => {
		const timeRegex = new RegExp( /\d\d\d\d/ ); // Check for 4 numbers in format 00:00.
		if ( timeRegex.test( answerToCheck ) ) {
			if ( answerToCheck === this.state.currentTimeMatch ) {
				return true;
			}
		}
		return false;
	};

	// When user inputs answer, change the value.
	handleTimeInputChange = ( value, mask ) => {
		this.setState( {
			answer: value,
		} );
	};

	/**
	 * Handle the form submission and check the answer.
	 *
	 * @param {string} value The submitted answer.
	 */
	handleFormSubmit = ( value ) => {
		if ( this.checkAnswer( value ) ) {
			this.stopTimer();
			timerInMilliseconds = 0;
			this.props.onAnswer( true, timerInMilliseconds );
		} else {
			this.props.onAnswer( false, timerInMilliseconds );
		}
	};

	handleKeyPress = ( e ) => {
		if ( e.key === ' ' ) {
			this.props.onSpacebarPress();
		}
		if ( e.key === 'n' ) {
			this.props.onKeyPressN();
		}
	};

	render() {
		return (
			<>
				<InterfaceWrapper>
					<form
						onSubmit={ ( e ) => {
							e.preventDefault();
							this.handleFormSubmit( this.state.answer );
						} }
					>
						<TimeWrapper>{ this.state.currentTime }</TimeWrapper>
						<MaskedStyledInput
							type="text"
							mask="00:00"
							unmask={ true }
							placeholderChar="_"
							lazy={ false }
							autoComplete="off"
							disabled={ this.state.paused }
							value={ this.state.answer }
							ref={ this.maskedInput }
							onKeyPress={ ( e ) => this.handleKeyPress( e ) }
							onAccept={ ( value, mask ) => {
								this.setState( {
									answer: value,
								} );
							} }
							aria-label={ `Convert ${ this.state.currentTime } to 24-hour time.` }
						/>
						<StyledSubmitButton
							type="submit"
							value="Check Answer"
						/>
					</form>
					<ProgressBar percentage={ this.state.timerPercentage } />
				</InterfaceWrapper>
			</>
		);
	}
}

export default Interface;
