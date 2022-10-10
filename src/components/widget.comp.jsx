import { Box, useColorModeValue } from '@chakra-ui/react';

const Widget = props => {
	const { children } = props;
	const config = {
		bg: useColorModeValue('light.100', 'dark.700'),
		position: 'relative',
		boxShadow: '2xl',
		rounded: 'md',
		my: 'auto',
		w: 'full',
		px: 8,
	};
	return <Box {...config}> {children} </Box>
};

const WidgetHeader = props => {
	const { children } = props;
	const config = {
		justifyContent: 'space-between',
		alignItems: 'center',
		display: 'flex',
		w: 'full'
	};
	return <Box {...config}> {children} </Box>
};

const WidgetBody = props => {
	const { children, sx } = props;
	const config = {
		boxSizing: 'border-box',
		position: 'relative',
		rounded: 'md',
		h: '18rem',
		w: 'full',
		sx: sx,
		__css: {
			'::-webkit-scrollbar': {
				display: 'none'
			},
		},
	};
	return <Box {...config}> {children} </Box>
};

const WidgetFooter = props => {
	const { children } = props;
	const config = {
		justifyContent: 'space-between',
		display: 'flex',
		w: 'full',
	};
	return <Box {...config}> {children} </Box>
};

export { Widget, WidgetBody, WidgetHeader, WidgetFooter };