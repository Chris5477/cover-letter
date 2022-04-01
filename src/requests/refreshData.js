import axios from "axios";
import { callApi } from "../Redux/actionUser";

export const refreshData = (id, dispatcher) => {
	axios
		.get(`http://localhost:3001/api/v1/user/${id}`)
		.then((res) =>  dispatcher(callApi(res.data, true)))
		.catch(() => console.error("Unable to get your account"));
};
