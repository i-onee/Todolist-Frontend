import { HStack, TabPanels, TabPanel, Tabs, useColorModeValue, VStack, Flex } from '@chakra-ui/react';
import { EventContext } from '../context/event.context';
import { Widget } from '../components/widget.comp';
import { Sections } from '../components/section.comp';
import Createlist from './content/create.content';
import Navbars from '../components/navbar.comp';
import Tasklist from './content/task.content';
import Viewtask from './content/view.content';
import EditTask from './content/edit.content';
import { useContext } from 'react';

const MainLayout = () => {
	const { tabs } = useContext(EventContext);
	return (
		<>
			<Sections custom={{ color: useColorModeValue('gray.800', 'white'), bgGradient: 'linear(to-r, violet.300, indigo.300)', h: '40vh' }} />
			<Sections custom={{ position: 'absolute', w: 'full' }}>
				<Flex flexDir={'column'} gap={2}>
					<Navbars/>
					<Widget>
						<Tabs index={tabs}>
							<TabPanels>
								<TabPanel> <EditTask/> </TabPanel>
								<TabPanel> <Viewtask/> </TabPanel>
								<TabPanel> <Tasklist/> </TabPanel>
								<TabPanel> <Createlist/> </TabPanel>
							</TabPanels>
						</Tabs>
					</Widget>
				</Flex>
			</Sections>
			<Sections custom={{ h: '60vh' }} />
		</>
	);
};

export default MainLayout;