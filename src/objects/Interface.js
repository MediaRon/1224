/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/**
 * The Game Interface Wrapper.
 */

import { useState, useEffect } from 'react';
import { IMaskInput } from 'react-imask';
//import styled from 'styled-components';
import TwelveHourData from '../data/TwelveHour';

const CEILING = 240;
const FLOOR = 1;

const getRandomTime = () => {
	return Math.floor( Math.random() * ( CEILING - FLOOR + 1 ) + FLOOR );
};

const Interface = () => {
	const [ index, setIndex ] = useState( null );
	const [ currentTime, setCurrentTime ] = useState( null );
	const [ currentTimeMatch, setCurrentTimeMatch ] = useState( null );
	const [ answer, setAnswer ] = useState( '' );

	const setTime = () => {
		const dataIndex = getRandomTime();

		setIndex( dataIndex );
		setCurrentTime( TwelveHourData[ dataIndex ].label );
		setCurrentTimeMatch( TwelveHourData[ dataIndex ].match );
	};

	useEffect( () => {
		setTime();
	}, [] );

	// When user inputs answer, change the value.
	const handleTimeInputChange = ( value ) => {
		setAnswer( value );

		if ( value === currentTimeMatch ) {
			console.log( 'winner' );
		}

		// Todo: Check if value is 4 numbers (regex).
		// Todo: If 4 numbers, check answer.
		// Todo: Display alert for right answer.
		// Todo: Move to next number.
	};

	if ( null === index || null === currentTime ) {
		return <></>;
	}

	return (
		<>
			{ currentTime }
			<IMaskInput
				mask="00:00"
				unmask={ true }
				placeholderChar="_"
				lazy={ false }
				autoComplete="off"
				value={ answer }
				onAccept={ ( value, mask ) => {
					handleTimeInputChange( value );
				} }
			/>
		</>
	);
};

export default Interface;
