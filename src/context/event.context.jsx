import { useRef, useState, useContext, createContext } from 'react';
import { DataContext } from './data.context';

const EventContext = createContext();

const EventProvider = ({ children }) => {
	const { dataServices, dataDB, setDataDB } = useContext(DataContext);
	const [ tabs, setTabs ] = useState(2);
	const userRefs = useRef({});

	const handleEvent = (key, e) => {
		switch (key) {

			case 'create':
				dataServices('create', {
					title : userRefs.current.ctitle.value,
					notes : userRefs.current.cnotes.value,
				});
				clearForm();
				setTabs(2);
				break;

			case 'check':
				const check = dataDB.data.map( v => v._id === e._id ? { ...v, complete: !v.complete } : v );
				dataServices('check', e);
				setDataDB({
					...dataDB,
					data: check,
				})
				break;

			case 'update':
				const update = dataDB.data.map(v => v._id === e._id ? {
					...v,
					title: userRefs.current.etitle.value,
					notes: userRefs.current.enotes.value
				} : v);
				setDataDB({
					...dataDB,
					data: update,
				});
				dataServices('update', {
					_id	: e._id,
					title : userRefs.current.etitle.value,
					notes : userRefs.current.enotes.value,
				});
				setTabs(2);
				break;
			
			case 'delete':
				const deleted = dataDB.data.filter(v => v._id !== e._id);
				dataServices('delete', { _id: e._id });
				setDataDB({
					...dataDB,
					data: deleted,
				});
				break;

			case 'view':
				userRefs.current.etitle.value = e.title;
				userRefs.current.enotes.value = e.notes;
				setDataDB({
					...dataDB,
					view: e
				});
				setTabs(1);
				break;
		};
	};

	const clearForm = () => {
		userRefs.current.ctitle.value = '';
		userRefs.current.cnotes.value = '';
	};

	return (
		<EventContext.Provider value={{
			handleEvent,
			userRefs,
			setTabs,
			tabs,
		}}>
			{children}
		</EventContext.Provider>
	);
};

export { EventContext, EventProvider };