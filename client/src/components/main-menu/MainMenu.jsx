import React from "react";
import "./main-menu.scss"

function MainMenu() {
	return (
		<React.Fragment>
			<section id="main-menu-wrapper">
				<h1 id="main-menu-header">SQL Joins Game</h1>
				<button className="btn btn-rect-to-round btn-rect-to-round--black">Play Game</button>
			</section>
		</React.Fragment>
	);
}

export default MainMenu;
