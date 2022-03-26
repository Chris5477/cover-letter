import { useState, useEffect } from "react";

const Card = ({ name, description, handleClick }) => {
	const [tooltip, setTooltip] = useState(false);

	useEffect(() => {
		[...document.querySelectorAll(".btn-remove")].forEach((btn, index) =>
			btn.addEventListener("click", (e) => removeCard(e, index), true)
		);

		return () =>
			[...document.querySelectorAll(".btn-remove")].forEach((btn) => btn.removeEventListener("click", removeCard));
	}, []);

	const removeCard = (e, index) => {
		e.stopPropagation();
		[...document.querySelectorAll(".card")][index].remove();
	};
	

	return (
		<div onMouseLeave={() =>  setTooltip(false)} onMouseEnter={() => setTooltip(true)} onClick={() => handleClick()} className="card">
			<h2>{name}</h2>
			<button className="btn-remove">X</button>
			{tooltip && (
				<div className="tooltip">
					<p>{description}</p>
				</div>
			)}
		</div>
	);
};

export default Card;
