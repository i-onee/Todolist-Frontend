import { Box, useColorModeValue } from '@chakra-ui/react';

const Widget = (props) => {
	const { children } = props;
	return (
		<Box
			bg={useColorModeValue('gray.100', 'gray.800')}
			position={'absolute'}
			rounded={'lg'}
			padding={'8'}
			maxW={'xl'}
			marginX={2}
			w={'95%'}
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
			display={'block'}
			rounded={'md'}
			maxH={'md'}
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