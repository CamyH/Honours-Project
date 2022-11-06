import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainMenu from "./components/main-menu/MainMenu";
import "./App.scss";

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path="/" element={<MainMenu />} />
			</Routes>
		</Router>
	);
}

export default App;
