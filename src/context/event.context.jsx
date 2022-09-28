import { useRef, useState, useContext, createContext } from 'react';
import { DataContext } from './data.context';

const EventContext = createContext();

const EventProvider = ({ children }) => {
	const { dataServices } = useContext(DataContext);
	const [ defaultValue, setValue ] = useState({
		title: null,
		notes: null,
		id: null,
	});
	const [ tabs, setTabs ] = useState(2);
	const titleRef = useRef(null);
	const notesRef = useRef(null);





	const handleEvent = (key, e) => {
		switch (key) {
			case 'create':
				dataServices('create', {
					title : `${titleRef.current.value}`,
					notes : `${notesRef.current.value}`,
				});
				clearForm();
				break;
			case 'update':
				dataServices('update', {
					title : defaultValue.title,
					notes : defaultValue.notes,
					_id	: defaultValue.id,
				});
				setTabs(1);
				break;
			case 'value':
				setValue({
					...defaultValue,
					title : e.title,
					notes : e.notes,
					id    : e._id,
				});
				setTabs(1)
				break;
			case 'title':
				setValue({
					...defaultValue,
					title : e.target.value,
				});
				break;
			case 'notes':
				setValue({
					...defaultValue,
					notes : e.target.value,
				});
				break;
		};
	};

	const clearForm = () => {
		titleRef.current.value = null;
		notesRef.current.value = null;
	};
	return (
		<EventContext.Provider value={{
			defaultValue,
			handleEvent,
			notesRef,
			titleRef,
			setTabs,
			tabs,
		}}>
			{children}
		</EventContext.Provider>
	);
};

export { EventContext, EventProvider };