import { useState } from "react";
import FormData from "./FormData";
import CreateBtn from "./CreateBtn";

const Skills = ({ state, method }) => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	const wxc = () => {
		method([...state, { name: name, description: description }])
		setName("")
		setDescription("")
	}

	return (
		<section className="skill">
			<h2>Mes compétences</h2>
			<FormData
				valueName={name}
				valueDescription={description}
				handleChange={(e) => setName(e)}
				handleChangeDescription={(e) => setDescription(e)}
			/>
			<CreateBtn handleClick={() => wxc()} />
		</section>
	);
};

export default Skills;
