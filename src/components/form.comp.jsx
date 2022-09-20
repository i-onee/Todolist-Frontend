import { FormControl, Input, Textarea, VStack } from '@chakra-ui/react';


const FormContainer = (props) => {
	const { children, onSubmit } = props;

	return (
		<form onSubmit={onSubmit} autoComplete={'off'}>
			<FormControl>
				<VStack gap={2}>
					{children}
				</VStack>
			</FormControl>
		</form>
	);
};

const Inputs = (props) => {
	const { refs, pHolder, onChange } = props;

	return (
		<Input
			placeholder={pHolder}
			onChange={onChange}
			ref={refs}
		/>
	);
};

const TextAreas = (props) => {
	const { refs, pHolder, onChange } = props;

	return (
		<Textarea
			placeholder={pHolder}
			onChange={onChange}
			ref={refs}
		/>
	)
}

export { FormContainer, Inputs, TextAreas };