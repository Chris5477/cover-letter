import "./App.css";
import Header from "./components/Header";
import Company from "./components/Company";
import Skills from "./components/Skills";
import { useState } from "react";
import Card from "./components/Card";
import CoverLetter from "./components/CoverLetter"

function App() {
	const [dataCompany, setDataCompany] = useState([]);
	const [skill, setMySkills] = useState([]);
	const [contentLetter, setContentLetter] = useState([])
	console.log(contentLetter)

	return (
		<div className="App">
			<Header />
			<Company state={dataCompany} method={setDataCompany} />
			<div className="container">
				{dataCompany.map(({ name, description }, index) => (
					<Card key={`index ${index}`} name={name} handleClick={() => setContentLetter(description)} />
				))}
			</div>
			<Skills state={skill} method={setMySkills} />
			<div className="container">
				{skill.map(({ name, description }, index) => (
					<Card key={`index ${index}`} name={name} handleClick={() => setContentLetter(description)} />
				))}
			</div>
			<CoverLetter content={contentLetter} />
		</div>
	);
}

export default App;
