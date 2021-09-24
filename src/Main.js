/* eslint-disable no-unused-vars */
import { useState } from 'react';
import useKeyboardShortcut from 'use-keyboard-shortcut';
import Container from './objects/Container';
import Header from './objects/Header';
import Interface from './objects/Interface';
import './styles.scss';

const Main = () => {
	const [ key, setKey ] = useState( 0 );
	const [ paused, setPaused ] = useState( false );
	useKeyboardShortcut( [ ' ' ], () => {
		if ( ! paused ) {
			setPaused( true );
		} else {
			setPaused( false );
		}
	} );
	return (
		<Container>
			<Header />
			<Interface
				onAnswer={ ( isCorrect, timeInMilliseconds ) => {
					setKey( key + 1 );
				} }
				key={ key }
				paused={ paused }
			/>
		</Container>
	);
};

export default Main;
