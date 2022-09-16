import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const ActivityContext = createContext();

const config = {
	endpoint	: process.env.REACT_APP_ENDPOINT,
	vercel	: process.env.REACT_APP_VERCEL,
	locals	: process.env.REACT_APP_LOCALS,
}

const ActivityProvider = ({ children }) => {

	const url = `${config.vercel}/${config.endpoint}`;
	const [ data, setData ] = useState({
		localData: [],
		dbData: [],
		reload: false,
	});

	useEffect(() => {
		dbService();
		// eslint-disable-next-line
	}, [data.reload]);
	
	// const matching = data.filter(x => !current.some(y => x._id === y._id));

	const dbService = async (key) => {
		switch (key) {
			default:
				const res = await axios(url);
				localStorage.setItem('data', JSON.stringify(res.data));
				setData({
					localData: JSON.parse(localStorage.getItem('data')),
					dbData: res.data,
				});
				break;
		}
	}

	const dataHandler = async (key, item) => {
		switch (key) {

			case 'check':
				
				break;
		};
	};

	return (
		<ActivityContext.Provider value={{ data, dataHandler }}>
			{children}
		</ActivityContext.Provider>
	);
};

export { ActivityContext, ActivityProvider };