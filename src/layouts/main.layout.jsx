import { TabPanels, TabPanel, Tabs, useColorModeValue, Flex } from '@chakra-ui/react';
import { CreateTask, TaskList, ViewTask, EditTask } from '../content/content';
import { Sections, Widget, Navbars } from '../components/components';
import { EventContext } from '../context/context';
import { useContext } from 'react';

const MainLayout = () => {
	const { tabs } = useContext(EventContext);
	return (
		<>
			<Sections custom={{ color: useColorModeValue('gray.800', 'white'), bgGradient: 'linear(to-r, violet.300, indigo.300)', h: '40%' }} />
			<Sections custom={{ position: 'absolute', w: 'full' }}>
				<Flex flexDir={'column'} gap={2}>
					<Navbars/>
					<Widget>
						<Tabs index={tabs}>
							<TabPanels>
								<TabPanel> <EditTask/> </TabPanel>
								<TabPanel> <ViewTask/> </TabPanel>
								<TabPanel> <TaskList/> </TabPanel>
								<TabPanel> <CreateTask/> </TabPanel>
							</TabPanels>
						</Tabs>
					</Widget>
				</Flex>
			</Sections>
			<Sections custom={{ h: '60%' }} />
		</>
	);
};

export default MainLayout;