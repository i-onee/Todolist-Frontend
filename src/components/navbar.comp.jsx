import { FiSun, FiMoon } from 'react-icons/fi';
import { IButtons } from './button.comp';
import {
	useColorModeValue,
	useColorMode,
	Container,
	Flex,
	Text,
	Box,
	HStack,
} from '@chakra-ui/react';

const Navbars = (props) => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box
			bg={useColorModeValue('light.100', 'dark.700')}
			rounded={'md'}
			display={'block'}
			maxW= {'xl'}
			w= {'95%'}
			top={0}
			px={8}
			py={4}
		>
			<Container padding={0}>
				<Flex
					justifyContent={'space-between'}
					alignItems={'center'}
				>
					<Text
						fontWeight={'bold'}
					>
						LOGO
					</Text>
					<HStack>
						<IButtons
							icon={colorMode === 'light' ? <FiSun /> : <FiMoon />}
							clicks={toggleColorMode}
						/>
					</HStack>
				</Flex>
			</Container>
		</Box>
	)
}

export default Navbars;