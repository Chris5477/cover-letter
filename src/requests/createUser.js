import axios from "axios";

export const createUser = (e, dataUser) => {
	e.preventDefault();

	axios
		.post("http://localhost:3001/api/v1/user/signup", {
			...dataUser,
		})
		.then(() => console.log("Utilisateur créé avec succès"))
		.catch(() => console.error("Utilisateur non créé"));
};
