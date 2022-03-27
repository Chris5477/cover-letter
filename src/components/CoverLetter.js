import { useEffect } from "react";
import Button from "./Button";
import { copyCoverLetter } from "../utils/functions/copyCoverLetter";

const CoverLetter = ({ content }) => {
	useEffect(() => (document.querySelector(".contentLetter").innerHTML += content), [content]);

	return (
		<section className="cover-letter">
			<h2>Votre lettre de motivation</h2>
			<article className="example-cover-letter">
				<p className="contentLetter"></p>
			</article>
			<Button handleClick={copyCoverLetter} cssClass={"copy-btn"} content="Copier" />
		</section>
	);
};

export default CoverLetter;
