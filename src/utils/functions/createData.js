import { addCard } from "../../requests/addCard";

export const createData = (name, description, setterOne, setteurTwo, setterThree, state, dispatcher) => {
	const card = {
		name: name,
		description: description,
	};

	if (!name || !description) {
		setterThree("error");
	} else {
		addCard(card, state, dispatcher);
		setterOne("");
		setteurTwo("");
		setterThree("success-create");
	}
};
