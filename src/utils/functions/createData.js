import { addCard } from "../../requests/addCard";

export const createData = (name, description, state, method, setterOne, setteurTwo, setterThree) => {

    const card = {
         name: name, 
         description: description 
    }

    if (!name || !description) {
        setterThree("error")
    } else {
        // method([...state, { name: name, description: description }]);
        addCard(card)
        setterOne("");
        setteurTwo("");
        setterThree("success-create")
    }
};