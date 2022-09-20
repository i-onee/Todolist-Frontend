import { IButtons } from './button.comp';
import {
	FiTrash,
	FiEye,
} from 'react-icons/fi';
import {
	useColorModeValue,
	HStack,
	VStack,
	Text,
	Box,
} from '@chakra-ui/react';

const Lists = (props) => {
	const { title, deletes, show, check, icheck, checked } = props;
	return (
		<Box
			bg={useColorModeValue('light.300', 'blackAlpha.500')}
			display={'block'}
			rounded={'md'}
			w={'full'}
			px={2}
			py={6}
		>
			<HStack
				justifyContent={'space-between'}
			>
				<IButtons
					clicks={check}
					icon={icheck}
				/>
				<VStack
					alignItems={'start'}
					w={'full'}
				>
					<Text
						fontWeight={'medium'}
						fontSize={'md'}
						noOfLines={1}
						as={checked}
					>
						{title}
					</Text>
				</VStack>
				<IButtons
					icon={<FiEye />}
					clicks={show}
				/>
				<IButtons
					icon={<FiTrash />}
					clicks={deletes}
				/>
			</HStack>
		</Box>
	)
}

export default Lists;