import { ChakraProvider } from '@chakra-ui/react';

import TopBar from './components/TopBar';
import Home from './pages/Home';

function App() {
	return (
		<ChakraProvider>
			<TopBar />
			<Home />
		</ChakraProvider>
	);
}

export default App;
