import { DataContext } from './data.context';
import { useRef, useState } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';

const EventContext = createContext();

const EventProvider = ({ children }) => {

	const { dataServices } = useContext(DataContext);
	const [ tabs, setTabs ] = useState(1);


	const title = useRef(null);
	const notes = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		dataServices('create', {
			title: `${title.current.value}`,
			notes: `${notes.current.value}`
		});
		clearSumbit();
	};

	const clearSumbit = () => {
		title.current.value = null;
		notes.current.value = null;
	};

	return (
		<EventContext.Provider value={{
			handleSubmit,
			setTabs,
			title,
			notes,
			tabs,
		}}>
			{children}
		</EventContext.Provider>
	);
};

export { EventContext, EventProvider };
