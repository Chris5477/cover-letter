const FormData = ({valueName, valueDescription, handleChange, handleChangeDescription }) => {
	return (
		<div className="formData">
			<label htmlFor="name">Nom de l'information</label>
			<input type="text" value={valueName} id="name" onChange={(e) => handleChange(e.target.value)} />
			<label className="description">Description de l'information</label>
			<textarea cols={100} rows={5} id="description" value={valueDescription} onChange={(e) => handleChangeDescription(e.target.value)}></textarea>
		</div>
	);
};

export default FormData;
