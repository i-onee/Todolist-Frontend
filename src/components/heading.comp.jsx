import { Heading } from '@chakra-ui/react';

const Headings = props => {
	const { children, size, as, tTransform, opacity, align } = props;
	const config = {
		textTransform: tTransform,
		fontWeight: 'semibold',
		display: 'flex',
		alignItems: 'center',
		textAlign: align,
		opacity: opacity,
		fontSize: size,
		noOfLines: 1,
		w: 'full',
		as: as
	};
	return <Heading {...config}> {children} </Heading>
};

export default Headings;