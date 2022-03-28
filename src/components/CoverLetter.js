import { useEffect } from "react";
import Button from "./Button";
import { copyCoverLetter } from "../utils/functions/copyCoverLetter";

const CoverLetter = ({ content, setMessage }) => {
	useEffect(() => {
		document.querySelector(".contentLetter").value += content;
	}, [content]);

	return (
		<section className="cover-letter">
			<h2>Votre lettre de motivation</h2>
			<textarea className="contentLetter"></textarea>
			<Button handleClick={(e) => copyCoverLetter(e, setMessage)} cssClass={"copy-btn"} content="Copier" />
		</section>
	);
};

export default CoverLetter;
