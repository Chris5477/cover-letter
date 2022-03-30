import axios from "axios";

export const addCard = (dataUser) => {
    const userId = JSON.parse(localStorage.getItem("user"))
    const id = userId.user._id
    axios.put(`http://localhost:3001/api/v1/user/${id}`, {...dataUser })
    .then(() => console.log("card create with success "))
    .catch(() => console.error("Unable to create the card"))
}
