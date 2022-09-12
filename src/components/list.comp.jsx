import { IButtons } from './button.comp';
import {
	CgTrash,
} from 'react-icons/cg';
import {
	useColorModeValue,
	HStack,
	VStack,
	Text,
	Box,
} from '@chakra-ui/react';

const Lists = (props) => {
	const { title, deletes, check, icheck, checked } = props;
	return (
		<Box
			bg={useColorModeValue('white', 'gray.700')}
			display={'block'}
			rounded={'md'}
			w={'full'}
			px={2}
			py={3}
		>
			<HStack
				justifyContent={'space-between'}
			>
				<IButtons
					clicks={check}
					icon={icheck}
				/>
				<VStack
					w={'full'}
					alignItems={'start'}
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
					icon={<CgTrash />}
					clicks={deletes}
				/>
			</HStack>
		</Box>
	)
}

export default Lists;