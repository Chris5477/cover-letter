import axios from "axios";
import { refreshData } from "./refreshData";

export const addCard = (dataUser, state, dispatcher) => {
	const { _id } = state;
	console.log(state)

	axios
		.put(`http://localhost:3001/api/v1/user/${_id}`, { ...dataUser })
		.then(() =>  refreshData(_id, dispatcher))
		.catch(() => console.error("Unable to create the card"));
};
