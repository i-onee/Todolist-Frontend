import { Container } from '@chakra-ui/react';

const Sections = props => {
	const { children, sx } = props;
	return (
		<Container sx={sx}>
			{children}
		</Container>
	);
};

export default Sections;