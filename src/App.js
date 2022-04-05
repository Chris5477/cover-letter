import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Application from "./pages/Application";
import Error from "./pages/Error";
import Header from "./components/Utils/Header";
import { store, persistor } from "./Redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<BrowserRouter>
					<div className="App">
						<Header />
						<Routes>
							<Route exact path={"/"} element={<Home />} />
							<Route exact path={"/signup"} element={<Signup />} />
							<Route path={"/application"} element={<Application />} />
							<Route element={<Error />} />
						</Routes>
					</div>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
}

export default App;
