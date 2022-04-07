import axios from "axios";
import { refreshData } from "./refreshData";

export const addCard = (dataUser, state, dispatcher, setData) => {
	const { _id } = state;
	const token = JSON.parse(localStorage.getItem("token"));

	axios({
		method: "put",
		url: `http://localhost:3001/api/v1/user/${_id}`,
		data: {
			...dataUser,
		},
		config: (axios.defaults.headers.common["Authorization"] = `Bearer ${token}`),
	})
		.then(() => refreshData(_id, dispatcher, setData))
		.catch(() => console.error("Unable to create the card"));
};
