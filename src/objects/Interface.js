/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/**
 * The Game Interface Wrapper.
 */

import { useState, useEffect, useRef } from 'react';
import { IMaskInput } from 'react-imask';
//import styled from 'styled-components';
import TwelveHourData from '../data/TwelveHour';

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
			<form
				onSubmit={ ( e ) => {
					e.preventDefault();
					maskedInputRef.select();
				} }
			>
				{ currentTime }
				<IMaskInput
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
				/>
				<input type="submit" value="Check Answer" />
			</form>
		</>
	);
};

export default Interface;
