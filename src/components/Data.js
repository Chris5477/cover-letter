import { useState } from "react";
import FormData from "./FormData";
import { createData } from "../utils/functions/createData";
import Button from "./Button";
import { setDataInLocalstorage } from "../utils/functions/setDataInLocalstorage";

const Data = ({ state, method }) => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	return (
		<section className="section-form">
			<h2>Créer une carte</h2>
			<FormData
				valueName={name}
				valueDescription={description}
				handleChange={(e) => setName(e)}
				handleChangeDescription={(e) => setDescription(e)}
			/>
			<Button
				cssClass={"create-data"}
				content="Créer"
				handleClick={() => createData(name, description, state, method, setName, setDescription)}
			/>

			<Button 
				cssClass="save-data"
				content="Sauvegarder"
				handleClick={() => setDataInLocalstorage(state)}
				/>
		</section>
	);
};

export default Data;
