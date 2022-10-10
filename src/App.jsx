import { Routes, Route } from 'react-router-dom';

import GlobalStyle from 'theme/GlobalStyle';

import RootView from 'views/Root/Root';

import Navbar from 'components/organisms/Navbar/Navbar';
import Footer from 'components/organisms/Footer/Footer';

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<Navbar />
			<Routes>
				<Route path='/' element={<RootView />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
