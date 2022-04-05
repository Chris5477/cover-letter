import Card from "./Card";

const TypeCard = ({ arr, setContentLetter, setData, title}) => {

	return (
		<div className="container-cards">
            <h2 className="title-section">{title}</h2>
			{arr.map(({ name, description, type}, index) => ( 
				<Card
					key={`index ${index}`}
					name={name}
					description={description}
					handleClick={() => setContentLetter(description)}
					setData={setData}
                    classCSS={type}
					arr={arr}
				/>
			))}
		</div>
	);
};

export default TypeCard;
