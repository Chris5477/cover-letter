import { addCard } from "../../requests/addCard";

export const createData = (name, description, type, setName, setDescription, setType, setMessage, setData, state, dispatcher) => {
	const card = {
		name: name,
		description: description,
		type : type
	};

	if (!name || !description || !type) {
		setMessage("error");
	} else {
		addCard(card, state, dispatcher, setData);
		setName("");
		setDescription("");
		setType("")
		setMessage("success-create");
	}
};
