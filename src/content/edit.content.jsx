import { Buttons, IButtons, FormContainer, Inputs, TextAreas, WidgetBody, WidgetHeader, WidgetFooter, Headings } from '../components/components';
import { EventContext, DataContext } from '../context/context';
import { FiEye } from 'react-icons/fi';
import { useContext } from 'react';

const EditTask = () => {
	const { setTabs, handleEvent, userRefs } = useContext(EventContext);
	const { dataDB } = useContext(DataContext);
	return (
		<>
			<WidgetHeader>
				<Headings size={'md'} tTransform={'uppercase'}>edit task</Headings>
				<IButtons
					custom={{
						_active: { bg: 'lightBlueAlpha.200' },
						_hover: { bg: 'lightBlueAlpha.200' },
						onClick: () => setTabs(1),
						color: 'lightBlue.200',
						icon: <FiEye/>
					}}
				/>
			</WidgetHeader>
			<WidgetBody>
				<FormContainer>
					<Inputs id={'etitle'} refs={ ref => userRefs.current.etitle = ref}  pHolder={'new title'} />
					<TextAreas id={'enotes'} refs={ ref => userRefs.current.enotes = ref}  pHolder={'new notes'}  />
				</FormContainer>
			</WidgetBody>
			<WidgetFooter>
				<Buttons
					custom={{
						onClick: () => handleEvent('update', dataDB.view),
						bg: 'indigo.200',
						color: 'white',
						px: 9,
						py: 4
					}}
				>update</Buttons>
			</WidgetFooter>
		</>
	);
};

export default EditTask;