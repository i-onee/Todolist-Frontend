import { WidgetBody, WidgetHeader, WidgetFooter, IButtons, MdPreview, Badges, Headings } from '../components/components';
import { EventContext, DataContext } from '../context/context';
import { FiLayers, FiEdit3 } from 'react-icons/fi';
import { useContext } from 'react';

const ViewTask = () => {
	const { setTabs } = useContext(EventContext);
	const { dataDB } = useContext(DataContext);
	return (
		<>
			<WidgetHeader>
				<Headings size={'md'} tTransform={'lowercase'}>{dataDB.view.title}</Headings>
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
			</WidgetHeader>
			<WidgetBody>
				<MdPreview children={dataDB.view.notes} />
			</WidgetBody>
			<WidgetFooter>
				<Badges isComplete={dataDB.view.complete} >complete</Badges>
			</WidgetFooter>
		</>
	);
};

export default ViewTask;