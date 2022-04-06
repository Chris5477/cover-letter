import letter from "../assets/icon/letter.svg"
import timer from "../assets/icon/timer.svg"
import send from "../assets/icon/send.svg"

const Presentation = () => {
	return (
		<div className="presentation">
			<h2 className="objectif">Gagnez du temps pour réaliser vos lettres de motivation</h2>

			<section className="explaination">
				<h2>Créer des cartes</h2>
				<article>
					Générez des cartes pour vous faire gagner du temps. De la structuration aux compétences, chaque carte
					contiendra le texte que vous avez besoin pour écrire votre lettre de motivation.
				</article>
				<aside><img src={letter} alt="letter" /></aside>
			</section>

			<section className="explaination">
				<h2>Productivité</h2>
				<article>Moins de perte de temps, en quelque cliques, votre lettre de motivation est écrite</article>
				<aside><img src={timer} alt="clock" /></aside>
			</section>

			<section className="explaination">
				<h2>Envoyez</h2>
				<article>Satisfait de votre lettre, vous pouvez la copier directement depuis l'application </article>
				<aside><img src={send} alt="envelope" /></aside>
			</section>
		</div>
	);
};

export default Presentation;
