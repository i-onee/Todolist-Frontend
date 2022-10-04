import { Buttons, IButtons, FormContainer, Inputs, TextAreas, WidgetBody, WidgetHeader, WidgetFooter } from '../components/components';
import { EventContext, DataContext } from '../context/context';
import { Heading } from '@chakra-ui/react';
import { FiEye } from 'react-icons/fi';
import { useContext } from 'react';

const EditTask = () => {
	const { setTabs, handleEvent, userRefs } = useContext(EventContext);
	const { dataDB } = useContext(DataContext);
	return (
		<>
			<WidgetHeader>
				<Heading size={'md'} fontWeight={'medium'} textTransform={'uppercase'}>edit task</Heading>
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
						rounded: 'md',
						px: 9,
						py: 4
					}}
				>update</Buttons>
			</WidgetFooter>
		</>
	);
};

export default EditTask;