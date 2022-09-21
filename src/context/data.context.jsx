import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const DataContext = createContext();

const config = {
	endpoint	: process.env.REACT_APP_ENDPOINT,
	vercel	: process.env.REACT_APP_VERCEL,
	locals	: process.env.REACT_APP_LOCALS,
}

const DataProvider = ({ children }) => {

	const url = `${config.vercel}/${config.endpoint}`;
	const [ dataDB, setDataDB ] = useState({
		activity: [],
		refreshDB: false,
	});

	useEffect(() => {
		dataServices();

	}, [ dataDB.refreshDB ]);

	const dataServices = async (key, item) => {
		switch (key) {

			case 'check':
				const check = dataDB.activity.find(x => x._id === item._id);
				await axios.patch(`${url}/${item._id}`, { complete: !check.complete });
				setDataDB({
					...dataDB,
					refreshDB: !dataDB.refreshDB
				});
				break;

			case 'delete':
				await axios.delete(`${url}/${item._id}`);
				setDataDB({
					...dataDB,
					refreshDB: !dataDB.refreshDB
				});
				break;

			case 'create':
				await axios.post(url, {
					title: `${item.title}`,
					notes: `${item.notes}`
				});
				setDataDB({
					...dataDB,
					refreshDB: !dataDB.refreshDB
				});
				break;

			default:
				const res = await axios(url);
				setDataDB({
					...dataDB,
					activity: res.data
				});
		};
	};

	return (
		<DataContext.Provider value={{ dataDB, dataServices }}>
			{children}
		</DataContext.Provider>
	);
};

export { DataContext, DataProvider };