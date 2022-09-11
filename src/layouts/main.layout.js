import { ActivityContext } from '../context/activity.context';
import { Widget, WidgetBody } from '../components/widget.comp';
import { Buttons } from '../components/button.comp';
import Sections from '../components/section.comp';
import { Modals } from '../components/modal.comp';
import Lists from '../components/list.comp';
import { useContext } from 'react';
import {
	CgRadioChecked,
	CgRadioCheck,
	CgMathPlus,
} from 'react-icons/cg';
import {
	useColorModeValue,
	useDisclosure,
	HStack,
	VStack,
} from '@chakra-ui/react';

const MainLayout = () => {

	const { data, activityReq } = useContext(ActivityContext);
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Sections
				custom={{
					bg: useColorModeValue('purple.500', 'purple.400'),
					color: useColorModeValue('gray.800', 'white'),
				}}
			></Sections>
			<Sections>
				<HStack justifyContent={'center'}>
					<Widget>
						<WidgetBody>
							<VStack gap={1}>
								{
									data.activity.map((v, i) => {
										return <Lists
											icheck={v.complete ? <CgRadioChecked /> : <CgRadioCheck />}
											deletes={() => {activityReq('delete', v._id);}}
											check={() => {activityReq('check', v._id);}}
											checked={v.complete ? 's' : ''}
											title={v.title}
											key={i}
										/>
									})
								}
							</VStack>
							<HStack w={'full'} justifyContent={'center'}>
								<Buttons
									clicks={() => onOpen() }
									custom={{
										leftIcon: <CgMathPlus/> ,
										position: 'absolute',
										padding: '1.3rem',
										bg: 'purple.600',
										bottom: -5,
										w: '7rem',
									}}
								>
									task
								</Buttons>
							</HStack>
						</WidgetBody>
					</Widget>
				</HStack>
			</Sections>
			<Modals isOpen={isOpen} onClose={onClose}></Modals>
		</>
	)
}

export default MainLayout;