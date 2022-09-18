import { Button, IconButton, useColorModeValue } from "@chakra-ui/react"

const config = {
	fontWeight: 'medium',
	outline: 'none',
	rounded: 'full',
	margin: 'none',
	p: '2 !important',
	_hover: false,
	bg: 'none'
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
			bg={useColorModeValue('whiteAlpha.700', 'blackAlpha.300')}
			onClick={clicks}
			icon={icon}
			{...config}
			{...custom}
		/>
	)
}

export { Buttons, IButtons };