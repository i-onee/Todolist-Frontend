import { WidgetBody, WidgetHeader, WidgetFooter } from '../../components/widget.comp';
import { IButtons, Buttons } from '../../components/button.comp';
import { EventContext } from '../../context/event.context';
import { Heading, HStack, VStack, Wrap } from '@chakra-ui/react';
import MarkDown from '../../components/markdown.comp';
import { FiLayers, FiEdit3 } from 'react-icons/fi';
import { useContext } from 'react';

const Viewtask = () => {
	const { setTabs, defaultValue, handleValue, isEdit, setIsEdit, handleUpdate } = useContext(EventContext);
	return (
		<VStack w={'full'} gap={3}>
			<WidgetHeader>
				<HStack alignItems={'center'} justifyContent={'space-between'}>
					<Heading size={'md'} fontWeight={'medium'} textTransform={'uppercase'}>{defaultValue.title}</Heading>
					<Wrap>
						<IButtons
								custom={{
									_active: { bg: 'lightBlueAlpha.200' },
									_hover: { bg: 'lightBlueAlpha.200' },
									onClick: () => setTabs(0),
									color: 'lightBlue.200',
									icon: <FiEdit3 />,
								}}
							/>
						<IButtons
							custom={{
								_active: { bg: 'indigoAlpha.200' },
								_hover: { bg: 'indigoAlpha.200' },
								onClick: () => setTabs(2),
								color: 'indigo.200',
								icon: <FiLayers />,
							}}
						/>
					</Wrap>
				</HStack>
			</WidgetHeader>
			<WidgetBody>
				<MarkDown children={defaultValue.notes} />
			</WidgetBody>
			<WidgetFooter>
				<HStack justifyContent={'center'}>
				</HStack>
			</WidgetFooter>
		</VStack>
	);
};

export default Viewtask;