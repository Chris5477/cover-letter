export const copyCoverLetter = (e) => {
	const element = document.querySelector(".contentLetter").textContent;
	e.preventDefault();
	navigator.clipboard
		.writeText(element)

		.then(() => alert("Texte copié"));
};
