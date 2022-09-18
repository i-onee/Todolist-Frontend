import { FormControl, Input, Textarea, useColorModeValue, VStack } from "@chakra-ui/react"


const formControl = {

}

const input = {
	boxShadow: 'none !important',
	placeholder: 'title',
	autoComplete: 'off',
	outline: 'none',
	border: 0,
	size: 'md',
}

const textArea = {
	boxShadow: 'none !important',
	placeholder: 'notes',
	rows: 7,
	resize: 'none',
	rounded: 'md',
	border: 0,
	size: 'md',
}


const FormContainer = (props) => {
	const { children, onSubmit} = props;
	return (
		<form onSubmit={onSubmit}>
			<FormControl
				{...formControl}
			>
				<VStack gap={2}>
					{children}
				</VStack>
			</FormControl>
		</form>
	);
};

const Inputs = (props) => {
	const { refs, onChange } = props;

	return (
		<Input
			{...input}
			bg={useColorModeValue('whiteAlpha.600', 'blackAlpha.400')}
			onChange={onChange}
			ref={refs}
		/>
	);
};

const TextAreas = (props) => {
	const { refs, onChange } = props;

	return (
		<Textarea
			{...textArea}
			bg={useColorModeValue('whiteAlpha.600', 'blackAlpha.400')}
			onChange={onChange}
			ref={refs}
		/>
	)
}

export { FormContainer, Inputs, TextAreas };