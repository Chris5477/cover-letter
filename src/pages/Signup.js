import { Link } from "react-router-dom";
import back from "../assets/icon/back.svg"
import FormUser from "../components/Home/FormUser";

const Signup = () => {
	return (
		<div className="signup">
			<FormUser id={"pseudo-sign"} id2={"password-sign"} classCSS={"signup-form"} />
			<Link to="/"><img src={back} alt="back arrow" /></Link>
		</div>
	);
};

export default Signup;
