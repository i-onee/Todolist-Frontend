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
			p={2}
			top={0}
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