import axios from "axios";

export const login = (e, dataUser) => {
    e.preventDefault()
    axios.post("http://localhost:3001/api/v1/user/login", {...dataUser})
    .then((user) => {

        //PROVISOIRE
        localStorage.setItem("user", JSON.stringify(user.data))
        window.location ="/application"

    })
    .catch(() => console.error("Identifiants incorrects "))
}