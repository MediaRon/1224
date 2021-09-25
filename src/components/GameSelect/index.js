/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GameSelectStyles = styled.div`
	display: flex;
	justify-content: flex-start;
	background: #fff;
	max-width: 800px;
	margin: 0 auto;
	padding: 15px 20px;
	border-radius: 10px;
	margin-bottom: 15px;
	border: 1px solid #999;
`;
const GameIconWrapper = styled.div`
	max-width: 150px;
`;
const GameImage = styled.img`
	max-width: 150px;
	height: auto;
`;
const GameTitle = styled.h2`
	font-size: 2em;
	text-align: left;
	margin: 0;
	margin-left: 15px;
	padding: 10px 10px;
	color: #666;
`;
const GameDescription = styled.p`
	font-size: 1.2em;
	margin: 0;
	margin-left: 15px;
	padding: 10px 10px;
`;
const GameContentWrapper = styled.div`
	flex: 1;
`;
const GameButton = styled.span`
	display: inline-block;
	padding: 10px 20px;
	background: #9ebfb0;
	color: #fff;
	border-radius: 5px;
	margin-top: 10px;
	margin-left: 25px;
	font-weight: 700;
`;

const GameSelect = ( props ) => {
	const { src, srcWidth, srcHeight, path, name, description } = props;
	return (
		<GameSelectStyles>
			<>
				<GameIconWrapper>
					<Link to={ path }>
						<GameImage
							src={ src }
							width={ srcWidth }
							height={ srcHeight }
							alt="test"
						/>
					</Link>
				</GameIconWrapper>
				<GameContentWrapper>
					<>
						<GameTitle>{ name }</GameTitle>
						<GameDescription>{ description }</GameDescription>
						<Link to={ path }>
							<GameButton>Play Game</GameButton>
						</Link>
					</>
				</GameContentWrapper>
			</>
		</GameSelectStyles>
	);
};

GameSelect.propTypes = {
	src: PropTypes.string.isRequired,
	srcWidth: PropTypes.number.isRequired,
	srcHeight: PropTypes.number.isRequired,
	path: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default GameSelect;
