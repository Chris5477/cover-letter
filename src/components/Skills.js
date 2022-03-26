import { useState } from "react";
import FormData from "./FormData";
import CreateBtn from "./CreateBtn";
import { createData } from "../functions/createData";

const Skills = ({ state, method }) => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	return (
		<section className="section-form">
			<h2>Mes compétences</h2>
			<FormData
				valueName={name}
				valueDescription={description}
				handleChange={(e) => setName(e)}
				handleChangeDescription={(e) => setDescription(e)}
			/>
			<CreateBtn handleClick={() => createData(name, description, state, method, setName, setDescription)} />
		</section>
	);
};

export default Skills;
