import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Application from "./pages/Application";
import Error from "./pages/Error";
import Header from "./components/Utils/Header";
import { store } from "./Redux/store";
import { Provider } from "react-redux";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Header />
				<BrowserRouter>
					<Routes>
						<Route exact path={"cover-letter/"} element={<Home />} />
						<Route path={"/application"} element={<Application />} />
						<Route element={<Error />} />
					</Routes>
				</BrowserRouter>
			</div>
		</Provider>
	);
}

export default App;
