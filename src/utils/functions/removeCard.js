export const removeCard = (e, index, state, setter) => {
	e.stopPropagation();
	state.splice(index, 1);
	localStorage.setItem("Cards", JSON.stringify(state));
	const data = JSON.parse(localStorage.getItem("Cards"));
	setter(data);
};
