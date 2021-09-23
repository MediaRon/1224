/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/**
 * The Game Interface Wrapper.
 */

import { useState, useEffect, useRef } from 'react';
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

const CEILING = 240;
const FLOOR = 1;

const getRandomTime = () => {
	return Math.floor( Math.random() * ( CEILING - FLOOR + 1 ) + FLOOR );
};

// Vars set with wide scope to work with timers and state.
let timerInMilliseconds = 0;
let intervalKey = 0;

const Interface = ( props ) => {
	// Set ref to input component.
	let maskedInputRef = useRef();

	// Set state.
	const [ index, setIndex ] = useState( null );
	const [ currentTime, setCurrentTime ] = useState( null );
	const [ currentTimeMatch, setCurrentTimeMatch ] = useState( null );
	const [ answer, setAnswer ] = useState( '' );
	const [ autoSubmit, setAutoSubmit ] = useState( true );
	const [ timerObj, setTimerObj ] = useState( null );
	const [ timerPercentage, setTimerPercentage ] = useState( 100 );

	// Set the initial time for the app.
	const setTime = () => {
		const dataIndex = getRandomTime();

		setAnswer( '' );
		setIndex( dataIndex );
		setCurrentTime( TwelveHourData[ dataIndex ].label );
		setCurrentTimeMatch( TwelveHourData[ dataIndex ].match );
	};

	const decrementTime = () => {
		timerInMilliseconds = parseInt( timerInMilliseconds + 100 );
		if ( timerInMilliseconds >= 7000 ) {
			timerInMilliseconds = 0;
			console.log( intervalKey );
			clearInterval( intervalKey );
			setTimerPercentage( 0 );

			// Sent answer event back to parent.
			props.onAnswer( false, 0 );
			return;
		}

		setTimerPercentage(
			100 - Math.floor( ( timerInMilliseconds / 7000 ) * 100 )
		);
	};

	/**
	 * Set up a 7-second timer to countdown to zero.
	 */
	const startTimer = () => {
		setTimerPercentage( 100 );
		timerInMilliseconds = 0;
		intervalKey = setInterval( decrementTime, 100 );
	};

	useEffect( () => {
		setTime();
		startTimer();
	}, [] );

	/**
	 * Check an answer for correctness.
	 *
	 * @param {number} answerToCheck The answer to check.
	 * @return {boolean} true if valid, false if not.
	 */
	const checkAnswer = ( answerToCheck ) => {
		const timeRegex = new RegExp( /\d\d:\d\d/ ); // Check for 4 numbers in format 00:00.
		if ( timeRegex.test( answerToCheck ) ) {
			if ( answerToCheck === currentTimeMatch ) {
				return true;
			}
		}
		return false;
	};

	// When user inputs answer, change the value.
	const handleTimeInputChange = ( value, mask ) => {
		setAnswer( value );
	};

	/**
	 * Handle the form submission and check the answer.
	 *
	 * @param {string} value The submitted answer.
	 */
	const handleFormSubmit = ( value ) => {
		if ( checkAnswer( value ) ) {
			console.log( intervalKey );
			clearInterval( intervalKey );
			console.log( timerInMilliseconds );
			props.onAnswer( true, timerInMilliseconds );
		} else {
			// todo: Trigger wrong answer event.
		}
	};

	if ( null === index || null === currentTime ) {
		return <></>;
	}

	return (
		<>
			<InterfaceWrapper>
				<form
					onSubmit={ ( e ) => {
						e.preventDefault();
						handleFormSubmit( maskedInputRef.value ); // format in 12:24.
						maskedInputRef.select();
					} }
				>
					<TimeWrapper>{ currentTime }</TimeWrapper>
					<MaskedStyledInput
						type="text"
						mask="00:00"
						unmask={ true }
						placeholderChar="_"
						lazy={ false }
						autoComplete="off"
						value={ answer }
						ref={ ( inputEl ) => {
							if ( inputEl ) {
								maskedInputRef = inputEl.element;
								maskedInputRef.focus();
							}
						} }
						onAccept={ ( value, mask ) => {
							handleTimeInputChange( value, mask );
						} }
						aria-label={ `Convert ${ currentTime } to 24-hour time.` }
					/>
					<StyledSubmitButton type="submit" value="Check Answer" />
				</form>
				<ProgressBar percentage={ timerPercentage } />
			</InterfaceWrapper>
		</>
	);
};

export default Interface;
