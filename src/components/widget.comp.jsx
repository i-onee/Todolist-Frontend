import { Box, useColorModeValue } from '@chakra-ui/react';

const Widget = (props) => {
	const { children } = props;
	const config = {
		bg: useColorModeValue('light.100', 'dark.700'),
		position: 'relative',
		boxShadow: '2xl',
		rounded: 'md',
		w: 'full',
		px: 8,
	};
	return (
		<Box {...config}>
			{children}
		</Box>
	);
};

const WidgetHeader = (props) => {
	const { children } = props;
	const config = {
		justifyContent: 'space-between',
		display: 'flex',
		w: 'full'
	};
	return (
		<Box {...config}>
			{children}
		</Box>
	);
};

const WidgetBody = (props) => {
	const { children } = props;
	const config = {
		overflowY: 'auto',
		rounded: 'md',
		h: '18rem',
		w: 'full',
		sx: {
			'::-webkit-scrollbar': {
				display: 'none'
			},
		},
	};
	return (
		<Box {...config}>
			{children}
		</Box>
	);
};

const WidgetFooter = (props) => {
	const { children } = props;
	const config = {
		justifyContent: 'space-between',
		display: 'flex',
		w: 'full',
	};
	return (
		<Box {...config}>
			{children}
		</Box>
	);
};

export { Widget, WidgetBody, WidgetHeader, WidgetFooter };