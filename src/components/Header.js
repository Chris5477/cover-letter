import Button from "./Button";
import logo from "../assets/icon/logout.svg"

const Header = () => {

	const contentBtn = window.innerWidth >= 1024 ? "Déconnexion" : <img src={logo} alt="logo logout" />

	const logOut = () => {
		localStorage.clear();
		window.location = "/";
	};

	return (
		<header>
			<h1>Ma lettre de motivation</h1>
			<p>Adaptez rapidement et facilement vos lettres de motivation !</p>
			{JSON.parse(localStorage.getItem("token")) && (
				<Button cssClass={"disconnect"} content={contentBtn} handleClick={logOut} />
			)}
		</header>
	);
};

export default Header;
