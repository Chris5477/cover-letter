export const copyCoverLetter = (e, setter) => {
	const element = document.querySelector(".contentLetter").value;
	e.preventDefault();
	navigator.clipboard
		.writeText(element)
		.then(() => setter("success-copy"))
		.catch(() => console.error("Un problème avec la copie du texte!"));
};
