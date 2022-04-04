import axios from "axios";
import { refreshData } from "./refreshData";

export const deleteCard = (e, idUser, value, dispatcher, setData) => {
	const idCard = value._id;
	e.stopPropagation();
	axios
		.put(`http://localhost:3001/api/v1/user/card/${idUser}`, { _id: idCard })
		.then(() => refreshData(idUser, dispatcher, setData))
		.catch(() => console.error("Unable to delete the card"));
};
