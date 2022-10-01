import { WidgetBody, WidgetFooter, WidgetHeader } from '../../components/widget.comp';
import { FiCheckCircle, FiCircle, FiPlus } from 'react-icons/fi';
import { EventContext } from '../../context/event.context';
import { DataContext } from '../../context/data.context';
import { IButtons } from '../../components/button.comp';
import { Heading, Text, Flex, useColorModeValue } from '@chakra-ui/react';
import Lists from '../../components/list.comp';
import { useContext } from 'react';

const Tasklist = () => {
	const { dataDB, dataServices } = useContext(DataContext);
	const { setTabs, handleEvent } = useContext(EventContext);
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
									deletes: () => dataServices('delete', { _id: items._id }),
									check: () => dataServices('check', { _id: items._id }),
									show: () => handleEvent('value', items),
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

export default Tasklist;