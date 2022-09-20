import { Box } from '@chakra-ui/react';

const widget = {
	rounded: 'md',
	maxW: 'xl',
	w: '95%',
	p: 6,
};

const widgetBody = {
	overflowY: 'auto',
	display: 'block',
	rounded: 'md',
	h: 'xs',
	sx: {
		'::-webkit-scrollbar': {
			display: 'none'
		},
	},
};

const Widget = (props) => {
	const { children, custom } = props;
	return (
		<Box
			{...widget}
			{...custom}
		>
			{children}
		</Box>
	)
};

const WidgetBody = (props) => {
	const { children } = props;
	return (
		<Box
			{...widgetBody}
		>
			{children}
		</Box>
	)
};

export { Widget, WidgetBody };