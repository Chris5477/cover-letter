import axios from "axios";

export const createUser = (e, dataUser, setMessage, setSpinner) => {
	setMessage("")
	setSpinner(true)
	e.preventDefault();
	axios
		.post("http://localhost:3001/api/v1/user/signup", {
			...dataUser,
		})
		.then(() =>{
			setSpinner(false)
			setMessage("Utilisateur créé avec succès")
		})
		.catch(() => {
			setSpinner(false)
			setMessage("Le pseudo saisi existe déjà")
		})
};
