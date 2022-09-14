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
	const [ reload, setReload ] = useState(false);
	const [ data, setdata ] = useState([]);


	useEffect(() => {
		const updates = setTimeout(() => dbHandler('updateChecks', data) && console.log(data) , 5000);
		return () => clearInterval(updates) && dbHandler();
		}, [data])

	useEffect(() => {
		dataHandler();
	}, [reload]);

	const dataHandler = (key, items) => {
		switch (key) {
			case 'check':
				const newLocal = data.map((item) => {
					if (item._id === items) {
						return { ...item, complete: !item.complete };
					}
					return item;
				});
				window.localStorage.setItem('data', JSON.stringify(newLocal));
				setReload(!reload);
				break;

			default:
				const res = JSON.parse(window.localStorage.getItem('data'));
				setdata(res);
				break;
		}
	}

	const dbHandler = async (key, item) => {
		switch (key) {
			case 'updateChecks':
				await item.map(x => {
					return axios.patch(`${url}/${x._id}`, { complete: x.complete })
				});
				break;

			default:
				const res = await axios(url);
				window.localStorage.setItem('data', JSON.stringify(res.data));
				break
		};
	};

	return (
		<ActivityContext.Provider value={{ data, dataHandler }}>
			{children}
		</ActivityContext.Provider>
	)
};

export { ActivityContext, ActivityProvider };