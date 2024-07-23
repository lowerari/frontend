import React, { useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import confetti from "canvas-confetti";
import axios from "axios";

export default function OrientationLesson2Quiz({ setOrientationLesson2QuizIsOpen, setOrientationLesson3IsActive }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(false);
    

    const slides = [
        Slide1,
        Slide2,
        Slide3,
        Slide4,
        Slide5,
    ]

    const handleUpdateCourseProgress = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.patch('http://127.0.0.1:8000/update_course', {
                orientation_lesson_3 : true
            }, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <div className="centered">
            <div className="modal">
                <div className="modalHeader">
                    <h5 className="heading">Goals of Skills Training: Quiz</h5>
                </div>
                <button className="closeBtn" onClick={() => setOrientationLesson2QuizIsOpen(false)}>
                    <RiCloseLine style={{ marginBottom: "-3px" }}/>
                </button>

                <div className="modalContent">
                    <div className="progressBar">
                        <div className="progressFill" style={{ width: `${(currentSlide + 1) * (100 / slides.length)}%` }}></div>
                    </div>

                    <div className="slide">
                        {React.createElement(slides[currentSlide], {setCorrectAnswer})}
                    </div>

                    <div className="slideNav">
                        {/* {currentSlide !== 0 && <button className="prevButton" onClick={() => setCurrentSlide(currentSlide - 1)}>Previous</button>} */}
                        <div className="invisoDiv"></div>
                        {currentSlide === slides.length - 1 && <button className="nextButton" onClick={() => {
                            setOrientationLesson2QuizIsOpen(false); 
                            setCorrectAnswer(false);
                            setOrientationLesson3IsActive(true);
                            handleUpdateCourseProgress();
                        }}>Finish!</button>}
                        {currentSlide !== slides.length - 1 && <button className={correctAnswer ? "nextButton" : "nextButton bad"} onClick={() => {
                            setCurrentSlide(currentSlide + 1);
                            setCorrectAnswer(false);
                        }}>Next</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

function Slide1({setCorrectAnswer}){
    const [selectedAnswers, setSelectedAnswers] = useState({
        "People are doing the best they can": false,
        "People need to be better, try harder, and be more motivated to change": false,
        "Sometimes, a behavior doesn't have a cause": false,
        "New behaviors must be learned in all relevant contexts": false,
    });
    const [message, setMessage] = useState('');

    const handleCheckboxChange = (answer) => {
        setSelectedAnswers(prev => ({ ...prev, [answer]: !prev[answer] }));
    };

    const handleSubmit = () => {
        if (selectedAnswers["People are doing the best they can"] && selectedAnswers["People need to be better, try harder, and be more motivated to change"] && !selectedAnswers["Sometimes, a behavior doesn't have a cause"] && selectedAnswers["New behaviors must be learned in all relevant contexts"]) {
            setMessage("Good job!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    };

    return(
        <>
            <h3 className="slideHeading">Question 1</h3>
            <p>Which of the following are skills training assumptions?</p>
            
            <div className="checkboxes">
                {Object.keys(selectedAnswers).map((answer, index) => (
                    <label key={index} className="checkboxContainer">
                        <input
                            type="checkbox"
                            checked={selectedAnswers[answer]}
                            onChange={() => handleCheckboxChange(answer)}
                        />
                        <span className="checkmark"></span>
                        <p>{answer}</p>
                    </label>
                ))}
            </div>

            {message && <div className={message === "Good job!" ? "feedbackGood" : "feedbackBad"}>{message}</div>}
            <div className="submitButton" onClick={handleSubmit}>
                Check!
            </div>
        </>
    )
}

function Slide2({setCorrectAnswer}){
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (selectedAnswer === "The urge to commit suicide did not occur or was not felt that day.") {
            setMessage("Great Work!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    }

    return(
        <>
            <h3 className="slideHeading">Question 2</h3>
            <p>What does a rating of "1" mean under "Urges: Commit Suicide"? in the DBT Diary?</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="ratingUrgesAnswer1" name="ratingUrgesAnswer" value="The urge to commit suicide did not occur or was not felt that day." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="ratingUrgesAnswer1">The urge to commit suicide did not occur or was not felt that day.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="ratingsUrgesAnswer2" name="ratingUrgesAnswer" value="The urge to commit suicide was neither low nor high that day." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="ratingsUrgesAnswer2">The urge to commit suicide was neither low nor high that day.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="ratingsUrgesAnswer3" name="ratingUrgesAnswer" value="The urge to commit suicide was very high that day." onChange={(e) => setSelectedAnswer(e.target.value)}/>
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="ratingsUrgesAnswer3">The urge to commit suicide was very high that day.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="ratingsUrgesAnswer4" name="ratingUrgesAnswer" value="The urge to commit suicide was unbearably high that day." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="ratingsUrgesAnswer4">The urge to commit suicide was unbearably high that day.</label>
                </div>
            </div>
            {message && <div className={message === "Great Work!" ? "feedbackGood" : "feedbackBad"}>{message}</div>}
            <div className="submitButton" onClick={handleSubmit}>
                Check!
            </div>
        </>
    )
}

function Slide3({setCorrectAnswer}){
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (selectedAnswer === "Emotion misery was unbearable that day.") {
            setMessage("Amazing!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    }

    return(
        <>
            <h3 className="slideHeading">Question 3</h3>
            <p>What does a rating of "5" mean under "Emotions: Emotion Misery" in the DBT Diary?</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="ratingEmotionsAnswer1" name="ratingEmotionsAnswer" value="Emotion misery was very low that day." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="ratingEmotionsAnswer1">Emotion misery was very low that day.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="ratingEmotionsAnswer2" name="ratingEmotionsAnswer" value="Emotion misery was neither low nor high that day." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="ratingEmotionsAnswer2">Emotion misery was neither low nor high that day.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="ratingEmotionsAnswer3" name="ratingEmotionsAnswer" value="Emotion misery did not occur that day." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="ratingEmotionsAnswer3">Emotion misery did not occur that day.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="ratingEmotionsAnswer4" name="ratingEmotionsAnswer" value="Emotion misery was unbearable that day." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="ratingEmotionsAnswer4">Emotion misery was unbearable that day.</label>
                </div>
            </div>
            {message && <div className={message === "Amazing!" ? "feedbackGood" : "feedbackBad"}>{message}</div>}
            <div className="submitButton" onClick={handleSubmit}>
                Check!
            </div>
        </>
    )
}

function Slide4({setCorrectAnswer}){
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (selectedAnswer === "All of the above.") {
            setMessage("You're on fire!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    }

    return(
        <>
            <h3 className="slideHeading">Question 4</h3>
            <p>What can you use the "Notes" section for in the DBT Diary?</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="notesAnswer1" name="notesAnswer" value="Write down your experience with skills practice that day." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="notesAnswer1">Write down your experience with skills practice that day.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="notesAnswer2" name="notesAnswer" value="Write down more details about your behaviors that day." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="notesAnswer2">Write down more details about your behaviors that day.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="notesAnswer3" name="notesAnswer" value="Write down your feelings/thoughts." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="notesAnswer3">Write down your feelings/thoughts.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="notesAnswer4" name="notesAnswer" value="All of the above." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="notesAnswer4">All of the above.</label>
                </div>
            </div>
            {message && <div className={message === "You're on fire!" ? "feedbackGood" : "feedbackBad"}>{message}</div>}
            <div className="submitButton" onClick={handleSubmit}>
                Check!
            </div>
        </>
    )
}

function Slide5(){
    useEffect(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }, []);

    return(
        <>
            <h3 className="slideHeading">Congratulations!</h3>
            <p>You passed the second lesson with flying colors! Now get ready to learn about the biosocial theory of emotion dysregulation and get started on your path to healing!</p>
        </>
    )
}