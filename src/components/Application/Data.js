import { useState } from "react";
import FormData from "./FormData";
import { createData } from "../../utils/functions/createData";
import Button from "../Utils/Button";
import HeadBand from "../Utils/Headband";
import Modal from "../Utils/Modal";

const Data = ({ state, method, message, setMessage }) => {
	const isButton = window.innerWidth <= 1024 && (
		<Button cssClass={"show-working"} content="Afficher" handleClick={() => setShowModal(true)} />
	);

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [showModal, setShowModal] = useState(false);

	return (
		<section className="section-form">
			<h2>Créer une carte</h2>
			{isButton}
			<FormData
				valueName={name}
				valueDescription={description}
				handleChange={(e) => setName(e)}
				handleChangeDescription={(e) => setDescription(e)}
			/>

			<Button
				cssClass={"create-data"}
				content="Créer"
				handleClick={() => createData(name, description, state, method, setName, setDescription, setMessage)}
			/>
			<HeadBand typeMessage={message} setter={setMessage} />
			{showModal && <Modal setter={setShowModal} />}
		</section>
	);
};

export default Data;
