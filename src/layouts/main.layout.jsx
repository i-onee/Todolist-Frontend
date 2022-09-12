import { ActivityContext } from '../context/activity.context';
import { Widget, WidgetBody } from '../components/widget.comp';
import Sections from '../components/section.comp';
import Lists from '../components/list.comp';
import { useContext } from 'react';
import {
	CgRadioChecked,
	CgRadioCheck,
} from 'react-icons/cg';
import {
	useColorModeValue,
	HStack,
	VStack,
} from '@chakra-ui/react';
import Navbars from '../components/navbar.comp';

const MainLayout = () => {

	const { data, activityReq } = useContext(ActivityContext);

	return (
		<>
			<Sections
				custom={{
					bg: useColorModeValue('purple.500', 'purple.400'),
					color: useColorModeValue('gray.800', 'white'),
					h: 'xs'
				}}
			></Sections>
			<Sections>
				<HStack justifyContent={'center'}>
					<Widget
						custom={{
							bg: useColorModeValue('gray.100', 'gray.800'),
							position: 'absolute'
						}}
					>
						<Navbars/>
						<WidgetBody>
							<VStack gap={2}>
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
						</WidgetBody>	
					</Widget>
				</HStack>
			</Sections>
		</>
	)
}

export default MainLayout;