import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import HamburgerMenu from '../components/HamburgerMenu';
import CloseMenu from '../components/CloseMenu';

const AppContainer = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #b0c5e2;
	background-image: url( ../images/hour-glass-sunset-adobe-stock_72239492.jpg );
	background-size: cover;
	background-position: center center;
`;

const Container = ( props ) => {
	return (
		<AppContainer>
			<>
				<Menu
					customBurgerIcon={ <HamburgerMenu /> }
					customCrossIcon={ <CloseMenu /> }
					disableAutoFocus
				>
					<Link to="/new/">New Game</Link>
					<a
						href="https://mediaron.com/contact/"
						target="_blank"
						rel="noreferrer"
					>
						Contact
					</a>
					<a
						href="https://github.com/MediaRon/1224"
						target="_blank"
						rel="noreferrer"
					>
						Source Code
					</a>
				</Menu>
				{ props.children }
			</>
		</AppContainer>
	);
};

export default Container;
