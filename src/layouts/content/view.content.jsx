import { Editable, EditableInput, EditableTextarea, EditablePreview, Heading, Text, HStack, Divider, VStack } from '@chakra-ui/react';
import { WidgetBody, WidgetHeader, WidgetFooter } from '../../components/widget.comp';
import { IButtons, Buttons } from '../../components/button.comp';
import { Inputs, TextAreas } from '../../components/form.comp';
import { FiLayers, FiEdit, FiX, FiCheck } from 'react-icons/fi';
import { EventContext } from '../../context/event.context';
import { useContext } from 'react';

const Viewtask = () => {
	const { setTabs, defaultValue, handleValue, isEdit, setIsEdit, handleUpdate } = useContext(EventContext);

	return (
		<VStack w={'full'} gap={3}>
			<WidgetHeader>
				<HStack alignItems={'center'} justifyContent={'space-between'}>
					<Heading size={'md'} fontWeight={'medium'}>task details</Heading>
					<HStack>
						<IButtons
							custom={{
								onClick: () => setIsEdit(!isEdit),
								_active: {
									bg: 'violetAlpha.200',
								},
								_hover: {
									bg: 'violetAlpha.200',
								},
								color: 'violet.200',
								icon: isEdit ? <FiX /> : <FiEdit />,
							}}
						/>
						<IButtons
							custom={{
								onClick: () => setTabs(1),
								_active: {
									bg: 'indigoAlpha.200',
								},
								_hover: {
									bg: 'indigoAlpha.200',
								},
								color: 'indigo.200',
								icon: <FiLayers />,
							}}
						/>
					</HStack>
				</HStack>
			</WidgetHeader>
			<WidgetBody>
				<VStack gap={2}>
					<Editable isPreviewFocusable={isEdit} selectAllOnFocus={false} defaultValue={defaultValue.title} value={`${defaultValue.title}`} onChange={(e) => handleValue('title', e)} placeholder={'enter new title'} width={'full'}>
						<EditablePreview as={Heading} size={'lg'} h={'3rem'} />
						<Inputs as={EditableInput} focus={true} />
					</Editable>
					<Editable isPreviewFocusable={isEdit} selectAllOnFocus={false} defaultValue={defaultValue.notes} value={`${defaultValue.notes}`} onChange={(e) => handleValue('notes', e)} placeholder={'enter new notes'} width={'full'}>
						<EditablePreview as={Text} h={'11rem'} />
						<TextAreas as={EditableTextarea} focus={true} />
					</Editable>
				</VStack>
			</WidgetBody>
			<WidgetFooter>
				<HStack justifyContent={'center'}>
					<Buttons
						custom={{
							onClick: handleUpdate,
							disabled: !isEdit,
							bg: 'indigo.200',
							color: 'white',
							rounded: 'md',
							px: 9,
							py: 4
						}}>update</Buttons>
				</HStack>
			</WidgetFooter>
		</VStack>
	);
};

export default Viewtask;