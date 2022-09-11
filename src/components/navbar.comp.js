import { CgSun, CgMoon } from 'react-icons/cg';
import { IButtons } from './button.comp';
import {
	useColorMode,
	Container,
	Flex,
	Text,
	Box,
} from '@chakra-ui/react';

const Navbars = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box
			width='full'
			paddingY={2}
			position={'fixed'}
			top={0}
			zIndex={100}
		>
			<Container
				maxW={'container.lg'}
			>
				<Flex
					justifyContent={'space-between'}
					alignItems={'center'}
				>
					<Text
						fontWeight={'bold'}
					>
						LOGO
					</Text>
					<IButtons
						icon={colorMode === 'light' ? <CgSun fontSize={'1.2rem'} /> : <CgMoon fontSize={'1.2rem'} />}
						clicks={toggleColorMode}
					/>
				</Flex>
			</Container>
		</Box>
	)
}

export default Navbars;