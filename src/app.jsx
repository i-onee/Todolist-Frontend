import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ActivityProvider } from './context/activity.context';
import MainLayout from './layouts/main.layout';
import { mode } from '@chakra-ui/theme-tools';

const App = () => {
	const styles = {
		global: (props) => ({
			'html, body': {
				color: mode('gray.700', 'white')(props),
				bg: mode('', 'gray.900')(props),
				transitionProperty: 'background',
				fontFamily: 'SF Pro Display',
				transitionDuration: '0.2s',
				userSelect: 'none',
			}
		}),
	}
	const config = {
		disableTransitionOnChange: false
	}
	const theme = extendTheme({ styles, config });

	return (
		<ChakraProvider theme={theme}>
			<ActivityProvider>
				<MainLayout />
			</ActivityProvider>
		</ChakraProvider>
	);
}

export default App;