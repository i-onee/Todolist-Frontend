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
	const [ data, setData ] = useState({
		activity:[]
	});

	useEffect(() => {
		activityReq();
	}, [reload]);

	const activityReq = async (key, id) => {
		
		switch (key) {
			case 'create':
				await axios.post(url, {
					title: '',
					notes: '',
				});
				break;

			case 'delete':
				await axios.delete(`${url}/${id}`);
				setData({
					...data,
					activity: data.activity.filter((i) => i._id !== id),
				});
				break;

			case 'check':
				const check = data.activity.find((v) => {
					if (v._id === id) return v.complete
				})
				await axios.patch(`${url}/${id}`, { complete: !check });
				setReload(!reload);
				break;

			default:
				const res = await axios(url);
				setData({
					activity : res.data
				});
				break;
		};
	};

	return (
		<ActivityContext.Provider value={{ data, activityReq }}>
			{children}
		</ActivityContext.Provider>
	)
};

export { ActivityContext, ActivityProvider };