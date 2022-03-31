import axios from "axios";
import { pushCardInStore } from "../Redux/actionUser";

export const addCard = (dataUser, state, dispatcher) => {
	const { _id } = state;

	axios
		.put(`http://localhost:3001/api/v1/user/${_id}`, { ...dataUser })
		.then(() => {
			dispatcher(pushCardInStore(dataUser));
			window.location.reload(); // provisoire
		})
		.catch(() => console.error("Unable to create the card"));
};
