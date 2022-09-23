import { DataContext } from './data.context';
import { useRef, useState } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';

const EventContext = createContext();

const EventProvider = ({ children }) => {

	const { dataServices } = useContext(DataContext);
	const [ tabs, setTabs ] = useState(1);

	// to handle input value from create lists
	const titleRef = useRef(null);
	const notesRef = useRef(null);

	const handleSubmit = e => {
		e.preventDefault();
		dataServices('create', {
			title: `${titleRef.current.value}`,
			notes: `${notesRef.current.value}`
		});
		clearSubmit();
	};

	const clearSubmit = () => {
		titleRef.current.value = null;
		notesRef.current.value = null;
	};

	// to bind value from list and set as default value to show at details

	const [ defaultValue, setValue ] = useState({
		title: null,
		notes: null,
		id: null,
	});

	const getValue = e => {
		setValue({
			...defaultValue,
			title: e.title,
			notes: e.notes,
			id: e._id
		});
		setTabs(0)
	};

	// to handle editable new values if chaged at at details
	const handleValue = (key, newValue) => {
		switch (key) {
			case 'title':
				setValue({
					...defaultValue,
					title: newValue,
				});
				break;

			case 'notes':
				setValue({
					...defaultValue,
					notes: newValue,
				});
				break;
		}
	};

	
	
	// showing after clikc edit
	const [ isEdit, setIsEdit ] = useState(false);
	const handleUpdate = () => {
		dataServices('update', {
			_id: defaultValue.id,
			title: defaultValue.title,
			notes: defaultValue.notes
		});
		setIsEdit(!isEdit)
	} 

	return (
		<EventContext.Provider value={{
			defaultValue,
			handleUpdate,
			handleSubmit,
			handleValue,
			setIsEdit,
			getValue,
			titleRef,
			notesRef,
			setTabs,
			isEdit,
			tabs,
		}}>
			{children}
		</EventContext.Provider>
	);
};

export { EventContext, EventProvider };
