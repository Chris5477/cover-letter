import axios from "axios";
import { callApi } from "../Redux/actionUser";

export const login = (e, dataUser, dispatcher) => {
	e.preventDefault();
	axios
		.post("http://localhost:3001/api/v1/user/login", { ...dataUser })
		.then((user) => {
			dispatcher(callApi(user.data, true));
			if (user.status == 200) {
				window.location = "/application";
			}
		})

		.catch(() => dispatcher(callApi("Identifiants incorrects ")));
};
