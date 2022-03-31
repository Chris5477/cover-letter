import axios from "axios";

export const login = (e, dataUser, str) => {
    console.log(str)
    e.preventDefault()
    axios.post("http://localhost:3001/api/v1/user/login", {...dataUser})
    .then((user) => user.data)
    .then(() => console.log("User connected"))
    .catch(() => console.error("Identifiants incorrects "))
}