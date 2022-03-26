import { useState } from "react";
import FormData from "./FormData";
import CreateBtn from "./CreateBtn";

const Company = ({ state, method }) => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	const wxc = () => {
		method([...state, { name: name, description: description }])
		setName("")
		setDescription("")
	}

	return (
		<section className="section-form">
			<h2>L'entreprise</h2>
			<FormData
				valueName={name}
				valueDescription={description}
				handleChange={(e) => setName(e)}
				handleChangeDescription={(e) => setDescription(e)}
			/>
			<CreateBtn handleClick={() => wxc() } />
		</section>
	);
};

export default Company;
