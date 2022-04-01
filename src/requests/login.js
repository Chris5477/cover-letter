import axios from "axios";
import { callApi } from "../Redux/actionUser";

export const login = (e, dataUser, dispatcher, setter) => {
	e.preventDefault();
	axios
		.post("http://localhost:3001/api/v1/user/login", { ...dataUser })
		.then((user) => {
			console.log(user)
			setter("Connexion en cours")
			dispatcher(callApi(user.data, true));
			if (user.status === 200) {
				window.location = "/application";
			}
		})

		.catch(() => {
			setter("Identifiants incorrects")
			dispatcher(callApi("Identifiants incorrects "))
		});
};
