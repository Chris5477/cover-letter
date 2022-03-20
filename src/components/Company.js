import { useState } from "react";
import FormData from "./FormData";
import CreateBtn from "./CreateBtn";

const Company = ({ state, method }) => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	return (
		<section className="company">
			<h2>L'entreprise</h2>
			<FormData
				valueName={name}
				valueDescription={description}
				handleChange={(e) => setName(e)}
				handleChangeDescription={(e) => setDescription(e)}
			/>
			<CreateBtn handleClick={() => method([...state, { name: name, description: description }])} />
		</section>
	);
};

export default Company;
