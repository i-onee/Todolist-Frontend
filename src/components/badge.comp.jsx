import { Box } from '@chakra-ui/react';

const Badges = props => {
	const { children, isComplete, } = props;
	const config = {
		bg: isComplete === true ? 'leafAlpha.200' : isComplete === false ? 'violetAlpha.200' : 'lightBlueAlpha.200',
		color: isComplete === true ? 'leaf.300' : isComplete === false ? 'violet.300' : 'lightBlue.300',
		as: isComplete === false && 's',
		fontWeight: 'normal',
		fontSize: 'sm',
		rounded: '5px',
		px: 3,
		py: 1
	};
	return <Box {...config} > {children} </Box>
};

export default Badges;