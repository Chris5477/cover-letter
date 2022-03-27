import "./App.css";
import Header from "./components/Header";
import Data from "./components/Data";
import { useState } from "react";
import Card from "./components/Card";
import CoverLetter from "./components/CoverLetter";
import Working from "./components/Working";
import { cards } from "./utils/data/cards";

function App() {
	let getData = cards;
	const dataStorage = JSON.parse(localStorage.getItem("Cards"))

	if (dataStorage) {
		getData = dataStorage;
	} 

	
	const [data, setData] = useState(getData);
	const [contentLetter, setContentLetter] = useState([]);

	return (
		<div className="App">
			<Header />
			<main>
				<div className="forms">
					<Working />
					<Data state={data} method={setData} />
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
				<CoverLetter content={contentLetter} />
			</main>
		</div>
	);
}

export default App;
