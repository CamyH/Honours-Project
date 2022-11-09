import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainMenu from "./components/main-menu/MainMenu";
import Game from "./components/game/Game";
import "./App.scss";

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path="/" element={<MainMenu />} />
				<Route path="/game" element={<Game />} />
			</Routes>
		</Router>
	);
}

export default App;
