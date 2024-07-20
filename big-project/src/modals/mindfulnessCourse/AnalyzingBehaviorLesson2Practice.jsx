import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

export default function AnalyzingBehaviorLesson2Practice({ setAnalyzingBehaviorLesson2PracticeIsOpen, setAnalyzingBehaviorLesson2QuizIsActive }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        slide1,
        slide2,
        slide3,
        slide4,
        slide5,
        slide6,
    ]

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
                            {React.createElement(slides[currentSlide])}
                        </div>

                        <div className="slideNav">
                            {currentSlide !== 0 && <button className="prevButton" onClick={goToPreviousSlide}>Previous</button>}
                            {currentSlide === 0 && <div className="invisoDiv"></div>}
                            {currentSlide === slides.length - 1 && <button className="nextButton" onClick={() => {
                                setAnalyzingBehaviorLesson2PracticeIsOpen(false);
                                setAnalyzingBehaviorLesson2QuizIsActive(true);
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
            <p>For each question in the missing-links analysis, someone has answered "no" and given a problem that got in the way. Come up with as many possible solutions as you can to their problems. The more potential solutions, the better!</p>
        </div>
    )
}

function slide2() {
    return (
        <div>
            <h3 className="slideHeading">Did you know what behavior was needed or expected?</h3>
            <p><span className="bold">Answer:</span> NO.</p>
            <p><span className="bold">Reason:</span> I was not paying attention to the instructions.</p>
            
            <div className="freeAnswerQuestion">
                <p><span className="bold">What solutions can you come up with to solve this problem?:</span></p>
                <textarea name="missingLinksPractice1" id="missingLinksPractice1" placeholder="Example: I will work on paying more attention."></textarea>
            </div>
        </div>
    )
}

function slide3() {
    return (
        <div>
            <h3 className="slideHeading">Were you willing to do the needed or expected behavior?</h3>
            
            <p><span className="bold">Answer:</span> NO.</p>
            <p><span className="bold">Reason:</span> I felt demoralized and did not want to do it.</p>
            
            <div className="freeAnswerQuestion">
                <p><span className="bold">What solutions can you come up with to solve this problem?:</span></p>
                <textarea name="missingLinksPractice2" id="missingLinksPractice2" placeholder="Example: I can try practicing opposite action."></textarea>
            </div>
        </div>
    )
}

function slide4() {
    return(
        <div>
            <h3 className="slideHeading">Did the thought of doing the needed or expected behavior ever enter your mind?</h3>
            
            <p><span className="bold">Answer:</span> NO.</p>
            
            <div className="freeAnswerQuestion">
                <p><span className="bold">What solutions can you come up with to solve this problem?:</span></p>
                <textarea name="missingLinksPractice3" id="missingLinksPractice3" placeholder="Example: I can write a reminder on my calendar."></textarea>
            </div>
        </div>
    )
}

function slide5() {
    return(
        <div>
            <h3 className="slideHeading">What got in the way of doing the needed or expected behavior right away?</h3>

            <p><span className="bold">Reason:</span> I kept procrastinating.</p>
            
            <div className="freeAnswerQuestion">
                <p><span className="bold">What solutions can you come up with to solve this problem?:</span></p>
                <textarea name="missingLinksPractice3" id="missingLinksPractice3" placeholder="Example: I can give myself a reward for doing what is expected."></textarea>
            </div>
        </div>
    )
}

function slide6(){
    return(
        <div>
            <h3 className="slideHeading">Finish!</h3>
            <p>Great job! Now that you've gotten some practice doing missing-links analysis, you're ready to test your knowledge with a quiz!</p>
            <br />
            <p>Don't worry if coming up with solutions to problems seems challenging right now; as you go through skills training, you'll discover more and more potential ways to problem solve.</p>
        </div>
    )
}