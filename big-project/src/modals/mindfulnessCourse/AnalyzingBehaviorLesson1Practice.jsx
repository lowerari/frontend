import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";

export default function AnalyzingBehaviorLesson1Practice({ setAnalyzingBehaviorLesson1PracticeIsOpen, setAnalyzingBehaviorLesson1QuizIsActive }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [formData, setFormData] = useState([
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
    ]);

    const slides = [
        slide1,
        slide2,
        slide3,
        slide4,
        slide5,
        slide6,
        slide7,
        slide8,
        slide9
    ]

    const handleFormDataChange = (slideIndex, fieldName, value) => {
        const newFormData = [...formData];
        if (!newFormData[slideIndex]){
            newFormData[slideIndex] = {};
        }
        newFormData[slideIndex][fieldName] = value;
        setFormData(newFormData);
    }

    const handleUpdateCourseProgress = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.patch('http://127.0.0.1:8000/update_course', {
                analyzing_behavior_lesson_1_quiz : true
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

    const goToNextSlide = () => {
        setCurrentSlide(() => {
            if(currentSlide < slides.length - 1) {
                return currentSlide + 1;
            } else {
                return currentSlide;
            }
        });
    };

    const goToPreviousSlide = () => {
        setCurrentSlide(() => {
            if(currentSlide > 0) {
                return currentSlide - 1;
            } else {
                return currentSlide;
            }
        });
    };

    return(
        <>
            <div className="centered">
                <div className="modal">
                <div className="modalHeader">
                        <h5 className="heading">Chain Link Analysis: Practice</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setAnalyzingBehaviorLesson1PracticeIsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }}/>
                    </button>

                    <div className="modalContent">
                        <div className="progressBar">
                            <div className="progressFill" style={{ width: `${(currentSlide + 1) * (100 / slides.length)}%` }}></div>
                        </div>

                        <div className="slide">
                            {React.createElement(slides[currentSlide], {
                                formData: formData[currentSlide] || {},
                                onFormDataChange: (fieldName, value) => handleFormDataChange(currentSlide, fieldName, value)
                            })}
                        </div>

                        <div className="slideNav">
                            {currentSlide !== 0 && <button className="prevButton" onClick={goToPreviousSlide}>Previous</button>}
                            {currentSlide === 0 && <div className="invisoDiv"></div>}
                            {currentSlide === slides.length - 1 && <button className="nextButton" onClick={() => {
                                setAnalyzingBehaviorLesson1PracticeIsOpen(false);
                                setAnalyzingBehaviorLesson1QuizIsActive(true);
                                handleUpdateCourseProgress();
                                }}>Finish!</button>}
                            {currentSlide !== slides.length - 1 && <button className="nextButton" onClick={goToNextSlide}>Next</button>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 

function slide1({ formData, onFormDataChange }) {
    const handleChange = (event) => {
        const { id, value, type, checked } = event.target;
        onFormDataChange(id, type === "checkbox" ? checked : value);
    }

    return (
        <div>
            <h3 className="slideHeading">Step 1: The Problem Behavior</h3>
            <p>Let&apos;s practice chain analysis by doing one on an imaginary scenario: Imagine you got into a fight with your partner, and you did not handle the confrontation very well. Complete each step with your own answers. Don&apos;t focus on trying to do the analysis perfectly! The point of the exercise is to get practice doing chain analysis, so that you feel more comfortable doing it for yourself later. The more you practice, the easier it will become.</p>
            <hr />
            <div className="freeAnswerQuestion">
                <p><span className="bold">What exactly was the problem behavior?:</span></p>
                <textarea 
                    name="problemBehaviorPractice" 
                    id="problemBehaviorPractice" 
                    placeholder="Example: I yelled at my partner and stormed out of the room, slamming the door."
                    onChange={handleChange}
                    value={formData.problemBehaviorPractice}
                ></textarea>
            </div>
            <br />
            <p>Tips:</p>
            <ul>
                <li>Be as specific and detailed as possible.</li>
                <li>Identify what you did, said, thought, or felt, and what you did NOT do.</li>
                <li>Describe the intensity of the behavior and other aspects that are important.</li>
                <li>If the behavior is something you did NOT do, ask yourself whether: you did not know you needed to do it; you forgot it and later it never came to mind; you put it off when you did think of it; you refused to do it; or something else.</li>
            </ul>
        </div>
    )
}

function slide2({ formData, onFormDataChange }) {
    const handleChange = (event) => {
        const { id, value, type, checked } = event.target;
        onFormDataChange(id, type === "checkbox" ? checked : value);
    }

    return (
        <div>
            <h3 className="slideHeading">Step 2: The Prompting Event</h3>
            
            <div className="freeAnswerQuestion">
                <p><span className="bold">What event in the environment started the chain of events?:</span></p>
                <textarea 
                    name="propmtingEventPractice" 
                    id="propmtingEventPractice" 
                    placeholder="Example: I came home from work and my boyfriend was on the couch asleep."
                    value={formData.propmtingEventPractice}
                    onChange={handleChange}
                ></textarea>
            </div>
            <br />
            <p>Tips:</p>
            <ul>
                <li>Always begin with some event in your environment, even if it doesn&apos;t seem like it &quot;caused&quot; the problem behavior.</li>
                <li>Ask yourself: what exact event precipitated the start of the chain reaction?</li>
                <li>When did the sequence of events that led to the problem behavior begin?</li>
                <li>What was going on right before the thought of or impulse for the problem behavior occurred?</li>
                <li>What were you doing/thinking/feeling/imagining at that time?</li>
                <li>Why did the problem behavior happen on that day instead of the day before?</li>
            </ul>
        </div>
    )
}

function slide3({ formData, onFormDataChange }) {
    const handleChange = (event) => {
        const { id, value, type, checked } = event.target;
        onFormDataChange(id, type === "checkbox" ? checked : value);
    }

    return (
        <div>
            <h3 className="slideHeading">Step 3: What Made Me Vulnerable</h3>
            
            <div className="freeAnswerQuestion">
                <p><span className="bold">What were the vulnerability factors for that day?:</span></p>
                <textarea 
                    className="biggerTextArea" 
                    name="madeVulnerablePractice" 
                    id="madeVulnerablePractice" 
                    placeholder="Example: The night before he had come home really late and was tired. He and I had not gone out together after work in a really long time and I got him to agree to go out the next night. I was really looking forward to going out when I got home."
                    value={formData.madeVulnerablePractice}
                    onChange={handleChange}
                ></textarea>
            </div>
            <br />
            <p>Areas to examine:</p>
            <ul>
                <li>Physical illness; hunger/tiredness; injury</li>
                <li>Use of drugs or alcohol; misuse of prescription drugs</li>
                <li>Stressful events in the environment</li>
                <li>Strong emotions, such as sadness, anger, fear, loneliness, etc.</li>
                <li>Previous behaviors of your own that you found stressful coming into your mind</li>
            </ul>
        </div>
    )
}

function slide4({ formData, onFormDataChange }) {
    const handleChange = (event) => {
        const { id, value, type, checked } = event.target;
        onFormDataChange(id, type === "checkbox" ? checked : value);
    }

    return(
        <div>
            <h3 className="slideHeading">Step 4: The Specific Behaviors and Events that Were Links in the Chain</h3>
            
            <div className="freeAnswerQuestion">
                <p><span className="bold">What was the chain of events, link by link, that led from the prompting event to the problem behavior?:</span></p>
                <textarea 
                    className="biggerTextArea" 
                    name="specificBehaviorsPractice" 
                    id="specificBehaviorsPractice" 
                    placeholder="Example: 1st: When I saw him asleep I thought, “He is sleeping again. We’re not going out.” 2nd: I thought, “He does not love me.” 3rd: I got furious right away. 4th: I wanted to hurt him like he hurt me."
                    value={formData.specificBehaviorsPractice}
                    onChange={handleChange}
                ></textarea>
            </div>
            <br />
            <p>Links in the chain could be:</p>
            <ul>
                <li>Actions or things you do</li>
                <li>Body sensations or feelings</li>
                <li>Cognitions (beliefs, expectations, or thoughts)</li>
                <li>Events in the environment or things others do</li>
                <li>Feelings and emotions that you experience</li>
            </ul>
            <p>For each link, ask if there is a smaller link you could describe. Be very specific; as if you are writing a script for a play.</p>
        </div>
    )
}

function slide5({ formData, onFormDataChange }) {
    const handleChange = (event) => {
        const { id, value, type, checked } = event.target;
        onFormDataChange(id, type === "checkbox" ? checked : value);
    }

    return(
        <div>
            <h3 className="slideHeading">Step 5: The Consequences of the Behavior— The Harm My Behavior Caused</h3>
            
            <div className="freeAnswerQuestion">
                <p><span className="bold">What were the consequences of the behavior in the environment?:</span></p>
                <textarea 
                    className="biggerTextArea" 
                    name="consequencesPractice" 
                    id="consequencesPractice" 
                    placeholder="Example: In the environment: He was very hurt that I assumed he did not love me. For myself: I felt guilty. I realized that I had ruined the evening for both of us."
                    value={formData.consequencesPractice}
                    onChange={handleChange}
                ></textarea>
            </div>
            <br />
            <p>Ask yourself:</p>
            <ul>
                <li>How did other people react immediately and later?</li>
                <li>How did you feel immediately following this behavior?</li>
                <li>How did you feel later?</li>
                <li>What effect did the behavior have on you and your environment?</li>
            </ul>
        </div>
    )
}

function slide6({ formData, onFormDataChange }) {
    const handleChange = (event) => {
        const { id, value, type, checked } = event.target;
        onFormDataChange(id, type === "checkbox" ? checked : value);
    }

    return(
        <div>
            <h3 className="slideHeading">Step 6: Changing the Problem Behavior</h3>
            <div className="freeAnswerQuestion">
                <p><span className="bold">Identify skillful behaviors to replace problem links in the chain, and so to decrease the
                probability of this behavior’s happening again:</span></p>
                <textarea 
                    className="biggerTextArea" 
                    name="changingBehaviorPractice" 
                    id="changingBehaviorPractice" 
                    placeholder="Example: I can check the facts next time, since when I finally did in this situation, I found out he had taken a nap so that we would be able to have a really good time together."
                    value={formData.changingBehaviorPractice}
                    onChange={handleChange}
                ></textarea>
            </div>
            <br />
            <p>Tips:</p>
            <ul>
                <li>Go back to the chain of behaviors following the prompting event. Find each link where, if you had done something different, you would have avoided the problem behavior.</li>
                <li>What could you have done differently at each link in the chain of events to avoid the problem behavior? What coping behaviors or skillful behaviors could you have used?</li>
            </ul>
        </div>
    )
}

function slide7({ formData, onFormDataChange }) {
    const handleChange = (event) => {
        const { id, value, type, checked } = event.target;
        onFormDataChange(id, type === "checkbox" ? checked : value);
    }

    return(
        <div>
            <h3 className="slideHeading">Step 7: Prevention Plans</h3>
            <div className="freeAnswerQuestion">
                <p><span className="bold">Develop prevention plans to reduce vulnerability to prompting events and to starting down
                the chain:</span></p>
                <textarea 
                    className="biggerTextArea" 
                    name="preventionPlanPractice" 
                    id="preventionPlanPractice" 
                    placeholder="Example: I can check the facts in my relationship with my partner when I start thinking he does not love me."
                    value={formData.preventionPlanPractice}
                    onChange={handleChange}
                ></textarea>
            </div>
        </div>
    )
}

function slide8({ formData, onFormDataChange }) {
    const handleChange = (event) => {
        const { id, value, type, checked } = event.target;
        onFormDataChange(id, type === "checkbox" ? checked : value);
    }

    return(
        <div>
            <h3 className="slideHeading">Step 8: Plans to Repair, Correct, and Overcorrect the Harm</h3>
            <div className="freeAnswerQuestion">
                <p><span className="bold">Repair the negative consequences of the problem behavior for the environment and for
                oneself:</span></p>
                <textarea 
                    className="biggerTextArea" 
                    name="repairingConsequencesPractice" 
                    id="repairingConsequencesPractice" 
                    placeholder="Example: I will make every effort to treat my partner as if he constantly loves me. I will also apologize to him and to make up our evening out that I ruined, I will plan an evening together for both of us that he will really like."
                    value={formData.repairingConsequencesPractice}
                    onChange={handleChange}
                ></textarea>
            </div>
            <br />
            <p>Tips:</p>
            <ul>
                <li>Analyze: What did you really harm? What was the negative consequence you can repair?</li>
                <li>Look at the harm or distress you actually caused others, and the harm or distress you caused yourself. Repair what you damaged.</li>
            </ul>
        </div>
    )
}

function slide9(){
    return(
        <div>
            <h3 className="slideHeading">Great Work!</h3>
            <p>Great job doing your first chain analysis! If you found it a bit difficult, don&apos;t worry; as you go through these lessons you&apos;ll find it easier and easier to analyze your behavior and come up with solutions to prevent and repair harm. Now, let&apos;s do a quick quiz!</p>
        </div>
    )
}