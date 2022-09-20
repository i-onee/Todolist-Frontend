import { Container, Stack } from '@chakra-ui/react';

const Sections = (props) => {
	const { children, container, custom } = props;
	return (
		<Stack
			position={'relative'}
			display={'block'}
			{...custom}
		>
			<Container
				maxW={'container.lg'}
				position={'relative'}
				{...container}>
				{children}
			</Container>
		</Stack>
	)
}

export default Sections;