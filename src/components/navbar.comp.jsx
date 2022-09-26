import { useColorModeValue, useColorMode, Container, HStack, Flex, Text, Box } from '@chakra-ui/react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { IButtons } from './button.comp';

const Navbars = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box bg={useColorModeValue('light.100', 'dark.700')} rounded={'md'} display={'block'} maxW={'xl'} w={'full'} top={0} px={8} py={4}>
			<Container padding={0}>
				<Flex justifyContent={'space-between'} alignItems={'center'}>
					<Text fontWeight={'bold'} >
						LOGO
					</Text>
					<HStack>
						<IButtons
							custom={{
								icon: colorMode === 'light' ? <FiMoon /> : <FiSun />,
								_active: {
									bg: 'sunAlpha.200',
								},
								_hover: {
									bg: 'sunAlpha.200',
								},
								color: useColorModeValue('sun.300', 'sun.100'),
								onClick: toggleColorMode,
							}}
						/>
					</HStack>
				</Flex>
			</Container>
		</Box>
	);
};

export default Navbars;