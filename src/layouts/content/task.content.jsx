import { WidgetBody, WidgetHeader, WidgetFooter } from '../../components/widget.comp';
import { Heading, HStack, VStack, Divider } from '@chakra-ui/react';
import { FiCheckCircle, FiCircle, FiPlus } from 'react-icons/fi';
import { EventContext } from '../../context/event.context';
import { DataContext } from '../../context/data.context';
import { IButtons } from '../../components/button.comp';
import Lists from '../../components/list.comp';
import { useContext } from 'react';

const Tasklist = () => {
	const { dataDB, dataServices } = useContext(DataContext);
	const { setTabs, getValue } = useContext(EventContext);

	return (
		<>
			<WidgetHeader>
				<HStack alignItems={'center'} justifyContent={'space-between'}>
					<Heading size={'md'} fontWeight={'medium'}>task list</Heading>
					<IButtons
						custom={{
							onClick: () => setTabs(2),
							icon: <FiPlus/>
						}}
					/>
				</HStack>
			</WidgetHeader>
			<Divider/>
			<WidgetBody>
				<VStack gap={1}>
					{
						dataDB.data.map((v, i) => {
							const listProp = {
								icheck  : v.complete ? <FiCheckCircle /> : <FiCircle />,
								deletes : () => dataServices('delete', { _id: v._id }),
								check   : () => dataServices('check', { _id: v._id }),
								show    : getValue.bind(this, v),
								checked : v.complete && 's',
								title   : v.title,
								key     : i
							}
							return <Lists {...listProp}/>
						})
					}
				</VStack>
			</WidgetBody>
			<Divider />
			<WidgetFooter>
				FOOTER
			</WidgetFooter>
		</>
	);
};

export default Tasklist;