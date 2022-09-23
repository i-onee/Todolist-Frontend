import { FormContainer, Inputs, TextAreas } from '../../components/form.comp';
import { Buttons, IButtons } from '../../components/button.comp';
import { Heading, HStack, Divider } from '@chakra-ui/react';
import { EventContext } from '../../context/event.context';
import { WidgetBody } from '../../components/widget.comp';
import { FiLayers } from 'react-icons/fi';
import { useContext } from 'react';

const Createlist = () => {
	const { setTabs, handleSubmit, titleRef, notesRef } = useContext(EventContext);

	return (
		<>
			<HStack alignItems={'center'} justifyContent={'space-between'}>
				<Heading size={'md'} fontWeight={'medium'}>create task</Heading>
				<IButtons icon={<FiLayers />} clicks={() => setTabs(1)} />
			</HStack>
			<Divider/>
			<WidgetBody>
				<FormContainer onSubmit={handleSubmit}>
					<Inputs refs={titleRef} pHolder={'title'} />
					<TextAreas refs={notesRef} pHolder={'notes'} />
					<HStack justifyContent={'center'}>
						<Buttons custom={{
							bg: 'indigo.200',
							type: 'submit',
							rounded: 'md',
							px: 16,
							py: 4
						}}>create</Buttons>
					</HStack>
				</FormContainer>
			</WidgetBody>
		</>
	);
};

export default Createlist;