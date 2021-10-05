/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Cats from '../Cats/index';
import SocialShare from './SocialShare';

const ShareContainer = styled.div`
	background: rgba( 255, 255, 255, 0.95 );
	padding: 15px 20px;
	max-width: 800px;
	margin: 0 auto;
	margin-top: 1.5em;
	border-radius: 10px;
	text-align: center;
`;

const ShareResultsCountdown = ( props ) => {
	const { total, streak } = props;

	const getPowerAnimal = ( points ) => {
		if ( 0 === points || 5 > points ) {
			return <Cats.Donut />;
		}
		if ( points >= 5 && points <= 10 ) {
			return <Cats.Coffee />;
		}
		if ( points >= 10 && points <= 20 ) {
			return <Cats.Burger />;
		}
		if ( points >= 20 && points <= 40 ) {
			return <Cats.Cone />;
		}
		if ( points >= 40 && points <= 60 ) {
			return <Cats.Cupcake />;
		}
		if ( points >= 60 && points <= 70 ) {
			return <Cats.Fries />;
		}
		if ( points >= 70 ) {
			return <Cats.Shake />;
		}
	};
	return (
		<ShareContainer>
			<>
				{ getPowerAnimal( total ) }
				<h2>Your Score</h2>
				<h3>{ total } Correct!</h3>
				<SocialShare
					socialText={ `I am a 12:24 Countdown guru with ${ total } correct.` }
				/>
			</>
		</ShareContainer>
	);
};

ShareResultsCountdown.propTypes = {
	total: PropTypes.number.isRequired,
	streak: PropTypes.number.isRequired,
};

export default ShareResultsCountdown;
