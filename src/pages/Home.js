import Presentation from "../components/Home/Presentation";
import FormUser from "../components/Home/FormUser";
import { createUser } from "../requests/createUser";
import { login } from "../requests/login";


const Home = () => {
	return (
		<div className="home">
			<Presentation />
			<div className="forms-user">
				<FormUser id={"pseudo-log"} id2={"password-log"} login method={login}/>
				<FormUser id={"pseudo-sign"} id2={"password-sign"} method={createUser}/>
			</div>
		</div>
	);
};

export default Home;
