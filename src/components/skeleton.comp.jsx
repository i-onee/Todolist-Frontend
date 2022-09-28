import { Skeleton } from '@chakra-ui/react';

const Skeletons = (props) => {
	const { children, isLoaded } = props;
	return (
		<Skeleton w={'full'} rounded={'md'} isLoaded>
			{children}
		</Skeleton>
	);
};

export default Skeletons;