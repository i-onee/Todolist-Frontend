import { IButtons } from './button.comp';
import {
	CgTrashEmpty,
	CgEye,
} from 'react-icons/cg';
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
			bg={useColorModeValue('whiteAlpha.700', 'blackAlpha.500')}
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
					icon={<CgEye />}
					clicks={show}
				/>
				<IButtons
					icon={<CgTrashEmpty />}
					clicks={deletes}
				/>
			</HStack>
		</Box>
	)
}

export default Lists;