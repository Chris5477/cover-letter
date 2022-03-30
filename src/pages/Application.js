import Data from "../components/Application/Data";
import { useState } from "react";
import Card from "../components/Application/Card";
import CoverLetter from "../components/Application/CoverLetter";
import Working from "../components/Application/Working";

const Application = () => {

    let getData = [];
	const dataStorage = JSON.parse(localStorage.getItem("Cards"));

	if (dataStorage) {
		getData = dataStorage;
	}

	const isWorking = window.innerWidth > 1024 && (
		<Working/>
	);


	const [data, setData] = useState(getData);
	const [contentLetter, setContentLetter] = useState("");
	const [message, setMessage] = useState("");

	return (
		<div className="application">
			<main>
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
