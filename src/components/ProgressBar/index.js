/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const ProgressBarWrapper = styled.div`
	width: 100%;
	background: #fff;
	border-radius: 50px;
	--duration: 7;
`;

// From: https://css-tricks.com/timer-bars-in-css-with-custom-properties/
const roundtime = keyframes`
		to {
			transform: scaleX(0);
		}
	`;

const ProgressBarInner = styled.div`
	height: 5px;
	width: 100%;
	background: linear-gradient( to bottom, red, #900 );
	transition: background-color 0.02s ease-in-out;
	transform-origin: left center;
`;

const ProgressBar = ( props ) => {
	const { percentage, timerCompleted } = props;

	const totalTime = 7000; // /in milliseconds.
	const warningThreshold = 4500; // in milliseconds.
	const alertThreshold = 2000; // in milliseconds.

	return (
		<ProgressBarWrapper>
			<ProgressBarInner style={ { width: percentage + '%' } } />
		</ProgressBarWrapper>
	);
};

ProgressBar.propTypes = {
	percentage: PropTypes.number.isRequired,
	timerCompleted: PropTypes.any,
};
ProgressBar.defaultProps = {
	percentage: 100,
	timerCompleted: () => {},
};
export default ProgressBar;
