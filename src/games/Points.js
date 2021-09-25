/* eslint-disable no-console */
/**
 * Points game. Points based on right answer with time remaining.
 */

/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import useKeyboardShortcut from 'use-keyboard-shortcut';
import Container from '../objects/Container';
import Header from '../objects/Header';
import Interface from '../objects/Interface';

let timeRemainingInSeconds = 45;

const WEIGHT_PERCENTAGE = 0.1333333;
const POINTS_PER_ANSWER = 5;

const calculatePoints = ( milliseconds ) => {
	const weight = milliseconds * WEIGHT_PERCENTAGE;
	const bonusPoints = Math.ceil( ( POINTS_PER_ANSWER * weight ) / 1000 );

	return {
		points: POINTS_PER_ANSWER,
		bonusPoints,
		totalPoints: POINTS_PER_ANSWER + bonusPoints,
	};
};

const Points = ( props ) => {
	const [ key, setKey ] = useState( 0 );
	const [ paused, setPaused ] = useState( false );
	const [ points, setPoints ] = useState( 0 );
	const [ bonus, setBonus ] = useState( 0 );
	const [ intervalKey, setIntervalKey ] = useState( null );
	const [ timeLeft, setTimeLeft ] = useState( 0 );

	useKeyboardShortcut( [ ' ' ], () => {
		if ( ! paused ) {
			setPaused( true );
		} else {
			setPaused( false );
		}
	} );
	useKeyboardShortcut( [ 'n' ], () => {
		setKey( key + 1 );
	} );

	useEffect( () => {
		// Component mount.
		startTimer();
		return () => {
			// Component unmount.
			stopTimer();
		};
	}, [] );

	const decrementTime = () => {
		timeRemainingInSeconds = parseInt( timeRemainingInSeconds - 1 );
		// eslint-disable-next-line no-console
		setTimeLeft( timeRemainingInSeconds );
		if ( timeRemainingInSeconds <= 0 ) {
			// Game over.
			stopTimer();
		}
	};

	/**
	 * Set up a 45-second timer to countdown to zero.
	 */
	const startTimer = () => {
		timeRemainingInSeconds = 45;
		setIntervalKey( setInterval( decrementTime, 1000 ) );
	};

	/**
	 * Stop the timer/countdown.
	 */
	const stopTimer = () => {
		clearInterval( intervalKey );
	};

	return (
		<>
			<Container>
				<Header showIntro={ false } />
				<Interface
					onAnswer={ ( isCorrect, timeInMilliseconds ) => {
						if ( isCorrect || 0 === timeInMilliseconds ) {
							if ( isCorrect ) {
								const pointsResult = calculatePoints(
									timeInMilliseconds
								);
								setPoints( points + pointsResult.totalPoints );
								setBonus( pointsResult.bonusPoints );
							}
							setKey( key + 1 );
						} else {
							// Be evil here and substract points? :D
						}
					} }
					key={ key }
					paused={ paused }
					onSpacebarPress={ () => {
						if ( false === paused ) {
							setPaused( true );
						} else {
							setPaused( false );
						}
					} }
					onKeyPressN={ () => {
						setKey( key + 1 );
					} }
				/>
				{ timeLeft }
				Total Points: { points }
				Bonus: { bonus }
			</Container>
		</>
	);
};

export default Points;
