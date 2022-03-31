const FormData = ({ valueName, valueDescription, handleChange, handleChangeDescription }) => {
	return (
		<div className="formData">
			<label htmlFor="name">Nom de la carte</label>
			<input
				maxLength={26}
				type="text"
				value={valueName}
				id="name"
				onChange={(e) => handleChange(e.target.value)}
				placeholder="Travail d'équipe"
			/>
			<label className="description">Contenu de la carte</label>
			<textarea
				id="description"
				value={valueDescription}
				onChange={(e) => handleChangeDescription(e.target.value)}
				placeholder="Lors de mon dernier poste , j'ai su apprendre à travailler avec une équipe etc..."
			></textarea>
		</div>
	);
};

export default FormData;
