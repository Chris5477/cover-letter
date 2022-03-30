import axios from "axios";

export const login = (e, dataUser) => {
    e.preventDefault()
    axios.post("http://localhost:3001/api/v1/user/login", {...dataUser})
    .then(() => console.log("Connexion réussie"))
    .catch(() => console.error("Identifiants incorrects "))
}