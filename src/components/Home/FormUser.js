const FormUser = ({login}) => {

	let txtBtn, title;
	if(login){
		txtBtn = "Se connecter"
		title = "Connectez-vous"
	}else{
		txtBtn = "Envoyer"
		title = "Inscrivez-vous"
	}

	return (
		<form>
			<h2>{title}</h2>
			<div>
				<label htmlFor="pseudo">Votre pseudo</label>
				<input id="pseudo" type={"text"} defaultValue=""/>
			</div>

            <div>
				<label htmlFor="password">Votre password</label>
				<input id="password" type={"password"} defaultValue=""/>
			</div>

            <input type="submit" value={txtBtn} />
		</form>
	);
};

export default FormUser;
