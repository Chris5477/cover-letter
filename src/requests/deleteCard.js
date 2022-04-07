import axios from "axios";
import { refreshData } from "./refreshData";

export const deleteCard = (e, idUser, value, dispatcher, setData) => {
	const idCard = value._id;
	e.stopPropagation();

	const token = JSON.parse(localStorage.getItem("token"));

	axios({
		method: "put",
		url: `http://localhost:3001/api/v1/user/card/${idUser}`,
		data: { _id: idCard },
		config: (axios.defaults.headers.common["Authorization"] = `Bearer ${token}`),
	})
		.then(() => refreshData(idUser, dispatcher, setData))
		.catch(() => console.error("Unable to delete the card"));
};
