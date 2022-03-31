import Presentation from "../components/Home/Presentation";
import FormUser from "../components/Home/FormUser";

const Home = () => {
	return (
		<div className="home">
			<Presentation />
			<div className="forms-user">
				<FormUser id={"pseudo-log"} id2={"password-log"} isLogin />
				<FormUser id={"pseudo-sign"} id2={"password-sign"} />
			</div>
		</div>
	);
};

export default Home;
