const Card = ({ name, description }) => {
	return (
		<div className="card-skill">
			<h2>{name}</h2>
			<p>{description}</p>
		</div>
	);
};

export default Card;
