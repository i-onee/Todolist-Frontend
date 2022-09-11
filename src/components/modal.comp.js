import {
	Modal,
	ModalBody,
	ModalContent,
	ModalOverlay
} from '@chakra-ui/react';

const Modals = (props) => {
	const { isOpen, onClose } = props;
	return (
		<Modal
			isCentered motionPreset={'slideInBottom'}
			onClose={onClose}
			outline={'none'}
			isOpen={isOpen}
		>
			<ModalOverlay
      		backdropFilter={'blur(3px)'} 
				bg={'blackAlpha.500'}
			/>
			<ModalContent
				shadow={'none'}
				marginX={2}
			>
				<ModalBody>
					Hello World
				</ModalBody>
			</ModalContent>
		</Modal>
	)
};

export { Modals };