/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import GameSelect from '../components/GameSelect';

const GameContainer = styled.div``;

const Games = ( props ) => {
	return (
		<GameContainer>
			<GameSelect
				src="../images/clock.png"
				srcWidth={ 250 }
				srcHeight={ 197 }
				path="/games/points"
				name="Points"
				description="Collect as many points as you can in 45 seconds."
			/>
			<GameSelect
				src="../images/hourglass.png"
				srcWidth={ 250 }
				srcHeight={ 211 }
				path="/games/countdown"
				name="Countdown"
				description="Get as many right as possible in 30 seconds."
			/>
		</GameContainer>
	);
};

export default Games;
