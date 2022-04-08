import axios from "axios";
import {logOut} from "../utils/functions/logout"

export const deleteUser = (id) => {
    console.log(id)
    const token = JSON.parse(localStorage.getItem("token"))

    axios({
        method : "delete",
        url : `http://localhost:3001/api/v1/user/${id}`,
        config : axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    })
    .then(() => {
        logOut()
    })
    .catch(() => console.log("Impossible de supprimer votre compte"))
}