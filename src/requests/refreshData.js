import axios from "axios";
import { callApi } from "../Redux/actionUser";

export const refreshData = (id, dispatcher, setterFour) => {
	axios
		.get(`http://localhost:3001/api/v1/user/${id}`)
		.then((res) =>  {
			dispatcher(callApi(res.data, true))
			setterFour(res.data.user.cards)
		})
		.catch(() => console.error("Unable to get your account"));
};
