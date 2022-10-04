import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
	global: (props) => ({
		'html, body': {
			background: mode('light.400', 'dark.800')(props),
			color: mode('gray.600', 'gray.400')(props),
			transitionProperty: 'background',
			transitionDuration: '0.3s',
			fontFamily: 'SF Pro UI',
			position: 'relative',
			userSelect: 'none',
			h: '100%',
		},
		'#root': {
			justifyContent: 'center',
			flexDirection: 'column',
			position: 'relative',
			display: 'flex',
			h: '100%',
		}
	}),
};

// custom color
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

const leaf = {
	100: '#8ab754',
	200: '#8bc34a',
	300: '#7daf42',
};

const leafAlpha = {
	200: `${leaf[ 200 ]}33`
};

const indigo = {
	100: '#b892f7',
	200: '#8a4af3',
	300: '#673ab7'
};

const indigoAlpha = {
	200: `${indigo[200]}33`,
};

const violet = {
	100: '#eb3472',
	200: '#e91e63',
	300: '#d11b59'
};

const violetAlpha = {
	200: `${violet[ 200 ]}33`
};

const lightBlue = {
	100: '#03a9f4',
	200: '#2196f3',
	300: '#1d87da',
};

const lightBlueAlpha = {
	200: `${lightBlue[ 200 ]}33`
};

const sun = {
	100: '#ffc71f',
	200: '#ffc107',
	300: '#e5ad06',
};

const sunAlpha = {
	200: `${sun[ 200 ]}33`,
};

// custom component
const Button = {
	baseStyle: {
		fontWeight: 'normal',
		outline: 'none',
		rounded: 'full',
	},
	sizes: {
		md: { minW: 'fit-content', w: 0, h: 0, px: 0, py: 0 }
	},
	variants: {
		solid: () => ({
			_active: false,
			_hover: false,
			bg: 'none',
		}),
	}
};

const Input = {
	variants: {
		outline: (props) => ({
			field: {
				bg: mode('light.300', 'blackAlpha.600')(props),
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
			bg: mode('light.300', 'blackAlpha.600')(props),
			height: '13.3rem',
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

const Heading = {
	baseStyle: {
		display: 'flex',
		alignItems: 'center',
	},
};

const Tabs = {
	baseStyle: {
		tabpanel: {
			justifyContent: 'space-between',
			flexDirection: 'column',
			display: 'flex',
			h: '26rem',
			py: 4,
			px: 0
		},
	},
};



// declare theme customs
const theme = extendTheme({
	colors: { light, sun, sunAlpha, dark, indigo, indigoAlpha, violet, violetAlpha, lightBlue, lightBlueAlpha, leaf, leafAlpha},
	components: {Button, Input, Textarea, Divider, Tabs, Heading },
	config: {disableTransitionOnChange: false},
	styles,
});

export default theme;