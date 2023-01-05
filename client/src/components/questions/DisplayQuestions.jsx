import React from 'react'
import "./questions.scss";
import Questions from "../../assets/Questions.json";
import { Link } from 'react-router-dom';

function DisplayQuestions() {
    return (
        <div className='questions-container'>
        {Questions.slice(0,3).map((item, index) => {
            return <h1 key={index} className='questions'>{item.Content}</h1>
        })}
        </div>
    );
}

export default DisplayQuestions;