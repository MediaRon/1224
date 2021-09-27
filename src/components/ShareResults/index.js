/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as PowerAnimals from '../../components/PowerAnimals/index';

const ShareContainer = styled.div`
	background: rgba( 255, 255, 255, 0.95 );
	padding: 15px 20px;
	max-width: 800px;
	margin: 0 auto;
	margin-top: 1.5em;
	border-radius: 10px;
	text-align: center;
`;

const ShareResults = ( props ) => {
	const { total, animal } = props;

	const getPowerAnimal = ( points ) => {
		if ( 0 === points || 10 > points ) {
			// 0-9 Sloth.
			return <PowerAnimals.Sloth />;
		}
		// 10-20 Giraffe.
		if ( points >= 10 && points <= 20 ) {
			return <PowerAnimals.Giraffe />;
		}
		// 20-50 Elephant.
		if ( points >= 20 && points <= 50 ) {
			return <PowerAnimals.Elephant />;
		}
		// 50-70 Fox.
		if ( points >= 50 && points <= 70 ) {
			return <PowerAnimals.Fox />;
		}
		// 70-90 Lion.
		if ( points >= 70 && points <= 90 ) {
			return <PowerAnimals.Lion />;
		}
		// 90-100 Tiger.
		if ( points >= 90 && points <= 100 ) {
			return <PowerAnimals.Tiger />;
		}
		// 100-120 Hippo.
		if ( points >= 100 && points <= 120 ) {
			return <PowerAnimals.Hippo />;
		}
		// > 120 Zebra.
		if ( points >= 120 ) {
			return <PowerAnimals.Zebra />;
		}
	};
	return (
		<ShareContainer>
			<>
				{ getPowerAnimal( total ) }
				<h2>Your Score</h2>
				<h3>{ total } Points!</h3>
			</>
		</ShareContainer>
	);
};

ShareResults.propTypes = {
	total: PropTypes.number.isRequired,
};

export default ShareResults;
