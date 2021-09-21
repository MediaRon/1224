/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const ProgressBarWrapper = styled.div`
	width: 100%;
	background: #fff;
	border-radius: 50px;
`;

const ProgressBarInner = styled.div`
	height: 5px;
	width: 100%;
	background: linear-gradient( to bottom, #46bf76, #46bf76 );
	transition: background-color 0.02s ease-in-out;
	transform-origin: left center;
	border-radius: 5px;
`;

const SAFE_THRESHOLD = '#46bf76';
const WARNING_THRESHOLD = '#bfbe46';
const DANGER_THRESHOLD = '#bf5a46';

const ProgressBar = ( props ) => {
	const { percentage } = props;

	const totalTime = 7000; // /in milliseconds.
	const warningThreshold = 4500; // in milliseconds.
	const alertThreshold = 2000; // in milliseconds.

	const [ backgroundColor, setBackgroundColor ] = useState( SAFE_THRESHOLD );

	useEffect( () => {
		if ( percentage > 25 && percentage < 65 ) {
			setBackgroundColor( WARNING_THRESHOLD );
		}
		if ( percentage < 25 ) {
			setBackgroundColor( DANGER_THRESHOLD );
		}
	}, [ percentage ] );

	return (
		<ProgressBarWrapper>
			<ProgressBarInner
				style={ {
					width: percentage + '%',
					background: backgroundColor,
				} }
			/>
		</ProgressBarWrapper>
	);
};

ProgressBar.propTypes = {
	percentage: PropTypes.number.isRequired,
};
ProgressBar.defaultProps = {
	percentage: 100,
};
export default ProgressBar;
