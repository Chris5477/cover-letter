const FormData = ({ valueName, valueDescription, valueType, handleChangeName, handleChangeDescription, handleChangeType }) => {
	return (
		<div className="formData">
			<label htmlFor="name">Nom de la carte</label>
			<input
				maxLength={26}
				type="text"
				value={valueName}
				id="name"
				onChange={(e) => handleChangeName(e.target.value)}
				placeholder="Travail d'équipe"
			/>
			<label className="description">Contenu de la carte</label>
			<textarea
				id="description"
				value={valueDescription}
				onChange={(e) => handleChangeDescription(e.target.value)}
				placeholder="Lors de mon dernier poste , j'ai su apprendre à travailler avec une équipe etc..."
			></textarea>

			<label htmlFor="type-card">Type de la carte</label>
			<select onChange={(e) => handleChangeType(e.target.value)} id="type-card" value={valueType}>
				<option value="Stucturing">Stucturation</option>
				<option value="Values">Valeurs/aspirations</option>
				<option value="hardskill">Compétence hardskill</option>
				<option value="softskill">Compétence transversales</option>
			</select>
		</div>
	);
};

export default FormData;
