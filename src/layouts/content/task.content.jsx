import { FiCheckCircle, FiCircle, FiPlus } from 'react-icons/fi';
import { Heading, HStack, VStack, Divider } from '@chakra-ui/react';
import { WidgetBody } from '../../components/widget.comp';
import { DataContext } from '../../context/data.context';
import { IButtons } from '../../components/button.comp';
import Lists from '../../components/list.comp';
import { useContext } from 'react';
import { EventContext } from '../../context/event.context';

const Tasklist = () => {
	const { dataDB, dataServices } = useContext(DataContext);
	const { setTabs } = useContext(EventContext);

	return (
		<>
			<HStack alignItems={'center'} justifyContent={'space-between'}>
				<Heading size={'md'} fontWeight={'medium'}>task list</Heading>
				<IButtons icon={<FiPlus />} clicks={() => setTabs(2)}/>
			</HStack>
			<Divider/>
			<WidgetBody>
				<VStack gap={2}>
					{
						dataDB.activity.map((v, i) => {
							const listProp = {
								icheck  : v.complete ? <FiCheckCircle /> : <FiCircle />,
								deletes : () => dataServices('delete', { _id: v._id }),
								check   : () => dataServices('check', { _id: v._id }),
								show    : () => setTabs(0),
								checked : v.complete && 's',
								title   : v.title,
								key     : i
							}
							return <Lists {...listProp}/>
						})
					}
				</VStack>
			</WidgetBody>
		</>
	);
};

export default Tasklist;