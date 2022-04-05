import { useState, useEffect } from "react";
import Button from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { deleteCard } from "../requests/deleteCard";

const Card = ({ name, description, handleClick, setData, classCSS }) => {
	console.log(classCSS)
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
			className={`card ${classCSS}`}
		>
			<h2>{name}</h2>
			<p>{classCSS}sds</p>
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
