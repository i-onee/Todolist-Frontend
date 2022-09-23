import { WidgetBody, WidgetHeader, WidgetFooter } from '../../components/widget.comp';
import { FormContainer, Inputs, TextAreas } from '../../components/form.comp';
import { Buttons, IButtons } from '../../components/button.comp';
import { Heading, HStack, Divider } from '@chakra-ui/react';
import { EventContext } from '../../context/event.context';
import { FiLayers } from 'react-icons/fi';
import { useContext } from 'react';

const Createlist = () => {
	const { setTabs, handleSubmit, titleRef, notesRef } = useContext(EventContext);


	return (
		<>
			<WidgetHeader>
				<HStack alignItems={'center'} justifyContent={'space-between'}>
					<Heading size={'md'} fontWeight={'medium'}>create task</Heading>
					<IButtons
						custom={{
							onClick: () => setTabs(1),
							icon: <FiLayers/>
						}}
					/>
				</HStack>
			</WidgetHeader>
			<Divider/>
			<WidgetBody>
				<FormContainer>
					<Inputs refs={titleRef} pHolder={'title'} />
					<TextAreas refs={notesRef} pHolder={'notes'} />
				</FormContainer>
			</WidgetBody>
			<Divider/>
			<WidgetFooter>
				<Buttons
					custom={{
						onClick: handleSubmit,
						bg: 'indigo.200',
						rounded: 'full',
						px: 16,
						py: 4
					}}
				>create</Buttons>
			</WidgetFooter>
		</>
	);
};

export default Createlist;