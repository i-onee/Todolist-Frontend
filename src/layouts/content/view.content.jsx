import { WidgetBody, WidgetHeader, WidgetFooter } from '../../components/widget.comp';
import { IButtons, Buttons } from '../../components/button.comp';
import { EventContext } from '../../context/event.context';
import { Heading, HStack, VStack, Wrap, Text, Flex } from '@chakra-ui/react';
import MarkDown from '../../components/markdown.comp';
import { FiLayers, FiEdit3 } from 'react-icons/fi';
import { useContext } from 'react';

const Viewtask = () => {
	const { setTabs, defaultValue } = useContext(EventContext);
	return (
		<>
			<WidgetHeader>
				<Heading size={'md'} fontWeight={'medium'} textTransform={'lowercase'} noOfLines={1}>{defaultValue.title}</Heading>
				<Wrap>
					<IButtons
							custom={{
								_active: { bg: 'lightBlueAlpha.200' },
								_hover: { bg: 'lightBlueAlpha.200' },
								onClick: () => setTabs(0),
								color: 'lightBlue.200',
								icon: <FiEdit3 />,
								isDisabled: defaultValue.complete
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
			</WidgetHeader>
			<WidgetBody>
				<MarkDown children={defaultValue.notes} />
			</WidgetBody>
			<WidgetFooter>
				{
					defaultValue.complete ?
						<Text px={2} rounded={'sm'} color={'leaf.300'} bg={'leafAlpha.200'}>complete</Text>
						:
						<Text px={2} rounded={'sm'} color={'violet.300'} bg={'violetAlpha.200'}>not complete</Text>
				}
			</WidgetFooter>
		</>
	);
};

export default Viewtask;