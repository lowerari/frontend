import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";

export default function AnalyzingBehaviorLesson2Practice({ setAnalyzingBehaviorLesson2PracticeIsOpen, setAnalyzingBehaviorLesson2QuizIsActive }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [formData, setFormData] = useState([
        {},
        {},
        {},
        {},
        {},
        {},
    ]);

    const slides = [
        slide1,
        slide2,
        slide3,
        slide4,
        slide5,
        slide6,
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
                analyzing_behavior_lesson_2_quiz : true
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
                        <h5 className="heading">Missing-Links Analysis: Practice</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setAnalyzingBehaviorLesson2PracticeIsOpen(false)}>
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
                                setAnalyzingBehaviorLesson2PracticeIsOpen(false);
                                setAnalyzingBehaviorLesson2QuizIsActive(true);
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

function slide1() {
    return (
        <div>
            <h3 className="slideHeading">Instructions</h3>
            <p>For each question in the missing-links analysis, someone has answered &quot;no&quot; and given a problem that got in the way. Come up with as many possible solutions as you can to their problems. The more potential solutions, the better!</p>
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
            <h3 className="slideHeading">Did you know what behavior was needed or expected?</h3>
            <p><span className="bold">Answer:</span> NO.</p>
            <p><span className="bold">Reason:</span> I was not paying attention to the instructions.</p>
            
            <div className="freeAnswerQuestion">
                <p><span className="bold">What solutions can you come up with to solve this problem?:</span></p>
                <textarea 
                    name="missingLinksPractice1" 
                    id="missingLinksPractice1" 
                    placeholder="Example: I will work on paying more attention."
                    value={formData.missingLinksPractice1}
                    onChange={handleChange}
                ></textarea>
            </div>
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
            <h3 className="slideHeading">Were you willing to do the needed or expected behavior?</h3>
            
            <p><span className="bold">Answer:</span> NO.</p>
            <p><span className="bold">Reason:</span> I felt demoralized and did not want to do it.</p>
            
            <div className="freeAnswerQuestion">
                <p><span className="bold">What solutions can you come up with to solve this problem?:</span></p>
                <textarea 
                    name="missingLinksPractice2" 
                    id="missingLinksPractice2" 
                    placeholder="Example: I can try practicing opposite action."
                    value={formData.missingLinksPractice2}
                    onChange={handleChange}
                ></textarea>
            </div>
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
            <h3 className="slideHeading">Did the thought of doing the needed or expected behavior ever enter your mind?</h3>
            
            <p><span className="bold">Answer:</span> NO.</p>
            
            <div className="freeAnswerQuestion">
                <p><span className="bold">What solutions can you come up with to solve this problem?:</span></p>
                <textarea 
                    name="missingLinksPractice3" 
                    id="missingLinksPractice3" 
                    placeholder="Example: I can write a reminder on my calendar."
                    value={formData.missingLinksPractice3}
                    onChange={handleChange}
                ></textarea>
            </div>
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
            <h3 className="slideHeading">What got in the way of doing the needed or expected behavior right away?</h3>

            <p><span className="bold">Reason:</span> I kept procrastinating.</p>
            
            <div className="freeAnswerQuestion">
                <p><span className="bold">What solutions can you come up with to solve this problem?:</span></p>
                <textarea 
                    name="missingLinksPractice3" 
                    id="missingLinksPractice3" 
                    placeholder="Example: I can give myself a reward for doing what is expected."
                    value={formData.missingLinksPractice3}
                    onChange={handleChange}
                ></textarea>
            </div>
        </div>
    )
}

function slide6(){
    return(
        <div>
            <h3 className="slideHeading">Finish!</h3>
            <p>Great job! Now that you&apos;ve gotten some practice doing missing-links analysis, you&apos;re ready to test your knowledge with a quiz!</p>
            <br />
            <p>Don&apos;t worry if coming up with solutions to problems seems challenging right now; as you go through skills training, you&apos;ll discover more and more potential ways to problem solve.</p>
        </div>
    )
}