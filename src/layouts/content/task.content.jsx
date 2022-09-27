import { WidgetBody, WidgetHeader } from '../../components/widget.comp';
import { FiCheckCircle, FiCircle, FiPlus } from 'react-icons/fi';
import { EventContext } from '../../context/event.context';
import { Heading, HStack, VStack } from '@chakra-ui/react';
import { DataContext } from '../../context/data.context';
import { IButtons } from '../../components/button.comp';
import Lists from '../../components/list.comp';
import { useContext } from 'react';

const Tasklist = () => {
	const { dataDB, dataServices } = useContext(DataContext);
	const { setTabs, handleEvent } = useContext(EventContext);

	return (
		<VStack w={'full'} gap={3}>
			<WidgetHeader>
				<HStack alignItems={'center'} justifyContent={'space-between'}>
					<Heading size={'md'} fontWeight={'medium'}>task list</Heading>
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
								return <Lists {...listProp}/>
							})
						) : <Heading opacity={0.2} size={'xl'} fontWeight={'medium'}>no task :)</Heading>
					}
				</VStack>
			</WidgetBody>
		</VStack>
	);
};

export default Tasklist;