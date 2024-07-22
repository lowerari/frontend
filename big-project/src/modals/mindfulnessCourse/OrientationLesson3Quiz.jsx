import React, { useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import confetti from "canvas-confetti";

export default function OrientationLesson3Quiz({ setOrientationLesson3QuizIsOpen, setAnalyzingBehaviorLesson1IsActive }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(false);
    

    const slides = [
        Slide1,
        Slide2,
        Slide3,
        Slide4,
        Slide5,
        Slide6,
    ]

    return(
        <div className="centered">
            <div className="modal">
                <div className="modalHeader">
                    <h5 className="heading">Biosocial Theory: Quiz</h5>
                </div>
                <button className="closeBtn" onClick={() => setOrientationLesson3QuizIsOpen(false)}>
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
                            setOrientationLesson3QuizIsOpen(false); 
                            setCorrectAnswer(false);
                        }}>Finish!</button>}
                        {currentSlide !== slides.length - 1 && <button className={correctAnswer ? "nextButton" : "nextButton bad"} onClick={() => {
                            setCurrentSlide(currentSlide + 1);
                            setCorrectAnswer(false);
                            setAnalyzingBehaviorLesson1IsActive(true);
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
        if (selectedAnswer === "Has always predictable emotions with clear explanations.") {
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
            <p>Which of the following is NOT a characteristic of someone who is emotionally vulnerable?</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="emotionalVulnerabilityAnswer1" name="emotionalVulnerabilityAnswer" value="Is more sensitive to emotional stimuli." onChange={(e) => setSelectedAnswer(e.target.value)}/>
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="emotionalVulnerabilityAnswer1">Is more sensitive to emotional stimuli.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="emotionalVulnerabilityAnswer2" name="emotionalVulnerabilityAnswer" value="Has always predictable emotions with clear explanations." onChange={(e) => setSelectedAnswer(e.target.value)}/>
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="emotionalVulnerabilityAnswer2">Has always predictable emotions with clear explanations.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="emotionalVulnerabilityAnswer3" name="emotionalVulnerabilityAnswer" value="Experiences emotions more often than others." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="emotionalVulnerabilityAnswer3">Experiences emotions more often than others.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="emotionalVulnerabilityAnswer4" name="emotionalVulnerabilityAnswer" value="Has long-lasting emotions." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="emotionalVulnerabilityAnswer3">Has long-lasting emotions.</label>
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
        if (selectedAnswer === "Are easily able to organize their behavior to achieve their goals.") {
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
            <p>Which of the following is NOT a characteristic of impulsive individuals?</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="impulsivityAnswer1" name="impulsivityAnswer" value="Are easily able to organize their behavior to achieve their goals." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="impulsivityAnswer1">Are easily able to organize their behavior to achieve their goals.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="impulsivityAnswer2" name="impulsivityAnswer" value="Find it hard to inhibit behaviors." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="impulsivityAnswer2">Find it hard to inhibit behaviors.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="impulsivityAnswer3" name="impulsivityAnswer" value="Have behaviors that seem to come out of nowhere." onChange={(e) => setSelectedAnswer(e.target.value)}/>
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="impulsivityAnswer3">Have behaviors that seem to come out of nowhere.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="impulsivityAnswer4" name="impulsivityAnswer" value="Have trouble controlling behaviors linked to their moods." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="impulsivityAnswer4">Have trouble controlling behaviors linked to their moods.</label>
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
        if (selectedAnswer === 'Telling a child: "Stop being such a crybaby!"') {
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
            <p>Which of these is an example of an invalidating environment?</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="invalidatingEnvironmentAnswer1" name="invalidatingEnvironmentAnswer" value="Responding to a child's cries for help in a comforting manner." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="invalidatingEnvironmentAnswer1">Responding to a child's cries for help in a comforting manner.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="invalidatingEnvironmentAnswer2" name="invalidatingEnvironmentAnswer" value="Helping someone when they are having difficulties." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="invalidatingEnvironmentAnswer2">Helping someone when they are having difficulties.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="invalidatingEnvironmentAnswer3" name="invalidatingEnvironmentAnswer" value="Understanding that others may feel differently than you do." onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="invalidatingEnvironmentAnswer3">Understanding that others may feel differently than you do.</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="invalidatingEnvironmentAnswer4" name="invalidatingEnvironmentAnswer" value='Telling a child: "Stop being such a crybaby!"' onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="invalidatingEnvironmentAnswer4">Telling a child: "Stop being such a crybaby!"</label>
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
        if (selectedAnswer === "False") {
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
            <p>True or false: Only children can suffer the effects of living in an ineffective social environment.</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="ineffectiveEnvironmentAnswer1" name="ineffectiveEnvironmentAnswer" value="True" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="ineffectiveEnvironmentAnswer1">True</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="ineffectiveEnvironmentAnswer2" name="ineffectiveEnvironmentAnswer" value="False" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="ineffectiveEnvironmentAnswer2">False</label>
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
        if (selectedAnswer === "True") {
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
            <p>True or false: As invalidation escalates, emotions escalate, which causes invalidation to escalate further, and so on.</p>
            <div className="answers">
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="transactionAnswer1" name="transactionAnswer" value="True" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="transactionAnswer1">True</label>
                </div>
                <div className="answer">
                    <div className="radio">
                        <input type="radio" id="transactionAnswer2" name="transactionAnswer" value="False" onChange={(e) => setSelectedAnswer(e.target.value)} />
                        <span className="radioButton"></span>
                    </div>
                    <label htmlFor="transactionAnswer2">False</label>
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
        <>
            <h3 className="slideHeading">Congratulations!</h3>
            <p>Woohoo! You've completed orientation! Are you ready to start learning the skills you need to make your life better? Let's get started!</p>
        </>
    )
}