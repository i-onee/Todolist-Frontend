import { useColorModeValue, HStack, VStack, Text, Box, } from '@chakra-ui/react';
import { FiTrash, FiEye, } from 'react-icons/fi';
import { IButtons } from './button.comp';

const Lists = (props) => {
	const { title, deletes, show, check, icheck, checked } = props;
	return (
		<Box bg={useColorModeValue('light.300', 'blackAlpha.600')} display={'block'} rounded={'md'} w={'full'} px={2} py={4}>
			<HStack justifyContent={'space-between'}>
				<IButtons
					custom={{
						onClick: check,
						icon: icheck,
					}}
				/>
				<VStack alignItems={'start'} w={'full'}>
					<Text fontWeight={'medium'} fontSize={'md'} noOfLines={1} as={checked}>
						{title}
					</Text>
				</VStack>
				<IButtons
					custom={{
						onClick: show,
						icon: <FiEye/>
					}}
				/>
				<IButtons
					custom={{
						onClick: deletes,
						icon: <FiTrash/>
					}}
				/>
			</HStack>
		</Box>
	)
}

export default Lists;