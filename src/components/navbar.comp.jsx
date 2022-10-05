import { useColorModeValue, useColorMode, Flex, Box, Image } from '@chakra-ui/react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { IButtons } from './button.comp';

const Navbars = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Box bg={useColorModeValue('light.100', 'dark.700')} rounded={'md'} w={'full'} top={0} px={8} py={3}>
			<Flex justifyContent={'space-between'} alignItems={'center'}>
				<Image src={'./logo.png'} w={10} />
				<IButtons
					custom={{
						icon: colorMode === 'light' ? <FiMoon /> : <FiSun />,
						color: useColorModeValue('sun.300', 'sun.100'),
						_active: {bg: 'sunAlpha.200'},
						_hover: {bg: 'sunAlpha.200'},
						onClick: toggleColorMode,
					}}
				/>
			</Flex>
		</Box>
	);
};

export default Navbars;