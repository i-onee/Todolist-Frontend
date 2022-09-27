import { useColorModeValue, HStack, VStack, Text, Box, } from '@chakra-ui/react';
import { FiTrash, FiEye, } from 'react-icons/fi';
import { IButtons } from './button.comp';

const Lists = (props) => {
	const { title, deletes, show, check, icheck, checked } = props;
	return (
		<Box bg={useColorModeValue('light.300', 'blackAlpha.600')} display={'block'} rounded={'md'} w={'full'} px={2} py={5}>
			<HStack justifyContent={'space-between'}>
				<IButtons
					custom={{
						_active: {bg: 'leafAlpha.200'},
						_hover: {bg: 'leafAlpha.200'},
						color: 'leaf.200',
						onClick: check,
						icon: icheck,
					}}/>
				<VStack alignItems={'start'} w={'full'}>
					<Text fontWeight={'medium'} fontSize={'md'} noOfLines={1} as={checked}>
						{title}
					</Text>
				</VStack>
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
			</HStack>
		</Box>
	);
};

export default Lists;