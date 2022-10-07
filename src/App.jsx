import { Routes, Route } from 'react-router-dom';
import RootView from 'views/Root/Root';
import Navbar from 'components/organisms/Navbar/Navbar';
import GlobalStyle from 'theme/GlobalStyle';

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<Navbar />
			<Routes>
				<Route path='/' element={<RootView />} />
			</Routes>
			<footer className="footer" />
		</div>
	);
}

export default App;
