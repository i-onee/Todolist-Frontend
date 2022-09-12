import { Box } from '@chakra-ui/react';

const widget = {
	rounded: 'lg',
	marginX: 2,
	maxW: 'xl',
	w: '95%',
	p: 8
}

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
			overflowY={'auto'}
			rounded={'md'}
			h={'xs'}
			sx={{
				'::-webkit-scrollbar': {
					display: 'none'
				}
			}}
		>
			{children}
		</Box>
	)
};

export { Widget, WidgetBody };