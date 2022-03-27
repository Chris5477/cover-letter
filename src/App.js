import "./App.css";
import Header from "./components/Header";
import Data from "./components/Data";
import { useState } from "react";
import Card from "./components/Card";
import CoverLetter from "./components/CoverLetter";

function App() {
	const [data, setData] = useState([]);
	const [contentLetter, setContentLetter] = useState([]);

	return (
		<div className="App">
			<Header />
			<main>
				<div className="forms">
					<Data state={data} method={setData} />
				</div>
				<div className="container">
					{data.map(({ name, description }, index) => (
						<Card key={`index ${index}`} name={name} description={description} handleClick={() => setContentLetter(description)} />
					))}
				</div>
				<CoverLetter content={contentLetter} />
			</main>
		</div>
	);
}

export default App;
