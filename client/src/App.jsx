import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './components/router/Router';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</>
	);
};

export default App;
