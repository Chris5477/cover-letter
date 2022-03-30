import { useState } from "react";


const FormUser = ({id, id2, login, method}) => {

	const [pseudo, setPseudo] = useState("")
	const [password, setPassword] = useState("")

	let txtBtn, title;
	if(login){
		txtBtn = "Se connecter"
		title = "Connectez-vous"
	}else{
		txtBtn = "Envoyer"
		title = "Inscrivez-vous"
	}

	const userID = {
		pseudo : pseudo,
		password : password
	}

	return (
		<form onSubmit={(e) => method(e,userID)}>
			<h2>{title}</h2>
			<div>
				<label htmlFor={id}>Votre pseudo</label>
				<input onChange={(e) => setPseudo(e.target.value)} id={id} type={"text"} value={pseudo}/>
			</div>

            <div>
				<label htmlFor={id2}>Votre password</label>
				<input onChange={(e) => setPassword(e.target.value)} id={id2} type={"password"} value={password}/>
			</div>

            <input type="submit"  value={txtBtn} />
		</form>
	);
};

export default FormUser;
