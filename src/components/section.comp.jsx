import { Container, Box } from '@chakra-ui/react';

const Sections = props => {
	const { children, custom } = props;
	return (
		<Box {...custom}>
			<Container maxW={'container.sm'}>
				{children}
			</Container>
		</Box>
	);
};

export default Sections;