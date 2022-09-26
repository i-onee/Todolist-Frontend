import { Container, Stack } from '@chakra-ui/react';

const Sections = (props) => {
	const { children, custom } = props;
	return (
		<Stack position={'relative'} display={'block'} {...custom}>
			<Container maxW={'container.lg'} position={'relative'}>
				{children}
			</Container>
		</Stack>
	);
};

export default Sections;