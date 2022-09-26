import { FormControl, Input, Textarea, VStack } from '@chakra-ui/react';

const FormContainer = (props) => {
	const { children } = props;

	return (
		<form autoComplete={'off'}>
			<FormControl>
				<VStack gap={2}>
					{children}
				</VStack>
			</FormControl>
		</form>
	);
};

const Inputs = (props) => {
	const { refs, pHolder, onChange, as } = props;

	return (
		<Input
			placeholder={pHolder}
			onChange={onChange}
			ref={refs}
			as={as}
		/>
	);
};

const TextAreas = (props) => {
	const { refs, pHolder, onChange, as } = props;

	return (
		<Textarea
			placeholder={pHolder}
			onChange={onChange}
			ref={refs}
			as={as}
		/>
	);
};

export { FormContainer, Inputs, TextAreas };