import { useState, useEffect } from "react";
import Button from "./Button";
import { removeCard } from "../utils/functions/removeCard";

const Card = ({ name, description, handleClick, state, setter }) => {
	const [tooltip, setTooltip] = useState(false);

	useEffect(() => {
		[...document.querySelectorAll(".btn-remove")].forEach((btn, index) =>
			btn.addEventListener("click", (e) => removeCard(e, index, state, setter), true)
		);
	}, []);

	return (
		<div
			onMouseLeave={() => setTooltip(false)}
			onMouseEnter={() => setTooltip(true)}
			onClick={() => handleClick()}
			className="card"
		>
			<h2>{name}</h2>
			<Button cssClass="btn-remove" content="X" />
			{tooltip && (
				<div className="tooltip">
					<p>{description}</p>
				</div>
			)}
		</div>
	);
};

export default Card;
