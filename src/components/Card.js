import { useState, useEffect } from "react";
import Button from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { deleteCard } from "../requests/deleteCard";

const Card = ({ name, description, handleClick, setData, classCSS, arr }) => {
	const [tooltip, setTooltip] = useState(false);
	const { _id } = useSelector((state) => state.dataUser.user);
	const dispatch = useDispatch();

	useEffect(() => {
		[...document.querySelectorAll(".btn-remove")].forEach((btn, index) =>
			btn.addEventListener("click", (e) => deleteCard(e, _id, arr[index], dispatch, setData), true)
		);
	});

	return (
		<div
			onMouseLeave={() => setTooltip(false)}
			onMouseEnter={() => setTooltip(true)}
			onClick={() => handleClick()}
			className="card"
		>
			<div className={` header-card ${classCSS}`}>
				<h2>{name}</h2>
				<Button cssClass="btn-remove" content="X" />
			</div>

			{tooltip && (
				<div className="tooltip">
					<p>{description}</p>
				</div>
			)}
		</div>
	);
};

export default Card;
