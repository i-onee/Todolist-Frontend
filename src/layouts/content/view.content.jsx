import { Editable, EditableInput, EditableTextarea, EditablePreview, Heading, Text, HStack, Divider, VStack } from '@chakra-ui/react';
import { EventContext } from '../../context/event.context';
import { WidgetBody } from '../../components/widget.comp';
import { IButtons } from '../../components/button.comp';
import { Inputs, TextAreas } from '../../components/form.comp';
import { FiLayers } from 'react-icons/fi';
import { useContext } from 'react';

const Viewtask = () => {
	const { setTabs } = useContext(EventContext);

	return (
		<>
			<HStack alignItems={'center'} justifyContent={'space-between'}>
				<Heading size={'md'} fontWeight={'medium'}>task details</Heading>
				<IButtons icon={<FiLayers />} clicks={ () => setTabs(1) }/>
			</HStack>
			<Divider/>
			<WidgetBody>
				<VStack gap={2}>
					<Editable defaultValue={'TITLE'} width={'full'}>
						<EditablePreview as={Heading} size={'lg'} />
						<Inputs as={EditableInput} />
					</Editable>
					<Editable defaultValue={'NOTES'} width={'full'}>
						<EditablePreview as={Text} />
						<TextAreas as={EditableTextarea} />
					</Editable>
				</VStack>
			</WidgetBody>
		</>
	);
};

export default Viewtask;