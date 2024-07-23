import React, { useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import confetti from 'canvas-confetti';
import axios from "axios";

export default function OrientationLesson1Quiz({ setOrientationLesson1QuizIsOpen, setOrientationLesson2IsActive }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(false);
    

    const slides = [
        Slide1,
        Slide2,
        Slide3,
        Slide4,
        Slide5,
        Slide6,
        Slide7,
        Slide8
    ]

    const handleUpdateCourseProgress = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.patch('http://127.0.0.1:8000/update_course', {
                orientation_lesson_2 : true
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
                <button className="closeBtn" onClick={() => setOrientationLesson1QuizIsOpen(false)}>
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
                            setOrientationLesson1QuizIsOpen(false); 
                            setCorrectAnswer(false);
                            setOrientationLesson2IsActive(true);
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
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (selectedAnswer === "To learn how to change your own behaviors, emotions, and thoughts that are linked to problems in living and are causing misery and distress.") {
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
            <p>What is the GENERAL GOAL of skills training?</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="generalGoalAnswer1" name="generalGoalAnswer" value="To learn how to control your emotions so that you never have to feel a negative emotion again." onChange={(e) => setSelectedAnswer(e.target.value)}/>
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="generalGoalAnswer1">To learn how to control your emotions so that you never have to feel a negative emotion again.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="generalGoalAnswer2" name="generalGoalAnswer" value="To learn how to make everyone like you so that you can live a perfect life and never have another problem again." onChange={(e) => setSelectedAnswer(e.target.value)}/>
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="generalGoalAnswer2">To learn how to make everyone like you so that you can live a perfect life and never have another problem again.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="generalGoalAnswer3" name="generalGoalAnswer" value="To learn how to behave perfectly and never make another mistake." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="generalGoalAnswer3">To learn how to behave perfectly and never make another mistake.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="generalGoalAnswer4" name="generalGoalAnswer" value="To learn how to change your own behaviors, emotions, and thoughts that are linked to problems in living and are causing misery and distress." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="generalGoalAnswer4">To learn how to change your own behaviors, emotions, and thoughts that are linked to problems in living and are causing misery and distress.</label>
                </div>
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
        if (selectedAnswer === "Accepting reality as it is") {
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
            <p>Which of the following is NOT a behavior to decrease?</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="behaviorDecreaseAnswer1" name="behaviorDecreaseAnswer" value="judgmentalness" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="behaviorDecreaseAnswer1">Judgmentalness</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="behaviorDecreaseAnswer2" name="behaviorDecreaseAnswer" value="Interpersonal conflict and stress" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="behaviorDecreaseAnswer2">Interpersonal conflict and stress</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="behaviorDecreaseAnswer3" name="behaviorDecreaseAnswer" value="Accepting reality as it is" onChange={(e) => setSelectedAnswer(e.target.value)}/>
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="behaviorDecreaseAnswer3">Accepting reality as it is</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="behaviorDecreaseAnswer4" name="behaviorDecreaseAnswer" value="difficulties in regulating emotions." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="behaviorDecreaseAnswer4">Difficulties in regulating emotions</label>
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
        if (selectedAnswer === "Mindfulness, Distress Tolerance, Emotion Regulation, Interpersonal Effectiveness") {
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
            <p>What are the four types of skills covered in DBT skills training?</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="skillsTypesAnswer1" name="skillsTypesAnswer" value="Mindfulness, Distress Tolerance, Emotion Regulation, Interpersonal Effectiveness" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="skillsTypesAnswer1">Mindfulness, Distress Tolerance, Emotion Regulation, Interpersonal Effectiveness</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="skillsTypesAnswer2" name="skillsTypesAnswer" value="Chain Analysis, Emotion Regulation, Reality Acceptance, Mindfulness" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="skillsTypesAnswer2">Chain Analysis, Emotion Regulation, Reality Acceptance, Mindfulness</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="skillsTypesAnswer3" name="skillsTypesAnswer" value="Crisis Surivival, Wise Mind, Interpersonal Effectiveness, Reality Acceptance" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="skillsTypesAnswer3">Crisis Surivival, Wise Mind, Interpersonal Effectiveness, Reality Acceptance</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="skillsTypesAnswer4" name="skillsTypesAnswer" value="Wise Mind, Emotion Regulation, Distress Tolerance, Chain Analysis" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="skillsTypesAnswer4">Wise Mind, Emotion Regulation, Distress Tolerance, Chain Analysis</label>
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
        if (selectedAnswer === "Use interpersonal effectiveness skills") {
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
            <p>Which of the following can you do to problem solve?</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="problemSolveAnswer1" name="problemSolveAnswer" value="Use destructive coping mechanisms" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="problemSolveAnswer1">Use destructive coping mechanisms</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="problemSolveAnswer2" name="problemSolveAnswer" value="Ignore the problem and hope it goes away" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="problemSolveAnswer2">Ignore the problem and hope it goes away</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="problemSolveAnswer3" name="problemSolveAnswer" value="Use interpersonal effectiveness skills" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="problemSolveAnswer3">Use interpersonal effectiveness skills</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="problemSolveAnswer4" name="problemSolveAnswer" value="Get angry and lash out at others" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="problemSolveAnswer4">Get angry and lash out at others</label>
                </div>
            </div>
            {message && <div className={message === "You're on fire!" ? "feedbackGood" : "feedbackBad"}>{message}</div>}
            <div className="submitButton" onClick={handleSubmit}>
                Check!
            </div>
        </>
    )
}

function Slide5({setCorrectAnswer}){
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (selectedAnswer === "Use emotional regulation skills") {
            setMessage("Perfect!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    }

    return(
        <>
            <h3 className="slideHeading">Question 5</h3>
            <p>Which of the following can you do to feel better about a problem?</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="feelBetterAnswer1" name="feelBetterAnswer" value="Use emotional regulation skills" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="feelBetterAnswer1">Use emotional regulation skills</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="feelBetterAnswer2" name="feelBetterAnswer" value="Judge yourself for not being able to solve the problem" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="feelBetterAnswer2">Judge yourself for not being able to solve the problem</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="feelBetterAnswer3" name="feelBetterAnswer" value="Shove the problem to the back of your mind and refuse to think about it" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="feelBetterAnswer3">Shove the problem to the back of your mind and refuse to think about it</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="feelBetterAnswer4" name="feelBetterAnswer" value="Abuse substances to temporarily numb the pain" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="feelBetterAnswer4">Abuse substances to temporarily numb the pain</label>
                </div>
            </div>
            {message && <div className={message === "Perfect!" ? "feedbackGood" : "feedbackBad"}>{message}</div>}
            <div className="submitButton" onClick={handleSubmit}>
                Check!
            </div>
        </>
    )
}

function Slide6({setCorrectAnswer}){
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (selectedAnswer === "Use distress tolerance and mindfulness skills") {
            setMessage("Excellent!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    }

    return(
        <>
            <h3 className="slideHeading">Question 6</h3>
            <p>Which of the following can you do to help tolerate a problem?</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="tolerateProblemAnswer2" name="tolerateProblemAnswer" value="Panic" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="tolerateProblemAnswer2">Panic</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="tolerateProblemAnswer3" name="tolerateProblemAnswer" value="Catastrophize" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="tolerateProblemAnswer3">Catastrophize</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="tolerateProblemAnswer4" name="tolerateProblemAnswer" value="Focus only on the problem and how miserable it's making you feel" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="tolerateProblemAnswer4">Focus only on the problem and how miserable it&apos;s making you feel</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="tolerateProblemAnswer1" name="tolerateProblemAnswer" value="Use distress tolerance and mindfulness skills" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="tolerateProblemAnswer1">Use distress tolerance and mindfulness skills</label>
                </div>
            </div>
            {message && <div className={message === "Excellent!" ? "feedbackGood" : "feedbackBad"}>{message}</div>}
            <div className="submitButton" onClick={handleSubmit}>
                Check!
            </div>
        </>
    )
}

function Slide7({setCorrectAnswer}){
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (selectedAnswer === "Do nothing or make things worse") {
            setMessage("Hooray!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    }

    return(
        <>
            <h3 className="slideHeading">Question 7</h3>
            <p>Which of the following can you do to stay miserable?</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="stayMiserableAnswer1" name="stayMiserableAnswer" value="Use mindfulness skills" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="stayMiserableAnswer1">Use mindfulness skills</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="stayMiserableAnswer4" name="stayMiserableAnswer" value="Do nothing or make things worse" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="stayMiserableAnswer4">Do nothing or make things worse</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="stayMiserableAnswer2" name="stayMiserableAnswer" value="Use distress tolerance skills" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="stayMiserableAnswer2">Use distress tolerance skills</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="stayMiserableAnswer3" name="stayMiserableAnswer" value="Use emotion regulation skills" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="stayMiserableAnswer3">Use emotion regulation skills</label>
                </div>
            </div>
            {message && <div className={message === "Hooray!" ? "feedbackGood" : "feedbackBad"}>{message}</div>}
            <div className="submitButton" onClick={handleSubmit}>
                Check!
            </div>
        </>
    )
}

function Slide8(){
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
            <p>You passed the first module for orientation! You may now access the skills for &quot;Orientation&quot; in the skills practice page!</p>
        </>
    )
}