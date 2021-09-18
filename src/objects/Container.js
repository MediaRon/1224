import styled from 'styled-components';

const AppContainer = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #b0c5e2;
	background-image: url( hour-glass-sunset-adobe-stock_72239492.jpg );
	background-size: cover;
	background-position: center center;
`;

const Container = ( props ) => {
	return <AppContainer>{ props.children }</AppContainer>;
};

export default Container;
