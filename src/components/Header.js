import Button from "./Button";
import Modal from "./Modal";
import logo from "../assets/icon/logout.svg";
import { useState } from "react";
import { logOut } from "../utils/functions/logout";

const Header = () => {
	const [showModal, setShowModal] = useState(false);

	const contentBtn = window.innerWidth >= 1024 ? "Déconnexion" : <img src={logo} alt="logo logout" />;
	
	return (
		<header>
			<h1>Ma lettre de motivation</h1>
			<p>Adaptez rapidement et facilement vos lettres de motivation !</p>
			{JSON.parse(localStorage.getItem("token")) && (
				<>
					<Button cssClass={"disconnect"} content={contentBtn} handleClick={logOut} />
					<Button cssClass={"delete-account"} content={"Supprimer mon compte"} handleClick={() => setShowModal(true)} />
				</>
			)}
			{showModal && <Modal setShowModal={setShowModal} />}
		</header>
	);
};

export default Header;
