import React, { useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import confetti from "canvas-confetti";
import axios from "axios";

export default function AnalyzingBehaviorLesson1Quiz({ setAnalyzingBehaviorLesson1QuizIsOpen, setAnalyzingBehaviorLesson2IsActive }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(false);
    

    const slides = [
        Slide1,
        Slide2,
        Slide3,
        Slide4,
        Slide5,
        Slide6
    ]

    const handleUpdateCourseProgress = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.patch('http://127.0.0.1:8000/update_course', {
                analyzing_behavior_lesson_2 : true
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
                    <h5 className="heading">Chain Analysis: Quiz</h5>
                </div>
                <button className="closeBtn" onClick={() => setAnalyzingBehaviorLesson1QuizIsOpen(false)}>
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
                            setAnalyzingBehaviorLesson1QuizIsOpen(false); 
                            setCorrectAnswer(false);
                            setAnalyzingBehaviorLesson2IsActive(true);
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
        "To figure out what the problem is": false,
        "To figure out how to change another person's behavior": false,
        "To figure out what prompts the problem": false,
        "To figure out what is interfering with the resolution of the problem": false,
    });
    const [message, setMessage] = useState('');

    const handleCheckboxChange = (answer) => {
        setSelectedAnswers(prev => ({ ...prev, [answer]: !prev[answer] }));
    };

    const handleSubmit = () => {
        if (selectedAnswers["To figure out what the problem is"] && selectedAnswers["To figure out what prompts the problem"] && !selectedAnswers["To figure out how to change another person's behavior"] && selectedAnswers["To figure out what is interfering with the resolution of the problem"]) {
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
            <p>What is the purpose of doing chain analysis?</p>
            
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
        if (selectedAnswer === "It is an invaluable tool for assessing behavior.") {
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
            <p>Why is chain analysis important?</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="chainAnalysisImportantAnswer1" name="chainAnalysisImportantAnswer" value="It is a quick way to solve your problems." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="chainAnalysisImportantAnswer1">It is a quick way to solve your problems.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="chainAnalysisImportantAnswer2" name="chainAnalysisImportantAnswer" value="It is an invaluable tool for assessing behavior." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="chainAnalysisImportantAnswer2">It is an invaluable tool for assessing behavior.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="chainAnalysisImportantAnswer3" name="chainAnalysisImportantAnswer" value="It teaches you what effective behavior to use to solve a problem." onChange={(e) => setSelectedAnswer(e.target.value)}/>
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="chainAnalysisImportantAnswer3">It teaches you what effective behavior to use to solve a problem.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="chainAnalysisImportantAnswer4" name="chainAnalysisImportantAnswer" value="It's not important." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="chainAnalysisImportantAnswer4">It&apos;s not important.</label>
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
        if (selectedAnswer === "Identify the problem behavior.") {
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
            <p>What is the first step in conducting a chain analysis?</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="firstStepAnswer1" name="firstStepAnswer" value="Identify the consequences of the behavior." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="firstStepAnswer1">Identify the consequences of the behavior.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="firstStepAnswer2" name="firstStepAnswer" value="List the chain of events that led to the problem behavior." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="firstStepAnswer2">List the chain of events that led to the problem behavior.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="firstStepAnswer3" name="firstStepAnswer" value="Repair the negative consequences of the problem behavior." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="firstStepAnswer3">Repair the negative consequences of the problem behavior.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="firstStepAnswer4" name="firstStepAnswer" value="Identify the problem behavior." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="firstStepAnswer4">Identify the problem behavior.</label>
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
        if (selectedAnswer === "I came home from work and my boyfriend was on the couch asleep.") {
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
            <p>Which of the following is an example of a prompting event?</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="promptingEventAnswer1" name="promptingEventAnswer" value="I yelled at my partner and stormed out of the room." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="promptingEventAnswer1">I yelled at my partner and stormed out of the room.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="promptingEventAnswer2" name="promptingEventAnswer" value="I can check the facts in my relationship." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="promptingEventAnswer2">I can check the facts in my relationship.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="promptingEventAnswer3" name="promptingEventAnswer" value="I came home from work and my boyfriend was on the couch asleep." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="promptingEventAnswer3">I came home from work and my boyfriend was on the couch asleep.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="promptingEventAnswer4" name="promptingEventAnswer" value="He was very hurt when I assumed that he did not love me." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="promptingEventAnswer4">He was very hurt when I assumed that he did not love me.</label>
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
        if (selectedAnswer === "You may otherwise end up not repairing what was damaged.") {
            setMessage("Perfect!");
            setCorrectAnswer(true);
        } else {
            setMessage("Try again!");
            setCorrectAnswer(false);
        }
    }

    return(
        <>
            <h3 className="slideHeading">Question 4</h3>
            <p>Why is it important to figure out what has actually been harmed when repairing negative consequences?</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="repairingConsequencesAnswer1" name="repairingConsequencesAnswer" value="You may otherwise end up not repairing what was damaged." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="repairingConsequencesAnswer1">You may otherwise end up not repairing what was damaged.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="repairingConsequencesAnswer2" name="repairingConsequencesAnswer" value="You might buy the wrong kind of flowers." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="repairingConsequencesAnswer2">You might buy the wrong kind of flowers.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="repairingConsequencesAnswer3" name="repairingConsequencesAnswer" value="It's not important; the only thing that matters is saying sorry." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="repairingConsequencesAnswer3">It&apos;s not important; the only thing that matters is saying sorry.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="repairingConsequencesAnswer4" name="repairingConsequencesAnswer" value="You have to tell the other person involved how they should apologize to you." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="repairingConsequencesAnswer4">You have to tell the other person involved how they should apologize to you.</label>
                </div>
            </div>
            {message && <div className={message === "Perfect!" ? "feedbackGood" : "feedbackBad"}>{message}</div>}
            <div className="submitButton" onClick={handleSubmit}>
                Check!
            </div>
        </>
    )
}

function Slide6(){
    useEffect(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }, []);

    return(
        <div>
            <h3 className="slideHeading">Congratulations!</h3>
            <p>You&apos;ve completed the quiz! Now you&apos;re ready to practice chain analysis for yourself. Head over to the skill practice area to find the chain analysis worksheet!</p>
        </div>
    )
}