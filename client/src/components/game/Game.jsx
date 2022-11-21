import React from 'react'
import "./game.scss";
import { Link } from 'react-router-dom';

function Game() {
    return (
        <React.Fragment>
            <h2 className='question-num'>{}</h2>
            <h1 id='game-page-header'>Learn SQL Joins</h1>
            <h2 className='score'>{}</h2>
        </React.Fragment>
    );
}

export default Game;