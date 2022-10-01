import { FormControl, Input, Textarea, Flex } from '@chakra-ui/react';

const FormContainer = (props) => {
	const { children } = props;
	return (
		<form autoComplete={'off'}>
			<FormControl>
				<Flex flexDir={'column'} gap={4}>
					{children}
				</Flex>
			</FormControl>
		</form>
	);
};

const Inputs = (props) => {
	const { refs, pHolder, onChange, value, as } = props;
	return (
		<Input
			placeholder={pHolder}
			onChange={onChange}
			value={value}
			ref={refs}
			as={as}
		/>
	);
};

const TextAreas = (props) => {
	const { refs, pHolder, onChange, value, as } = props;
	return (
		<Textarea
			placeholder={pHolder}
			onChange={onChange}
			value={value}
			ref={refs}
			as={as}
		/>
	);
};

export { FormContainer, Inputs, TextAreas };