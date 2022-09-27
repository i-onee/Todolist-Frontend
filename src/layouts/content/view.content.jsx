import { WidgetBody, WidgetHeader, WidgetFooter } from '../../components/widget.comp';
import { IButtons, Buttons } from '../../components/button.comp';
import { EventContext } from '../../context/event.context';
import { Heading, HStack, VStack } from '@chakra-ui/react';
import MarkDown from '../../components/markdown.comp';
import { FiLayers } from 'react-icons/fi';
import { useContext } from 'react';

const Viewtask = () => {
	const { setTabs, defaultValue, handleValue, isEdit, setIsEdit, handleUpdate } = useContext(EventContext);
	return (
		<VStack w={'full'} gap={3}>
			<WidgetHeader>
				<HStack alignItems={'center'} justifyContent={'space-between'}>
					<Heading size={'md'} fontWeight={'medium'} >{ defaultValue.title }</Heading>
						<IButtons
							custom={{
								_active: { bg: 'indigoAlpha.200' },
								_hover: { bg: 'indigoAlpha.200' },
								onClick: () => setTabs(2),
								color: 'indigo.200',
								icon: <FiLayers />,
							}}
						/>
				</HStack>
			</WidgetHeader>
			<WidgetBody>
				<MarkDown children={defaultValue.notes} />
			</WidgetBody>
			<WidgetFooter>
				<HStack justifyContent={'center'}>
					<Buttons
						custom={{
							onClick: () => setTabs(0),
							bg: 'indigo.200',
							color: 'white',
							rounded: 'md',
							px: 9,
							py: 4,
						}}
					>edit</Buttons>
				</HStack>
			</WidgetFooter>
		</VStack>
	);
};

export default Viewtask;