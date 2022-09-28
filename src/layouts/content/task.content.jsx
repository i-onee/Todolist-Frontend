import { WidgetBody, WidgetFooter, WidgetHeader } from '../../components/widget.comp';
import { FiCheckCircle, FiCircle, FiPlus, FiList, FiClock } from 'react-icons/fi';
import { IButtons, Buttons } from '../../components/button.comp';
import { EventContext } from '../../context/event.context';
import { Heading, HStack, VStack, WrapItem } from '@chakra-ui/react';
import { DataContext } from '../../context/data.context';
import Lists from '../../components/list.comp';
import { useContext } from 'react';
import Skeletons from '../../components/skeleton.comp';

const Tasklist = () => {
	const { dataDB, dataServices, dataLoaded } = useContext(DataContext);
	const { setTabs, handleEvent } = useContext(EventContext);

	return (
		<VStack w={'full'} gap={3}>
			<WidgetHeader>
				<HStack alignItems={'center'} justifyContent={'space-between'}>
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
				</HStack>
			</WidgetHeader>
			<WidgetBody>
				<VStack gap={2} justifyContent={dataDB.data.length === 0 && 'center'} h={'full'}>
					{
						dataDB.data.length !== 0 ? (
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
								return <Skeletons isLoaded={dataLoaded}> <Lists {...listProp}/> </Skeletons>
							})
						) : <Heading opacity={0.2} size={'xl'} fontWeight={'medium'}>no task :)</Heading>
					}
				</VStack>
			</WidgetBody>
			<WidgetFooter>
				<HStack justifyContent={'space-between'}>
				</HStack>
			</WidgetFooter>
		</VStack>
	);
};

export default Tasklist;