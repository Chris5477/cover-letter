import axios from "axios";

export const createUser = (e, dataUser, setter) => {
	e.preventDefault();
	axios
		.post("http://localhost:3001/api/v1/user/signup", {
			...dataUser,
		})
		.then(() => setter("Utilisateur créé avec succès"))
		.catch(() => setter("Utilisateur non créé"));
};
