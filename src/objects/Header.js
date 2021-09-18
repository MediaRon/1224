import Logo from '../components/Logo';
import styled from 'styled-components';

const AppHeader = styled.header`
	padding-top: 1.2em;
`;

const Header = () => {
	return (
		<AppHeader>
			<Logo />
		</AppHeader>
	);
};

export default Header;
