import { DataProvider, EventProvider } from './context/@context';
import { ChakraProvider } from '@chakra-ui/react';
import MainLayout from './layouts/main.layout';
import theme from './theme/chakra.theme';

const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<DataProvider>
				<EventProvider>
					<MainLayout />
				</EventProvider>
			</DataProvider>
		</ChakraProvider>
	);
}

export default App;