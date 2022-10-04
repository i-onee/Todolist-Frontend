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
	const { refs, pHolder, onChange, value, id } = props;
	return (
		<Input
			placeholder={pHolder}
			onChange={onChange}
			value={value}
			ref={refs}
			id={id}
		/>
	);
};

const TextAreas = (props) => {
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