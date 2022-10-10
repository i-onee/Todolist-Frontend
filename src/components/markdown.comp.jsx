import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import ReactMarkdown from 'react-markdown';

const MdPreview = props => {
	const { children } = props;
	const config = {
		components: ChakraUIRenderer(),
		children: children,
	}
	return <ReactMarkdown {...config} skipHtml/>
};

export default MdPreview;