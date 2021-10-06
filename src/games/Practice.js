/**
 * Practice game with a countdown progress bar.
 */

/* eslint-disable no-unused-vars */
import { useState } from 'react';
import useKeyboardShortcut from 'use-keyboard-shortcut';
import Container from '../objects/Container';
import Header from '../objects/Header';
import Interface from '../objects/Interface';

const Practice = ( props ) => {
	const [ key, setKey ] = useState( 0 );
	const [ paused, setPaused ] = useState( false );
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

	return (
		<>
			<Container>
				<Header showIntro={ true } />
				<Interface
					onAnswer={ ( isCorrect, timeInMilliseconds ) => {
						if ( isCorrect || 0 === timeInMilliseconds ) {
							setKey( key + 1 );
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
			</Container>
		</>
	);
};

export default Practice;
