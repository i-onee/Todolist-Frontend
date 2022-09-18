import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
	global: (props) => ({
		'html, body': {
			color: mode('gray.900', 'white')(props),
			bg: mode('light.200', 'dark.800')(props),
			transitionProperty: 'background',
			fontFamily: 'SF Pro Display',
			transitionDuration: '0.2s',
			userSelect: 'none',
		},
	}),
};

const config = {
	disableTransitionOnChange: false,
};

const dark = {
	700: '#2a2d34',
	800: '#1b1d22',
};

const light = {
	100: '#ffffff',
	200: '#fefefe',
	300: '#eff3f5'
}

const indigo = {
	200: '#8a4af3'
}

const theme = extendTheme({
	config,
	styles,
	colors : {light, dark, indigo}

});

export default theme;