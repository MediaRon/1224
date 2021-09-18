import Container from './objects/Container';
import Header from './objects/Header';
import Interface from './objects/Interface';
import './styles.scss';

const Main = () => {
	return (
		<Container>
			<Header />
			<Interface />
		</Container>
	);
};

export default Main;
