import { CgSun, CgMoon, CgMathPlus } from 'react-icons/cg';
import { IButtons } from './button.comp';
import {
	useColorMode,
	Container,
	Flex,
	Text,
	Box,
	HStack,
} from '@chakra-ui/react';

const Navbars = (props) => {
	const {tabAction} = props
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
					<HStack>
						<IButtons
							icon={<CgMathPlus />}
							clicks={tabAction}
						/>
						<IButtons
							icon={colorMode === 'light' ? <CgSun /> : <CgMoon />}
							clicks={toggleColorMode}
						/>

					</HStack>
				</Flex>
			</Container>
		</Box>
	)
}

export default Navbars;