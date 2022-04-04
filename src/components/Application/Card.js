import { useState, useEffect } from "react";
import Button from "../Utils/Button";
import { useSelector, useDispatch } from "react-redux";
import { deleteCard } from "../../requests/deleteCard";

const Card = ({ name, description, handleClick, setData }) => {
	const [tooltip, setTooltip] = useState(false);
	const { _id, cards } = useSelector((state) => state.dataUser.user);
	const dispatch = useDispatch();

	useEffect(() => {
		[...document.querySelectorAll(".btn-remove")].forEach((btn, index) =>
			btn.addEventListener("click", (e) => deleteCard(e, _id, cards[index], dispatch, setData), true)
		);
	});

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
