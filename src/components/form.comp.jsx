import { border, FormControl, Input, Textarea, useColorModeValue, VStack } from "@chakra-ui/react"


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
	const { children } = props;
	return (
		<FormControl
			{...formControl}
		>
			<VStack>
				{children}
			</VStack>
		</FormControl>
	);
};

const Inputs = () => {
	return (
		<Input
			{...input}
			bg={useColorModeValue('whiteAlpha.600', 'blackAlpha.400')}
		/>
	);
};

const TextAreas = () => {
	return (
		<Textarea
			{...textArea}
			bg={useColorModeValue('whiteAlpha.600', 'blackAlpha.400')}
		/>
	)
}

export { FormContainer, Inputs, TextAreas };