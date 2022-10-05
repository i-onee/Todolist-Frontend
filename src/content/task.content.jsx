import { IButtons, Lists, WidgetBody, WidgetFooter, WidgetHeader, Badges, Headings } from '../components/components';
import { FiCheckCircle, FiCircle, FiPlus } from 'react-icons/fi';
import { DataContext, EventContext} from '../context/context';
import { Heading, Flex } from '@chakra-ui/react';
import { useContext } from 'react';

const TaskList = () => {
	const { setTabs, handleEvent } = useContext(EventContext);
	const { dataDB } = useContext(DataContext);
	const totalTask = dataDB.data.length
	return (
		<>
			<WidgetHeader>
				<Headings size={'md'} tTransform={'uppercase'}>task list</Headings>
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
						) : <Headings size={'xl'} align={'center'} opacity={0.1}>no task :)</Headings>
					}
				</Flex>
			</WidgetBody>
			<WidgetFooter>
				<Badges>{ totalTask } task left</Badges>
			</WidgetFooter>
		</>
	);
};

export default TaskList;