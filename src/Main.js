/* eslint-disable no-unused-vars */
import { useState } from 'react';
import useKeyboardShortcut from 'use-keyboard-shortcut';
import Container from './objects/Container';
import Header from './objects/Header';
import Interface from './objects/Interface';
import './styles.scss';

const Main = () => {
	const [ key, setKey ] = useState( 0 );
	useKeyboardShortcut( [ ' ' ], () => {
		// eslint-disable-next-line no-console
		console.log( 'spacebar pressed' );
	} );
	return (
		<Container>
			<Header />
			<Interface
				onAnswer={ ( isCorrect, timeInMilliseconds ) => {
					setKey( key + 1 );
				} }
				key={ key }
			/>
		</Container>
	);
};

export default Main;
