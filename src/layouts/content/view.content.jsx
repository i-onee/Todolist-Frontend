import { Editable, EditableInput, EditableTextarea, EditablePreview, Heading, Text, HStack, Divider, VStack } from '@chakra-ui/react';
import { Inputs, TextAreas } from '../../components/form.comp';
import { EventContext } from '../../context/event.context';
import { WidgetBody } from '../../components/widget.comp';
import { Buttons, IButtons } from '../../components/button.comp';
import { FiLayers, FiEdit, FiCheck, FiX} from 'react-icons/fi';
import { useContext, useState } from 'react';

const Viewtask = () => {
	const { setTabs, defaultValue, handleValue, isEdit, setIsEdit, handleUpdate } = useContext(EventContext);

	console.log(defaultValue.id)

	return (
		<>
			<HStack alignItems={'center'} justifyContent={'space-between'}>
				<Heading size={'md'} fontWeight={'medium'}>task details</Heading>
				<HStack>
					<IButtons icon={isEdit ? <FiX/> : <FiEdit/>} clicks={() => setIsEdit(!isEdit)}/>
					<IButtons icon={<FiLayers />} clicks={ () => setTabs(1) }/>
				</HStack>
			</HStack>
			<Divider/>
			<WidgetBody>
				<VStack gap={2}>
					<Editable isPreviewFocusable={isEdit} selectAllOnFocus={false} defaultValue={defaultValue.title} value={`${defaultValue.title}`} onChange={(e) => handleValue('title', e)} placeholder={'enter new title'} width={'full'}>
						<EditablePreview as={Heading} size={'lg'} h={'3rem'} />
						<Inputs as={EditableInput} focus={true} />
					</Editable>
					<Editable isPreviewFocusable={isEdit} selectAllOnFocus={false} defaultValue={defaultValue.notes} value={`${defaultValue.notes}`} onChange={(e) => handleValue('notes', e)} placeholder={'enter new notes'} width={'full'}>
						<EditablePreview as={Text} h={'11rem'} />
						<TextAreas as={EditableTextarea} onFocus={true} />
					</Editable>
					<HStack justifyContent={'center'}>
						{
							isEdit && (<Buttons clicks={handleUpdate} custom={{ bg: 'indigo.200', type: 'submit', rounded: 'md', px: 16, py: 4 }}>update</Buttons>)
						}
					</HStack>
				</VStack>
			</WidgetBody>
		</>
	);
};

export default Viewtask;