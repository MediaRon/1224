import Logo from '../components/Logo';
import styled from 'styled-components';

const AppHeader = styled.header`
	padding-top: 2em;
`;
const AppDescriptionWrapper = styled.div`
	background: rgba( 0, 0, 0, 0.7 );
	padding: 15px 20px;
	max-width: 800px;
	margin: 0 auto;
	border-radius: 10px;
`;
const AppDescription = styled.p`
	font-family: utile, sans-serif;
	font-size: 1.6em;
	color: #fff;
	text-align: center;
`;

const Header = () => {
	return (
		<AppHeader>
			<>
				<Logo />
				<AppDescriptionWrapper>
					<AppDescription>
						A simple game for converting 12-hour time to 24-hour
						time.
					</AppDescription>
				</AppDescriptionWrapper>
			</>
		</AppHeader>
	);
};

export default Header;
