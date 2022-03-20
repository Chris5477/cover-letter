
import { useState } from "react";
import FormData from "./FormData";
import CreateBtn from "./CreateBtn";

const Skills = ({state, method}) => {
	const [name, setName] = useState("");
	const [description, setDescritpion] = useState("");
	

	return (
		<section className="skill">
			<h2>Mes compétences</h2>
			<FormData valueName={name} valueDescription={description} handleChange={(e) => setName(e)} handleChangeDescription={(e) => setDescritpion(e)} />
			<CreateBtn handleClick={() => method([...state , {name : name, description : description}])}/>
		</section>
	);
};

export default Skills
