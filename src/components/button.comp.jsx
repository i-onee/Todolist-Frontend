import { Button, IconButton } from '@chakra-ui/react';

const Buttons = (props) => {
	const { children, clicks, custom } = props;
	return (
		<Button
			onClick={clicks}
			{...custom}
		>
			{children}
		</Button>
	)
}

const IButtons = (props) => {
	const { icon, clicks, custom } = props;

	return (
		<IconButton
			onClick={clicks}
			icon={icon}
			{...custom}
		/>
	)
}

export { Buttons, IButtons };