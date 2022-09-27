import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';

const MarkDown = (props) => {
	const { children } = props;
	return (
		<ReactMarkdown
			components={ChakraUIRenderer()}
			children={children}
			skipHtml
		/>
	);
};

export default MarkDown;