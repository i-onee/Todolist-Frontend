import { Buttons, IButtons, WidgetBody, WidgetHeader, WidgetFooter, FormContainer, Inputs, TextAreas } from '../components/components';
import { EventContext } from '../context/context';
import { Heading } from '@chakra-ui/react';
import { FiLayers } from 'react-icons/fi';
import { useContext } from 'react';

const CreateTask = () => {
	const { setTabs, handleEvent, userRefs } = useContext(EventContext);
	return (
		<>
			<WidgetHeader>
				<Heading size={'md'} fontWeight={'medium'} textTransform={'uppercase'}>create task</Heading>
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
					<Inputs id={'ctitle'} refs={ ref => userRefs.current.ctitle = ref } pHolder={'title'} />
					<TextAreas id={'cnotes'} refs={ ref => userRefs.current.cnotes = ref } pHolder={'notes'}  />
				</FormContainer>
			</WidgetBody>
			<WidgetFooter>
				<Buttons
					custom={{
						onClick: () => handleEvent('create'),
						bg: 'indigo.200',
						color: 'white',
						rounded: 'md',
						px: 9,
						py: 4
					}}
				>create</Buttons>
			</WidgetFooter>
		</>
	);
};

export default CreateTask;