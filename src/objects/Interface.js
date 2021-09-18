/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/**
 * The Game Interface Wrapper.
 */

import { useState, useEffect } from 'react';
//import styled from 'styled-components';
import TwelveHourData from '../data/TwelveHour';

const CEILING = 240;
const FLOOR = 1;

const getRandomTime = () => {
	return Math.floor( Math.random() * ( CEILING - FLOOR + 1 ) + FLOOR );
};

const Interface = () => {
	// Retrieve random number.
	const [ index, setIndex ] = useState( null );
	const [ currentTime, setCurrentTime ] = useState( null );
	const [ currentTimeMatch, setCurrentTimeMatch ] = useState( null );

	const setTime = () => {
		const dataIndex = getRandomTime();

		setIndex( dataIndex );
		setCurrentTime( TwelveHourData[ dataIndex ].label );
		setCurrentTimeMatch( TwelveHourData[ dataIndex ].match );
	};

	useEffect( () => {
		setTime();
	}, [] );

	console.log( currentTime );

	return <>{ currentTime }</>;
};

export default Interface;
