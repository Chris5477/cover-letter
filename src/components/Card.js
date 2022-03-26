const Card = ({ name, handleClick }) => {
	return (
		<div  onClick={() => handleClick()} className="card">
			<h2>{name}</h2>
			<button className="btn-remove">X</button>
		</div>
	);
};

export default Card;
