import { FormControl, Input, Textarea, useColorModeValue } from '@chakra-ui/react';

const FormContainer = props => {
	const { children } = props;
	return (
		<FormControl isRequired px={4} h={'full'} rounded={'md'} overflow={'hidden'} bg={useColorModeValue('light.300', 'blackAlpha.600')}>
			{children}
		</FormControl>
	);
};

const Inputs = props => {
	const { refs, pHolder, onChange, value, id } = props;
	return (
		<Input
			placeholder={pHolder}
			autoComplete={'off'}
			onChange={onChange}
			value={value}
			ref={refs}
			id={id}
		/>
	);
};

const TextAreas = props => {
	const { refs, pHolder, onChange, value, id } = props;
	return (
		<Textarea
			placeholder={pHolder}
			onChange={onChange}
			value={value}
			ref={refs}
			id={id}
		/>
	);
};

export { FormContainer, Inputs, TextAreas };