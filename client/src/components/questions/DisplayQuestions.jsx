import { React, useState } from 'react'
import "./questions.scss";
import Questions from "../../assets/Questions.json";
import { Link } from 'react-router-dom';

function DisplayQuestions() {
    // Counter starts at 1 for user readability
    const [questionCount, setQuestionCount] = useState(1)

    return (
        <div className='content-container'>
            <h3 className='question-counter'>Question: {questionCount}/13</h3>
            <div className='questions-container'>
                <h1 className='questions'>{Questions[questionCount-1].Content}</h1>
            </div>
            <button className='next-question-btn' type='submit' onClick={() => setQuestionCount(questionCount+1)}>Next</button>
        </div>
    );
}

export default DisplayQuestions;