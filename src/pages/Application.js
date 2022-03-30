import Data from "../components/Application/Data";
import { useState } from "react";
import Card from "../components/Application/Card";
import CoverLetter from "../components/Application/CoverLetter";
import Working from "../components/Application/Working";

const Application = () => {
	const user = JSON.parse(localStorage.getItem("user"));
	const { pseudo, cards } = user.user;

	const isWorking = window.innerWidth > 1024 && <Working />;

	const [data, setData] = useState(cards);
	const [contentLetter, setContentLetter] = useState("");
	const [message, setMessage] = useState("");

	return (
		<div className="application">
			<main>
				<h2 className="greeting">Bonjour,{pseudo} </h2>
				<div className="forms">
					{isWorking}
					<Data state={data} method={setData} message={message} setMessage={setMessage} />
				</div>
				<div className="container">
					{data.map(({ name, description }, index) => (
						<Card
							key={`index ${index}`}
							name={name}
							description={description}
							handleClick={() => setContentLetter(description)}
							state={data}
							setter={setData}
						/>
					))}
				</div>
				<CoverLetter content={contentLetter} setMessage={setMessage} />
			</main>
		</div>
	);
};

export default Application;
