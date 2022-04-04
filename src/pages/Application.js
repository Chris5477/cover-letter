import Data from "../components/Application/Data";
import { useState, useEffect } from "react";
import Card from "../components/Application/Card";
import CoverLetter from "../components/Application/CoverLetter";
import Working from "../components/Application/Working";
import { useSelector } from "react-redux";

const Application = () => {
	const isWorking = window.innerWidth > 1024 && <Working />;
	const user = useSelector((state) => state);
	const { pseudo, cards } = user.dataUser.user;
	const [data, setData] = useState(cards);
	const [contentLetter, setContentLetter] = useState("");
	const [message, setMessage] = useState("");
	useEffect(
		() => data.length > 0 && [...document.querySelectorAll(".card")][data.length - 1].classList.add("popping"),
		[data]
	);

	return (
		<div className="application">
			<main>
				<div className="forms">
					<h2 className="greeting">Bonjour, {pseudo} </h2>
					{isWorking}
					<Data message={message} setMessage={setMessage} setData={setData} />
				</div>
				<div className="container">
					{data.map(({ name, description }, index) => (
						<Card
							key={`index ${index}`}
							name={name}
							description={description}
							handleClick={() => setContentLetter(description)}
							setData={setData}
						/>
					))}
				</div>
				<CoverLetter content={contentLetter} setMessage={setMessage} />
			</main>
		</div>
	);
};

export default Application;
