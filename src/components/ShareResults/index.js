/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
	const { total } = props;
	return (
		<ShareContainer>
			<>
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
