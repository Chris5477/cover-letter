import { useState, useEffect } from "react";
import FormData from "./FormData";
import { createData } from "../utils/functions/createData";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";

const Data = ({ message, setMessage, setData }) => {
	const dataStore = useSelector((state) => state.dataUser.user);
	const { pseudo } = dataStore;
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [type, setType] = useState("");

	useEffect(() => {
		setTimeout(() => setMessage(""), 4000);
		return () => clearTimeout(4000);
	});

	let infoForm, alertMsg;

	switch (message) {
		case "error": {
			infoForm = "Veuillez remplir tous les champs du formulaire !";
			alertMsg ="alert"
			break;
		}

		case "success-create": {
			infoForm = "Carte créée avec succès.";
			alertMsg ="alert"
			break;
		}

		case "success-copy": {
			infoForm = "Texte copié avec succès.";
			alertMsg ="alert"
			break;
		}

		default:
			infoForm = "";
	}

	return (
		<section className="section-form">
			<h2 className="greeting">Bonjour, {pseudo} </h2>
			<h3>Créer une carte</h3>
			<FormData
				valueName={name}
				valueDescription={description}
				valueType={type}
				handleChangeName={(e) => setName(e)}
				handleChangeDescription={(e) => setDescription(e)}
				handleChangeType={(e) => setType(e)}
			/>

			<Button
				cssClass={"create-data"}
				content="Créer"
				handleClick={() =>
					createData(
						name,
						description,
						type,
						setName,
						setDescription,
						setType,
						setMessage,
						setData,
						dataStore,
						dispatch
					)
				}
			/>
			<p className={`info-form ${alertMsg}`}>{infoForm}</p>
		</section>
	);
};

export default Data;
