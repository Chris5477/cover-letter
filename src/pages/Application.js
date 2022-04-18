import Data from "../components/Data";
import { useState, useEffect } from "react";
import CoverLetter from "../components/CoverLetter";
import TypeCard from "../components/TypeCard";
import { useSelector } from "react-redux";

const Application = () => {
	const user = useSelector((state) => state);
	const { cards } = user.dataUser.user;
	const [data, setData] = useState(cards);
	const [contentLetter, setContentLetter] = useState("");
	const [message, setMessage] = useState("");
	useEffect(
		() => data.length > 0 && [...document.querySelectorAll(".card")][data.length - 1].classList.add("popping"),
		[data]
	);
		
	const structureCard = data.filter(({ type }) => type === "Structuring");
	const valueCard = data.filter(({ type }) => type === "Values");
	const hardskillCard = data.filter(({ type }) => type === "hardskill");
	const softskillCard = data.filter(({ type }) => type === "softskill");

	return (
		<main className="application">
			<div className="interaction-user">
				<Data message={message} setMessage={setMessage} setData={setData} />
				<div className="container">
					<TypeCard arr={structureCard} setContentLetter={setContentLetter} setData={setData} title={"Structuring"} />
					<TypeCard arr={valueCard} setContentLetter={setContentLetter} setData={setData} title={"Values"} />
					<TypeCard arr={hardskillCard} setContentLetter={setContentLetter} setData={setData} title={"Hardskill"} />
					<TypeCard arr={softskillCard} setContentLetter={setContentLetter} setData={setData} title={"Softskill"} />
				</div>
			</div>
			<CoverLetter content={contentLetter} setMessage={setMessage} />
		</main>
	);
};

export default Application;
