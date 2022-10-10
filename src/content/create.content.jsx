import { Buttons, IButtons, WidgetBody, WidgetHeader, WidgetFooter, FormContainer, Inputs, TextAreas, Headings } from '../components/@components';
import { EventContext } from '../context/@context';
import { FiLayers } from 'react-icons/fi';
import { useContext } from 'react';
import { Divider } from '@chakra-ui/react';

const CreateTask = () => {
	const { setTabs, handleEvent, userRefs } = useContext(EventContext);
	return (
		<>
			<WidgetHeader>
				<Headings size={'xl'} tTransform={'uppercase'}>create task</Headings>
				<IButtons
					custom={{
						_active: {bg: 'indigoAlpha.200'},
						_hover: {bg: 'indigoAlpha.200'},
						onClick: () => setTabs(2),
						color: 'indigo.200',
						icon: <FiLayers/>
					}}
				/>
			</WidgetHeader>
			<WidgetBody>
				<FormContainer>
					<Inputs id={'ctitle'} refs={ref => userRefs.current.ctitle = ref} pHolder={'title'} />
					<Divider mt={0} mb={4}/>
					<TextAreas id={'cnotes'} refs={ ref => userRefs.current.cnotes = ref } pHolder={'notes'}  />
				</FormContainer>
			</WidgetBody>
			<WidgetFooter>
				<Buttons
					custom={{
						onClick: () => handleEvent('create'),
						bg: 'indigo.200',
						color: 'white',
						px: 9,
						py: 4
					}}
				>create</Buttons>
			</WidgetFooter>
		</>
	);
};

export default CreateTask;