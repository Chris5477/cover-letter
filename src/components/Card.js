import { useEffect } from "react";

const Card = ({ name, handleClick }) => {
	useEffect(() => {
		[...document.querySelectorAll(".btn-remove")].forEach((btn, index) =>
			btn.addEventListener("click", () => removeCard(index))
		);

		return () =>
			[...document.querySelectorAll(".btn-remove")].forEach((btn, index) => btn.removeEventListener("click", removeCard));
	},[]);

	const removeCard = (index) => [...document.querySelectorAll(".card")][index].remove();

	return (
		<div onClick={() => handleClick()} className="card">
			<h2>{name}</h2>
			<button className="btn-remove">X</button>
		</div>
	);
};

export default Card;
