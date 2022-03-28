import { useEffect } from "react";

const Headband = ({ typeMessage, setter }) => {
	useEffect(() => setTimeout(() => setter(""), 9000), [typeMessage]);

	let classCss = null;
	let text = null;

	switch (typeMessage) {
		case "error": {
			classCss = "msg-error";
			text = "Veuillez remplir tous les champs du formulaire !";
			break;
		}

		case "success-create": {
			classCss = "msg-success";
			text = "Carte créée avec succès.";
			break;
		}

		case "success-save": {
			classCss = "msg-success";
			text = "Les données sont enregistrées.";
			break;
		}

		case "success-copy": {
			classCss = "msg-success";
			text = "Texte copié avec succès.";
			break;
		}

		default:
			classCss = "no-display";
	}

	return (
		<div className={classCss}>
			<p>{text}</p>
		</div>
	);
};

export default Headband;
