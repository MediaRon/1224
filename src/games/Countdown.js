/* eslint-disable no-console */
/**
 * Countdown game. Count number of correct answers. Count streak as well.
 */

/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import useKeyboardShortcut from 'use-keyboard-shortcut';
import styled from 'styled-components';
import ShareResults from '../components/ShareResults';
import Container from '../objects/Container';
import Header from '../objects/Header';
import Interface from '../objects/Interface';

let timeRemainingInSeconds = 60;

const FooterStyles = styled.footer`
	display: grid;
	width: 100%;
	justify-items: center;
	grid-template-columns: 1fr 1fr 1fr;
	position: fixed;
	bottom: 0;
	background: #000;
	color: #f6d900;
	font-size: 1.2em;
	padding: 10px 15px;
`;

// For some odd reason, setting state with interval doesn't work in functional components.
let timerInveralKey = {};

const Countdown = ( props ) => {
	const [ key, setKey ] = useState( 0 );
	const [ paused, setPaused ] = useState( false );
	const [ correct, setCorrect ] = useState( 0 );
	const [ streak, setStreak ] = useState( 0 );
	const [ timeLeft, setTimeLeft ] = useState( 0 );
	const [ endOfGame, setEndOfGame ] = useState( false );

	useKeyboardShortcut( [ ' ' ], () => {
		handlePauseState( ! paused );
	} );
	useKeyboardShortcut( [ 'n' ], () => {
		if ( endOfGame ) {
			return;
		}
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

	/**
	 * Updates the state when the pause button is pushed.
	 *
	 * @param {boolean} isPaused true if paused, false if not.
	 */
	const handlePauseState = ( isPaused ) => {
		if ( endOfGame ) {
			return;
		}
		if ( isPaused ) {
			setPaused( true );
			stopTimer();
		} else {
			setPaused( false );
			startTimer();
		}
	};

	const decrementTime = () => {
		timeRemainingInSeconds = parseInt( timeRemainingInSeconds - 1 );
		// eslint-disable-next-line no-console
		setTimeLeft( timeRemainingInSeconds );
		if ( timeRemainingInSeconds <= 0 ) {
			// Game over.
			stopTimer();
			setEndOfGame( true );
		}
	};

	/**
	 * Set up a 45-second timer to countdown to zero.
	 */
	const startTimer = () => {
		timerInveralKey = setInterval( decrementTime, 1000 );
	};

	/**
	 * Stop the timer/countdown.
	 */
	const stopTimer = () => {
		clearInterval( timerInveralKey );
	};

	const gameInterface = () => {
		return (
			<>
				<Container>
					<Header showIntro={ false } />
					<Interface
						onAnswer={ ( isCorrect, timeInMilliseconds ) => {
							if ( isCorrect || 0 === timeInMilliseconds ) {
								if ( isCorrect ) {
									setCorrect( correct + 1 );
									setStreak( streak + 1 );
								}
								if ( 0 === timeInMilliseconds ) {
									setStreak( 0 );
								}
								setKey( key + 1 );
							} else {
								setStreak( 0 );
								// Be evil here and substract points? :D
							}
						} }
						key={ key }
						paused={ paused }
						onSpacebarPress={ () => {
							handlePauseState( ! paused );
						} }
						onKeyPressN={ () => {
							setStreak( 0 );
							setKey( key + 1 );
						} }
					/>
				</Container>
				<FooterStyles>
					<>
						<div className="time-left">
							Time Left: { timeLeft }s
						</div>
						<div>Total Correct: { correct }</div>
						<div>Streak: { streak }</div>
					</>
				</FooterStyles>
			</>
		);
	};

	const shareResults = () => {
		return (
			<Container>
				<Header showIntro={ false } />
				<ShareResults total={ correct } />
			</Container>
		);
	};

	return <>{ endOfGame ? shareResults() : gameInterface() }</>;
};

export default Countdown;
