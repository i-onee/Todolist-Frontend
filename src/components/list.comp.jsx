import { useColorModeValue, Flex, VStack, Text, Box, } from '@chakra-ui/react';
import { FiTrash, FiEye, } from 'react-icons/fi';
import { IButtons } from './button.comp';

const Lists = (props) => {
	const { title, deletes, show, check, icheck, checked } = props;
	return (
		<Box bg={useColorModeValue('light.300', 'blackAlpha.600')} display={'block'} rounded={'md'} w={'full'} px={2} py={4}>
			<Flex justifyContent={'space-between'} alignItems={'center'} gap={0.5}>
				<IButtons
					custom={{
						_active: {bg: 'leafAlpha.200'},
						_hover: {bg: 'leafAlpha.200'},
						color: 'leaf.200',
						onClick: check,
						icon: icheck,
					}}/>
				<Flex flexDir={'column'} w={'full'}>
					<Text fontWeight={'medium'} fontSize={'lg'} noOfLines={1} as={checked}>
						{title}
					</Text>
				</Flex>
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