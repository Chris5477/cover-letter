import "./App.css";
import Header from "./components/Header";
import Company from "./components/Company";
import Skills from "./components/Skills";
import { useState } from "react";
import Card from "./components/Card";
import CoverLetter from "./components/CoverLetter";

function App() {
	const [dataCompany, setDataCompany] = useState([]);
	const [skill, setMySkills] = useState([]);
	const [contentLetter, setContentLetter] = useState([]);

	return (
		<div className="App">
			<Header />
			<main>
				<div className="forms">
					<Company state={dataCompany} method={setDataCompany} />
					<Skills state={skill} method={setMySkills} />
				</div>
				<div className="container">
					{dataCompany.map(({ name, description }, index) => (
						<Card key={`index ${index}`} name={name} description={description} handleClick={() => setContentLetter(description)} />
					))}
					{skill.map(({ name, description }, index) => (
						<Card key={`index ${index}`} name={name} description={description} handleClick={() => setContentLetter(description)} />
					))}
				</div>
				<CoverLetter content={contentLetter} />
			</main>
		</div>
	);
}

export default App;
