import { IButtons, Lists, WidgetBody, WidgetFooter, WidgetHeader } from '../components/components';
import { FiCheckCircle, FiCircle, FiPlus } from 'react-icons/fi';
import { DataContext, EventContext} from '../context/context';
import { Heading, Text, Flex } from '@chakra-ui/react';
import { useContext } from 'react';

const TaskList = () => {
	const { setTabs, handleEvent } = useContext(EventContext);
	const { dataDB } = useContext(DataContext);
	const totalTask = dataDB.data.length
	return (
		<>
			<WidgetHeader>
				<Heading size={'md'} fontWeight={'medium'} textTransform={'uppercase'}>task list</Heading>
				<IButtons
					custom={{
						_active: { bg: 'indigoAlpha.200' },
						_hover: { bg: 'indigoAlpha.200' },
						onClick: () => setTabs(3),
						color: 'indigo.200',
						icon: <FiPlus/>
					}}
				/>
			</WidgetHeader>
			<WidgetBody>
				<Flex flexDir={'column'} gap={4} alignItems={totalTask === 0 && 'center'} justifyContent={totalTask === 0 && 'center'} h={'full'}>
					{
						totalTask !== 0 ? (
							dataDB.data.map((items, i) => {
								const listProp = {
									icheck: items.complete ? <FiCheckCircle /> : <FiCircle />,
									deletes: () => handleEvent('delete', items),
									check: () => handleEvent('check', items),
									show: () => handleEvent('view', items),
									checked: items.complete && 's',
									title: items.title,
									key: i
								}
								return <Lists {...listProp}/>
							})
						) : <Heading opacity={0.2} size={'xl'} fontWeight={'medium'}>no task :)</Heading>
					}
				</Flex>
			</WidgetBody>
			<WidgetFooter>
				<Text px={2} rounded={'sm'} color={'lightBlue.300'} bg={'lightBlueAlpha.200'}>{ totalTask } task left</Text>
			</WidgetFooter>
		</>
	);
};

export default TaskList;