import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
	global: (props) => ({
		body: {
			background: mode('light.400', 'dark.800')(props),
			color: mode('gray.900', 'white')(props),
			transitionProperty: 'background',
			fontFamily: 'SF Pro UI',
			transitionDuration: '0.2s',
			position: 'relative',
			userSelect: 'none',
			display: 'block',
		},
	}),
};

const dark = {
	700: '#1c1f24',
	800: '#121417',
};

const light = {
	100: '#fefdfe',
	200: '#fefefe',
	300: '#eff3f5',
	400: '#f5f7fc'
};

const indigo = {
	200: '#8a4af3'
};

const Button = {
	baseStyle: {
		fontWeight: 'normal',
		outline: 'none',
		rounded: 'full',
		ml: 0,
		mr: 0
	},
	sizes: {
		md: { h: 0, w: 0, px: 0, py: 0 }
	},
	variants: {
		solid: () => ({
			bg: 'none',
			_active: false,
			_hover: false,
		}),
	}
};

const Input = {
	variants: {
		outline: (props) => ({
			field: {
				bg: mode('light.300', 'blackAlpha.500')(props),
				height: '3rem',
				border: 0,
				_focus: {
					boxShadow: 'none',
				},
			},
		}),
	},
};

const Textarea = {
	variants: {
		outline: (props) => ({
			bg: mode('light.300', 'blackAlpha.500')(props),
			height: '11rem',
			resize: 'none',
			border: 0,
			_focus: {
				boxShadow: 'none'
			},
		}),
	},
};

const Divider = {
	variants: {
		solid: {
			rounded: 'full',
			borderWidth: 2,
			my: 3,
		},
	},
};

const theme = extendTheme({
	components: {Button, Input, Textarea, Divider },
	config: {disableTransitionOnChange: false},
	colors : {light, dark, indigo},
	styles,
});

export default theme;