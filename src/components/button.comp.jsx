import { Button, IconButton } from "@chakra-ui/react"

const config = {
	outline: 'none',
	rounded: 'full',
	margin: 'none',
	_hover: false,
	bg: 'none',
}


const Buttons = (props) => {
	const { children, clicks, custom } = props;
	return (
		<Button
			onClick={clicks}
			{...config}
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
			{...config}
			{...custom}
		/>
	)
}

export { Buttons, IButtons };