import { WidgetBody, WidgetHeader, WidgetFooter, IButtons, MdPreview } from '../components/components';
import { EventContext, DataContext } from '../context/context';
import { Heading, Wrap, Text } from '@chakra-ui/react';
import { FiLayers, FiEdit3 } from 'react-icons/fi';
import { useContext } from 'react';

const ViewTask = () => {
	const { setTabs } = useContext(EventContext);
	const { dataDB } = useContext(DataContext);
	return (
		<>
			<WidgetHeader>
				<Heading size={'md'} fontWeight={'medium'} textTransform={'lowercase'} noOfLines={1}>{dataDB.view.title}</Heading>
				<Wrap>
					<IButtons
							custom={{
								_active: { bg: 'lightBlueAlpha.200' },
								_hover: { bg: 'lightBlueAlpha.200' },
								isDisabled: dataDB.view.complete,
								onClick: () => setTabs(0),
								color: 'lightBlue.200',
								icon: <FiEdit3 />,
							}}
						/>
					<IButtons
						custom={{
							_active: { bg: 'indigoAlpha.200' },
							_hover: { bg: 'indigoAlpha.200' },
							onClick: () => setTabs(2),
							color: 'indigo.200',
							icon: <FiLayers />,
						}}
					/>
				</Wrap>
			</WidgetHeader>
			<WidgetBody>
				<MdPreview children={dataDB.view.notes} />
			</WidgetBody>
			<WidgetFooter>
				{
					dataDB.view.complete ?
						<Text px={2} rounded={'sm'} color={'leaf.300'} bg={'leafAlpha.200'}>complete</Text>
						:
						<Text px={2} rounded={'sm'} color={'violet.300'} bg={'violetAlpha.200'}>not complete</Text>
				}
			</WidgetFooter>
		</>
	);
};

export default ViewTask;