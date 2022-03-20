const Card = ({ name, handleClick }) => {
	return (
		<div onClick={() => handleClick()} className="card-skill">
			<h2>{name}</h2>
		</div>
	);
};

export default Card;
