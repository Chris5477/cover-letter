import { useState } from "react";
import FormData from "./FormData";
import { createData } from "../utils/functions/createData";
import Button from "./Button";
import HeadBand from "./Headband";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";

const Data = ({ message, setMessage, setData }) => {
	const dataStore = useSelector((state) => state.dataUser.user);
	const dispatch = useDispatch();

	const isButton = window.innerWidth <= 1024 && (
		<Button cssClass={"show-working"} content="Afficher" handleClick={() => setShowModal(true)} />
	);

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [type, setType] = useState("");
	const [showModal, setShowModal] = useState(false);

	return (
		<section className="section-form">
			<h2>Créer une carte</h2>
			{isButton}
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
					createData(name, description, type, setName, setDescription, setType, setMessage, setData, dataStore, dispatch)
				}
			/>
			<HeadBand typeMessage={message} setter={setMessage} />
			{showModal && <Modal setter={setShowModal} />}
		</section>
	);
};

export default Data;
