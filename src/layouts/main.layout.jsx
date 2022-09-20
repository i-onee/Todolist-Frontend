import { useColorModeValue, HStack, VStack, Heading } from '@chakra-ui/react';
import { FiPlus, FiLayers, FiCircle, FiCheckCircle } from 'react-icons/fi';
import { FormContainer, Inputs, TextAreas } from '../components/form.comp';
import { TabContent, TabContainer } from '../components/tab.comp';
import { Widget, WidgetBody } from '../components/widget.comp';
import { ActivityContext } from '../context/activity.context';
import { IButtons, Buttons } from '../components/button.comp';
import Sections from '../components/section.comp';
import Navbars from '../components/navbar.comp';
import { useContext, useState } from 'react';
import Lists from '../components/list.comp';
import { useRef } from 'react';

const MainLayout = () => {

	const { dataDB, dataServices } = useContext(ActivityContext);
	const [ tabIndex, setTabIndex ] = useState(1);
	const title = useRef(null);
	const notes = useRef(null);

	const reset = () => {
		title.current.value = null;
		notes.current.value = null;
	}

	const handleSumbit = (e) => {
		e.preventDefault();
		dataServices('create', {
			title: title.current.value,
			notes: notes.current.value,
		});
		reset();
	} 

	return (
		<>
			<Sections
				custom={{
					color: useColorModeValue('gray.800', 'white'),
					bg: 'indigo.200',
					h: 'xs'
				}}
			></Sections>
			<Sections
				container={{
					display: 'flex',
					justifyContent: 'center'
				}}
			>
				<VStack justifyContent={'center'} position={'absolute'} gap={2} maxW={'xl'} w={'95%'} top={-60}>
					<Navbars />
					<Widget
						custom={{
							bg: useColorModeValue('light.100', 'dark.700'),
						}}
					>
						<TabContainer index={tabIndex}>
							<TabContent>
								<HStack alignItems={'center'} justifyContent={'space-between'} px={2} mb={4}>
									<Heading size={'lg'} textAlign={'center'} fontWeight={'medium'} >task details</Heading>
									<IButtons icon={<FiLayers />} clicks={() => setTabIndex(1)} />
								</HStack>
								<WidgetBody>
								</WidgetBody>
							</TabContent>
							<TabContent>
								<HStack alignItems={'center'} justifyContent={'space-between'} px={2} mb={4}>
									<Heading size={'lg'} textAlign={'center'} fontWeight={'medium'} >task list</Heading>
									<IButtons
										icon={<FiPlus />}
										clicks={() => setTabIndex(2)}
									/>
								</HStack>
								<WidgetBody>
									<VStack gap={2}>
										{
											dataDB.activity.map((v, i) => {
												return <Lists
													icheck={v.complete ? <FiCheckCircle /> : <FiCircle />}
													deletes={() => dataServices('delete', {_id: v._id})}
													check={() => dataServices('check', {_id: v._id})}
													checked={v.complete ? 's' : ''}
													show={() => setTabIndex(0)}
													title={v.title}
													key={i}
												/>
											})
										}
									</VStack>
								</WidgetBody>
							</TabContent>
							<TabContent>
								<HStack alignItems={'center'} justifyContent={'space-between'} px={2} mb={4}>
									<Heading size={'lg'} textAlign={'center'} fontWeight={'medium'} >create task</Heading>
									<IButtons
										icon={<FiLayers />}
										clicks={() => setTabIndex(1)}
									/>
								</HStack>
								<WidgetBody>
									<FormContainer onSubmit={handleSumbit}>
										<Inputs refs={title} pHolder={'title'} />
										<TextAreas refs={notes} pHolder={'notes'} />
										<HStack>
											<Buttons
												custom={{
													bg: 'indigo.200',
													type: 'submit',
													rounded: 'md',
												}}
											>create</Buttons>
										</HStack>
									</FormContainer>
								</WidgetBody>
							</TabContent>
						</TabContainer>
					</Widget>
				</VStack>
			</Sections>
		</>
	)
}

export default MainLayout;