import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { deleteUser } from "../requests/deleteUser";
import Button from "./Button";

const Modal = ({setShowModal}) => {

    const {_id} = useSelector(state => state.dataUser.user)
   


    console.log(_id)
	return createPortal(
		<div className="modal">
			<div className="content-modal">
				<h2>Suppression de votre compte</h2>
				<p>Ëtes-vous sûr de vouloir supprimer votre compte?</p>
				<Button cssClass={"agree"} content={"Oui"} handleClick={() => deleteUser(_id)} />
				<Button cssClass={"no-confirm"} content={"Non"} handleClick={() => setShowModal(false)} />
			</div>
		</div>,

		document.body
	);
};

export default Modal;
