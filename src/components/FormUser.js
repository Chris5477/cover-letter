import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createUser } from "../requests/createUser";
import { login } from "../requests/login";

const FormUser = ({ id, id2, classCSS }) => {
	const [pseudo, setPseudo] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("")
	const dispatch = useDispatch();
	let txtBtn, title, method,link;

	if (classCSS === "login-form") {
		txtBtn = "Se connecter";
		title = "Connectez-vous";
		method = (e) => login(e, userID, dispatch , setMessage);
		link = <span>Pas de compte, <Link to={"/signup"}>Inscrivez-vous</Link></span>

	} else {
		txtBtn = "Envoyer";
		title = "Inscrivez-vous";
		method = (e) => createUser(e, userID, setMessage);
	}

	const userID = {
		pseudo: pseudo,
		password: password,
	};

	return (
		<form className={classCSS} onSubmit={(e) => method(e)}>
			<h2>{title}</h2>
			<div>
				<label htmlFor={id}>Votre pseudo</label>
				<input onChange={(e) => setPseudo(e.target.value)} id={id} type={"text"} value={pseudo} />
			</div>

			<div>
				<label htmlFor={id2}>Votre password</label>
				<input onChange={(e) => setPassword(e.target.value)} id={id2} type={"password"} value={password} />
			</div>
			<p className="msg-user">{message}</p>
			<input type="submit" value={txtBtn} />
			{link}
		</form>
	);
};

export default FormUser;
