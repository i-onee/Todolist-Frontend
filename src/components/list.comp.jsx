import { useColorModeValue, Flex, Box } from '@chakra-ui/react';
import { IButtons, Headings } from './@components';
import { FiTrash, FiEye, } from 'react-icons/fi';

const Lists = props => {
	const { title, deletes, show, check, icheck, checked } = props;
	return (
		<Box bg={useColorModeValue('light.300', 'blackAlpha.600')} display={'block'} rounded={'md'} w={'full'} px={2} py={3}>
			<Flex justifyContent={'space-between'} alignItems={'center'} gap={1}>
				<IButtons
					custom={{
						_active: {bg: 'leafAlpha.200'},
						_hover: {bg: 'leafAlpha.200'},
						color: 'leaf.200',
						onClick: check,
						icon: icheck,
					}}/>
				<Headings size={'lg'} as={checked}> { title } </Headings>
				<IButtons
					custom={{
						_active: {bg: 'lightBlueAlpha.200'},
						_hover: {bg: 'lightBlueAlpha.200'},
						color: 'lightBlue.200',
						onClick: show,
						icon: <FiEye />
					}}/>
				<IButtons
					custom={{
						_active: {bg: 'violetAlpha.200'},
						_hover: {bg: 'violetAlpha.200'},
						color: 'violet.200',
						onClick: deletes,
						icon: <FiTrash />
					}}/>
			</Flex>
		</Box>
	);
};

export default Lists;