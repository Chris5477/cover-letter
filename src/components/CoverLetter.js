import { useEffect } from "react";
import Button from "./Button";

const CoverLetter = ({ content }) => {
	useEffect(() => (document.querySelector(".contentLetter").innerHTML += content), [content]);

	return (
		<section className="cover-letter">
			<h2>Votre lettre de motivation</h2>
			<article className="example-cover-letter">
				<p className="contentLetter"></p>
			</article>
			<Button handleClick={() => console.log("coucou")} cssClass={"copy-btn"} content="Copier" />
		</section>
	);
};

export default CoverLetter;
