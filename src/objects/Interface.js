/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/**
 * The Game Interface Wrapper.
 */

import { useState, useEffect, useRef } from 'react';
import { IMaskMixin } from 'react-imask';
import styled from 'styled-components';
import TwelveHourData from '../data/TwelveHour';

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
	color: #b0c5e2;
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
	background: #3b2100;
	font-size: 1.6em;
	max-width: 280px;
	color: #fff;
	border: 1px solid #e1ecf0;
	padding: 10px 20px;
	border-radius: 5px;
`;

const MaskedStyledInput = IMaskMixin( ( { inputRef, ...props } ) => (
	<StyledMaskedInput { ...props } ref={ inputRef } />
) );

const CEILING = 240;
const FLOOR = 1;

const getRandomTime = () => {
	return Math.floor( Math.random() * ( CEILING - FLOOR + 1 ) + FLOOR );
};

const Interface = () => {
	// Set ref to input component.
	let maskedInputRef = useRef();

	// Set state.
	const [ index, setIndex ] = useState( null );
	const [ currentTime, setCurrentTime ] = useState( null );
	const [ currentTimeMatch, setCurrentTimeMatch ] = useState( null );
	const [ answer, setAnswer ] = useState( '' );
	const [ autoSubmit, setAutoSubmit ] = useState( true );

	// Set the initial time for the app.
	const setTime = () => {
		const dataIndex = getRandomTime();

		setIndex( dataIndex );
		setCurrentTime( TwelveHourData[ dataIndex ].label );
		setCurrentTimeMatch( TwelveHourData[ dataIndex ].match );
	};

	useEffect( () => {
		setTime();

		// Set focus.
		//maskedInputRef.current.focus();
	}, [] );

	/**
	 * Check an answer for correctness.
	 *
	 * @param {number} answerToCheck The answer to check.
	 * @return {boolean} true if valid, false if not.
	 */
	const checkAnswer = ( answerToCheck ) => {
		return answerToCheck === currentTimeMatch || false;
	};

	// When user inputs answer, change the value.
	const handleTimeInputChange = ( value, mask ) => {
		setAnswer( value );

		const timeRegex = new RegExp( /\d\d\d\d/ ); // Check for 4 numbers.
		if ( autoSubmit && timeRegex.test( value ) ) {
			if ( checkAnswer( value ) ) {
				console.log( 'winner' );
			} else {
				// Loser.
			}
		}
		// Todo: Move to next number.
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
								//maskedInputRef = inputEl;
								//inputEl.current.focus();
							}
						} }
						onAccept={ ( value, mask ) => {
							handleTimeInputChange( value, mask );
						} }
						aria-label={ `Convert ${ currentTime } to 24-hour time.` }
					/>
					<StyledSubmitButton type="submit" value="Check Answer" />
				</form>
			</InterfaceWrapper>
		</>
	);
};

export default Interface;
