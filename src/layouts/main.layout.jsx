import { TabContent, TabContainer } from '../components/tab.comp';
import { HStack, useColorModeValue, VStack } from '@chakra-ui/react';
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
			<Sections custom={{ color: useColorModeValue('gray.800', 'white'), bg: 'indigo.200', h: 'xs' }} />
			<Sections>
				<HStack justifyContent={'center'}>
					<VStack justifyContent={'center'} position={'absolute'} gap={2} maxW={'xl'} w={'95%'} top={-60} >
						<Navbars />
						<Widget>
							<TabContainer index={tabs}>
								<TabContent>
									<Viewtask />
								</TabContent>
								<TabContent>
									<Tasklist />
								</TabContent>
								<TabContent>
									<Createlist />
								</TabContent>
							</TabContainer>
						</Widget>
					</VStack>
				</HStack>
			</Sections>
		</>
	)
}

export default MainLayout;