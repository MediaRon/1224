/* eslint-disable no-unused-vars */
import { useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from 'react-router-dom';
import useKeyboardShortcut from 'use-keyboard-shortcut';
import Container from './objects/Container';
import Header from './objects/Header';
import Interface from './objects/Interface';
import Games from './objects/Games';
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
		<>
			<Router>
				<Switch>
					<Route exact path="/new/">
						<>
							<Container>
								<Header />
								<Games />
							</Container>
						</>
					</Route>
					<Route path="/users">
						<></>
					</Route>
					<Route exact path="/">
						<>
							<Container>
								<Header showIntro={ true } />
								<Interface
									onAnswer={ (
										isCorrect,
										timeInMilliseconds
									) => {
										setKey( key + 1 );
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
								/>
							</Container>
						</>
					</Route>
					<Redirect to="/" />
				</Switch>
			</Router>
		</>
	);
};

export default Main;
