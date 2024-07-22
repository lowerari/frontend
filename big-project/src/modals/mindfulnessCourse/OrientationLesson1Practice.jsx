import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

export default function OrientationLesson1Practice({ setOrientationLesson1PracticeIsOpen, setOrientationLesson1QuizIsActive }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [formData, setFormData] = useState([
        {},
        {},
        {},
    ]); // Array of objects to store form data for each slide (1 object per slide)

    const slides = [
        slide1,
        slide2,
        slide3,
    ]

    const handleFormDataChange = (slideIndex, fieldName, value) => {
        const newFormData = [...formData]; //Create an array to store the new form data without affecting the original state directly ('shallow copy').
        if (!newFormData[slideIndex]){
            newFormData[slideIndex] = {};
        } // If the object for the current slide doesn't exist yet, create it to prevent errors.
        newFormData[slideIndex][fieldName] = value; // Updates the form data for a specific field on a specific slide.
        setFormData(newFormData); // Update the form data state with the new array.
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
                        <h5 className="heading">Goals of Skills Training: Practice</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setOrientationLesson1PracticeIsOpen(false)}>
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
                                setOrientationLesson1PracticeIsOpen(false);
                                setOrientationLesson1QuizIsActive(true);
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
    const handlechange = (event) => {
        const { name, value, type, checked } = event.target;
        onFormDataChange(name, type === "checkbox" ? checked : value); // If the input is a checkbox, use the 'checked' property to determine the value, otherwise use the 'value' property.
    }

    return (
        <div>
            <h3 className="slideHeading">Behaviors to Decrease</h3>
            <p>Check the behaviors that you personally would like to decrease with skills training:</p>
            <div className="checkboxes">
                <label className="checkboxContainer" htmlFor="mindlessnessCheckbox">
                    <input 
                        type="checkbox" 
                        name="mindlessnessCheckbox" 
                        id="mindlessnessCheckbox" 
                        checked={formData.mindlessnessCheckbox || false}
                        onChange={handlechange}
                    />
                    <span className="checkmark"></span>
                    <p>
                    Mindlessness; emptiness; being out of touch with self and others; judgmentalness.
                    </p>
                </label>
        
                <label className="checkboxContainer" htmlFor="interpersonalConflictCheckbox">
                    <input 
                        type="checkbox" 
                        name="interpersonalConflictCheckbox" 
                        id="interpersonalConflictCheckbox"
                        checked={formData.interpersonalConflictCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Interpersonal conflict and stress; loneliness.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="absenceFlexibility">
                    <input 
                        type="checkbox" 
                        name="absenceFlexibility" 
                        id="absenceFlexibility"
                        checked={formData.absenceFlexibility || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Absence of flexibility; difficulties with change.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="extremeEmotionsCheckbox">
                    <input 
                        type="checkbox" 
                        name="extremeEmotionsCheckbox" 
                        id="extremeEmotionsCheckbox" 
                        checked={formData.extremeEmotionsCheckbox || false}
                        onChange={handlechange}
                    />
                    <span className="checkmark"></span>
                    <p>
                    Up-and-down and extreme emotions; mood-dependent behavior; difficulties in regulating emotions.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="impulsiveBehaviorCheckbox">
                    <input 
                        type="checkbox" 
                        name="impulsiveBehaviorCheckbox" 
                        id="impulsiveBehaviorCheckbox"
                        checked={formData.impulsiveBehaviorCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                    Impulsive behaviors; acting without thinking; difficulties accepting reality as it is; willfulness; addiction.
                    </p>
                </label>               
            </div>
            <div className="freeAnswerQuestion">
                <p>Are there behaviors you don&apos;t have trouble with? If so, what are they?:</p>
                <input 
                    type="text"
                    name="behaviorsNoTrouble"
                    value={formData.behaviorsNoTrouble || ""}
                    onChange={handlechange} 
                />
            </div>
            <div className="freeAnswerQuestion">
                <p>What behaviors do you think are the most important to decrease?:</p>
                <input 
                    type="text"
                    name="importantBehaviors"
                    value={formData.importantBehaviors || ""}
                    onChange={handlechange} 
                />
            </div>
        </div>
    )
}

function slide2({ formData, onFormDataChange }) {
    const handlechange = (event) => {
        const { name, value, type, checked } = event.target;
        onFormDataChange(name, type === "checkbox" ? checked : value);
    }

    return (
        <div>
            <h3 className="slideHeading">Skills to Increase</h3>
            <p>Check the skills that you personally want to increase:</p>
            <div className="checkboxes">
                <label className="checkboxContainer" htmlFor="mindfulnessGoalCheckbox">
                    <input 
                        type="checkbox" 
                        name="mindfulnessGoalCheckbox" 
                        id="mindfulnessGoalCheckbox" 
                        checked={formData.mindfulnessGoalCheckbox || false}
                        onChange={handlechange}
                    />
                    <span className="checkmark"></span>
                    <p>
                        Mindfulness skills
                    </p>
                </label>
        
                <label className="checkboxContainer" htmlFor="interpersonalGoalCheckbox">
                    <input 
                        type="checkbox" 
                        name="interpersonalGoalCheckbox" 
                        id="interpersonalGoalCheckbox"
                        checked={formData.interpersonalGoalCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                        Interpersonal effectiveness skills
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="emotionGoalCheckbox">
                    <input 
                        type="checkbox" 
                        name="emotionGoalCheckbox" 
                        id="emotionGoalCheckbox"
                        checked={formData.emotionGoalCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                        Emotion regulation skills
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="distressGoalCheckbox">
                    <input 
                        type="checkbox" 
                        name="distressGoalCheckbox" 
                        id="distressGoalCheckbox"
                        checked={formData.distressGoalCheckbox || false}
                        onChange={handlechange} 
                    />
                    <span className="checkmark"></span>
                    <p>
                        Distress tolerance skills
                    </p>
                </label>              
            </div>
            <div className="freeAnswerQuestion">
                <p>What are your goals for the skills you checked?:</p>
                <textarea 
                    name="skillsGoals" 
                    id="skillsGoals" 
                    placeholder="Example: I want to work on reality acceptance."
                    value={formData.skillsGoals || ""}
                    onChange={handlechange}
                ></textarea>
            </div>
        </div>
    )
}

function slide3() {
    return (
        <div>
            <h3 className="slideHeading">Congratulations!</h3>
            <p>You&apos;re now ready for the quiz!</p>
        </div>
    )
}