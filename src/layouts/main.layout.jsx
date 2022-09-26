import { HStack, TabPanels, TabPanel, Tabs, useColorModeValue, VStack } from '@chakra-ui/react';
import { EventContext } from '../context/event.context';
import { Widget } from '../components/widget.comp';
import Sections from '../components/section.comp';
import Createlist from './content/create.content';
import Navbars from '../components/navbar.comp';
import Tasklist from './content/task.content';
import Viewtask from './content/view.content';
import { useContext } from 'react';

const MainLayout = () => {
	const { tabs } = useContext(EventContext);

	return (
		<>
			<Sections custom={{ color: useColorModeValue('gray.800', 'white'), bgGradient: 'linear(to-r, violet.300, indigo.300)', h: 'xs' }} />
			<Sections>
				<HStack justifyContent={'center'}>
					<VStack justifyContent={'center'} position={'absolute'} gap={2} maxW={'xl'} w={'95%'} top={-60} >
						<Navbars />
						<Widget>
							<Tabs index={tabs}>
								<TabPanels>
									<TabPanel><Viewtask/></TabPanel>
									<TabPanel><Tasklist/></TabPanel>
									<TabPanel><Createlist/></TabPanel>
								</TabPanels>
							</Tabs>
						</Widget>
					</VStack>
				</HStack>
			</Sections>
		</>
	)
}

export default MainLayout;