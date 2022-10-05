import { Heading } from '@chakra-ui/react';

const Headings = props => {
	const { children, size, as, tTransform, align, opacity } = props;
	const config = {
		textTransform: tTransform,
		alignContent: 'center',
		fontWeight: 'semibold',
		lineHeight: 'none',
		opacity: opacity,
		textAlign: align,
		display: 'flex',
		height: 'auto',
		noOfLines: 1,
		size: size,
		w: 'full',
		as: as
	};
	return <Heading {...config}> {children} </Heading>
};

export default Headings;