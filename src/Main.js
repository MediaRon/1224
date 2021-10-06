/* eslint-disable no-unused-vars */
import { useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from 'react-router-dom';
import Container from './objects/Container';
import Header from './objects/Header';
import Games from './objects/Games';
import Practice from './games/Practice';
import Points from './games/Points';
import Countdown from './games/Countdown';
import './styles.scss';

const Main = () => {
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
					<Route exact path="/games/points/">
						<>
							<Points />
						</>
					</Route>
					<Route exact path="/games/countdown/">
						<>
							<Countdown />
						</>
					</Route>
					<Route exact path="/">
						<>
							<Practice />
						</>
					</Route>
					<Redirect from="/games" to="/new/" />
					<Redirect to="/" />
				</Switch>
			</Router>
		</>
	);
};

export default Main;
