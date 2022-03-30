import Presentation from "../components/Home/Presentation";
import FormUser from "../components/Home/FormUser";

const Home = () => {
	return (
		<div className="home">
			<Presentation />
			<div className="forms-user">
				<FormUser login />
				<FormUser />
			</div>
		</div>
	);
};

export default Home;
