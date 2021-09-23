/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Container from './objects/Container';
import Header from './objects/Header';
import Interface from './objects/Interface';
import './styles.scss';

const Main = () => {
	const [ key, setKey ] = useState( 0 );
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
