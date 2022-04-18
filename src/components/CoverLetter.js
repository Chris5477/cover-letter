import { useEffect } from "react";
import Button from "./Button";
import { copyCoverLetter } from "../utils/functions/copyCoverLetter";

const CoverLetter = ({ content, setMessage }) => {
	useEffect(() => {
		document.querySelector(".contentLetter").value += content;
	}, [content]);

	return (
		<section className="cover-letter">
			<div className="header-letter">
				<label htmlFor="letter">
					Votre lettre de motivation
				</label>
				<Button handleClick={(e) => copyCoverLetter(e, setMessage)} cssClass={"copy-btn"} content="Copier" />
			</div>
			<textarea className="contentLetter" id="letter"></textarea>
		</section>
	);
};

export default CoverLetter;
