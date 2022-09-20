import { ActivityProvider } from './context/activity.context';
import { ChakraProvider } from '@chakra-ui/react';
import MainLayout from './layouts/main.layout';
import theme from './theme/chakra.theme';

const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<ActivityProvider>
				<MainLayout />
			</ActivityProvider>
		</ChakraProvider>
	);
}

export default App;