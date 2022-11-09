import React from "react";
import { Link } from 'react-router-dom';
import "./main-menu.scss"


function MainMenu() {
	return (
		<React.Fragment>
			<section id="main-menu-wrapper">
				<h1 id="main-menu-header">SQL Joins Game</h1>
				<Link to={"/game"}>
					<button className="btn btn-rect-to-round btn-rect-to-round--black">Play Game</button>
				</Link>
			</section>
		</React.Fragment>
	);
}

export default MainMenu;
