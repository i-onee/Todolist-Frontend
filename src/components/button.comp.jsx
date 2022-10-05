import { Button, IconButton } from '@chakra-ui/react';

const Buttons = props => {
	const { children, custom } = props;
	const config = {
		rounded: '5px',
		fontSize: 'sm',
	};
	return (
		<Button {...config} {...custom}>
			{children}
		</Button>
	);
};

const IButtons = props => {
	const { custom } = props;
	const config = {
		fontSize: '1.1rem',
		rounded: 'full',
		w: 'auto',
		h: 'auto',
		p: 2,
	};
	return <IconButton {...config} {...custom} />
};

export { Buttons, IButtons };