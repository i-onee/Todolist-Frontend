import { Tabs, TabPanel, TabPanels } from '@chakra-ui/react';

const TabContainer = (props) => {
	const { children, index } = props;

	return (
		<Tabs index={index}>
			<TabPanels>
				{children}
			</TabPanels>
		</Tabs>
	)
};

const TabContent = (props) => {
	const { children } = props;
	return (
		<TabPanel padding={0}>
			{children}
		</TabPanel>
	)
}


export { TabContent, TabContainer };