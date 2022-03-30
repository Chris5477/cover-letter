import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Application from "./pages/Application";
import Error from "./pages/Error";
import Header from "./components/Utils/Header";

function App() {


	return (
		<div className="App">
			<Header />
		<BrowserRouter>
			<Routes>
				<Route exact path={"/"} element={<Home />} />
				<Route path={"/application"} element={<Application />} />
				<Route element={<Error />} />
			</Routes>
		</BrowserRouter>
		</div>
		
	);
}

export default App;
