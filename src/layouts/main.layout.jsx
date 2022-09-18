import { FormContainer, Inputs, TextAreas } from '../components/form.comp';
import { TabContent, TabContainer } from '../components/tab.comp';
import { Widget, WidgetBody } from '../components/widget.comp';
import { IButtons } from '../components/button.comp';
import { ActivityContext } from '../context/activity.context';
import Sections from '../components/section.comp';
import { useContext, useState } from 'react';
import Lists from '../components/list.comp';
import {
	CgRadioChecked,
	CgRadioCheck,
	CgMathPlus,
	CgUndo,
} from 'react-icons/cg';
import {
	useColorModeValue,
	HStack,
	VStack,
	Heading,
} from '@chakra-ui/react';
import Navbars from '../components/navbar.comp';
import { useRef } from 'react';

const MainLayout = () => {

	const { dataDB, dataServices } = useContext(ActivityContext);
	const [ tabIndex, setTabIndex ] = useState(1);
	const title = useRef(null);
	const notes = useRef(null);

	const reset = () => {
		title.current.value = null;
		notes.current.value = null
	}

	const handleSumbit = (e) => {
		e.preventDefault();
		dataServices('create', {
			title: title.current.value,
			notes: notes.current.value
		});
		reset()
	} 

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
							bg: useColorModeValue('light.300', 'dark.700'),
							position: 'absolute'
						}}
					>
						<Navbars tabAction={() => setTabIndex(2)} />
						<TabContainer index={tabIndex}>

							<TabContent>
								<WidgetBody>
									<Heading>ADD</Heading>
								</WidgetBody>
							</TabContent>

							<TabContent>
								<WidgetBody>
									<VStack gap={2}>
										{
											dataDB.activity.map((v, i) => {
												return <Lists
													icheck={v.complete ? <CgRadioChecked /> : <CgRadioCheck />}
													check={() => dataServices('check', {_id: v._id})}
													deletes={() => dataServices('delete', {_id: v._id})}
													show={() => setTabIndex(0)}
													checked={v.complete ? 's' : ''}
													title={v.title}
													key={i}
												/>
											})
										}
									</VStack>
								</WidgetBody>
							</TabContent>

							<TabContent>
								<WidgetBody>
									<FormContainer onSubmit={handleSumbit}>
										<Inputs refs={title} />
										<TextAreas refs={notes} />
										<HStack>
											<IButtons
												icon={<CgMathPlus />}
												custom={{
													bg: 'indigo.200',
													color: 'white',
													rounded: 'full',
													w: '200px',
													type: 'submit'
												}}
											/>
											<IButtons
												icon={<CgUndo />}
												clicks={() => reset()}
												custom={{
													bg: 'indigo.200',
													color: 'white',
													rounded: 'full',
													w: '200px'
												}}
											/>
										</HStack>
									</FormContainer>
								</WidgetBody>
							</TabContent>

						</TabContainer>
					</Widget>
				</HStack>
			</Sections>
		</>
	)
}

export default MainLayout;