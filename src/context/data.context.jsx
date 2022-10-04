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
		data: [],
		view: {},
		refresh: false,
	});

	useEffect(() => {
		dataServices();
	}, [ dataDB.refresh ]);

	const dataServices = async (key, item) => {
		switch (key) {
			case 'create':
				await axios.post(url, {
					title: `${item.title}`,
					notes: `${item.notes}`
				});
				setDataDB({
					...dataDB,
					refresh: !dataDB.refresh
				});
				break;

			case 'check':
				const check = dataDB.data.find(x => x._id === item._id);
				await axios.patch(`${url}/${item._id}`, { complete: !check.complete });
				break;

			case 'update':
				await axios.put(url, { id: item._id,
					updates: {
						title: item.title,
						notes: item.notes
					}
				});
				break;

			case 'delete':
				await axios.delete(`${url}/${item._id}`);
				break;

			default:
				const res = await axios(url);
				setDataDB({
					...dataDB,
					data: res.data
				});
				break;
		};
	};

	return (
		<DataContext.Provider value={{ dataDB, dataServices, setDataDB }}>
			{children}
		</DataContext.Provider>
	);
};

export { DataContext, DataProvider };