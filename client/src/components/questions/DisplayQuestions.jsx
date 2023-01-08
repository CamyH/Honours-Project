import { React, useState } from 'react'
import "./questions.scss";
import Questions from "../../assets/Questions.json";
import QuestionData from "../../assets/QuestionData.json";
import { Link } from 'react-router-dom';

function DisplayQuestions() {
    // Counter starts at 1 for user readability
    const [questionCount, setQuestionCount] = useState(1)
    //const [randomCountry, setRandomCountry, randomAirportCode, setRandomAirportCode] = useState(0)
    // Used for populating random countries/cities for question
    const randomCountry = Math.round(Math.floor(Math.random() * (6 - 0 + 1)) + 0)
    const randomCity = Math.round(Math.floor(Math.random() * (12 - 7 + 1)) + 7)

    return (
        <div className='content-container'>
            <h3 className='question-counter'>Question: {questionCount}/13</h3>
            <div className='questions-container'>
                <h1 className='questions'>{Questions[questionCount-1].Content} {QuestionData[randomCountry].Name}</h1>
            </div>
            <button className='next-question-btn' type='submit' onClick={() => setQuestionCount(questionCount+1)}>Next</button>
        </div>
    );
}

export default DisplayQuestions;