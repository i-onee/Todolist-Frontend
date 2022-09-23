import { Editable, EditableInput, EditableTextarea, EditablePreview, Heading, Text, HStack, Divider, VStack } from '@chakra-ui/react';
import { WidgetBody, WidgetHeader, WidgetFooter } from '../../components/widget.comp';
import { Buttons, IButtons } from '../../components/button.comp';
import { Inputs, TextAreas } from '../../components/form.comp';
import { FiLayers, FiEdit, FiX } from 'react-icons/fi';
import { EventContext } from '../../context/event.context';
import { useContext } from 'react';

const Viewtask = () => {
	const { setTabs, defaultValue, handleValue, isEdit, setIsEdit, handleUpdate } = useContext(EventContext);

	return (
		<>
			<WidgetHeader>
				<HStack alignItems={'center'} justifyContent={'space-between'}>
					<Heading size={'md'} fontWeight={'medium'}>task details</Heading>
					<HStack>
						<IButtons
							custom={{
								onClick: () => setIsEdit(!isEdit),
								icon: isEdit ? <FiX/> : <FiEdit/>,
							}}
						/>
						<IButtons
							custom={{
								onClick: () => setTabs(1),
								icon: <FiLayers />,
							}}
						/>
					</HStack>
				</HStack>
			</WidgetHeader>
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
				</VStack>
			</WidgetBody>
			<Divider />
			<WidgetFooter>
				{
					isEdit && (
						<Buttons
							custom={{
								onClick: handleUpdate,
								bg: 'indigo.200',
								rounded: 'full',
								px: 16,
								py: 4
							}}
						>update</Buttons>
					)
				}
			</WidgetFooter>
		</>
	);
};

export default Viewtask;