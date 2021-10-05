/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as PowerAnimals from '../PowerAnimals/index';
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
		if ( 0 === points || 30 > points ) {
			// 0-9 Sloth.
			return <PowerAnimals.Sloth />;
		}
		// 10-20 Giraffe.
		if ( points >= 30 && points <= 50 ) {
			return <PowerAnimals.Giraffe />;
		}
		// 20-50 Elephant.
		if ( points >= 50 && points <= 80 ) {
			return <PowerAnimals.Elephant />;
		}
		// 50-70 Fox.
		if ( points >= 80 && points <= 120 ) {
			return <PowerAnimals.Fox />;
		}
		// 70-90 Lion.
		if ( points >= 120 && points <= 150 ) {
			return <PowerAnimals.Lion />;
		}
		// 90-100 Tiger.
		if ( points >= 150 && points <= 200 ) {
			return <PowerAnimals.Tiger />;
		}
		// 100-120 Hippo.
		if ( points >= 200 && points <= 240 ) {
			return <PowerAnimals.Hippo />;
		}
		// > 120 Zebra.
		if ( points >= 240 ) {
			return <PowerAnimals.Zebra />;
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
