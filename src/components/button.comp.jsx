import { Button, IconButton } from '@chakra-ui/react';

const Buttons = (props) => {
	const { children, custom } = props;

	const config = {
		fontSize: 'sm',
	};

	return (
		<Button {...config} {...custom}>
			{children}
		</Button>
	);
};

const IButtons = (props) => {
	const { custom } = props;

	const config = {
		rounded: 'full',
		fontSize: '1.1rem',
		p: 2,
		w: 'auto',
		h: 'auto'
	};

	return (
		<IconButton {...config} {...custom} />
	);
};

export { Buttons, IButtons };