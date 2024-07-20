import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { FaBookOpenReader, FaTrophy } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";

export default function AnalyzingBehaviorLesson2({ setAnalyzingBehaviorLesson2IsOpen, setAnalyzingBehaviorLesson2PracticeIsActive }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        slide1,
        slide2,
        slide3,
        slide4,
        slide5,
        slide6,
        slide7
    ];

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
    }

    return(
        <>
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className="heading">Missing-Links Analysis</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setAnalyzingBehaviorLesson2IsOpen(false)}>
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
                                setAnalyzingBehaviorLesson2IsOpen(false);
                                setAnalyzingBehaviorLesson2PracticeIsActive(true);
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
    return(
        <>
            <h3 className="slideHeading">Missing-Links Analysis</h3>
            <p>Now that you know how to use chain analysis, let's look at another method of analyzing behavior: <span className="bold">missing-links analysis.</span></p>
            <br />
            <p>Sometimes the problem is not the presence of problem behavior, but the absence of effective behavior. Analyzing missing links helps us identify what is interfering with effective behaviors that are expected or needed.</p>
        </>
    )
}

function slide2() {
    return(
        <>
            <h3 className="slideHeading">What is Missing-Links Analysis?</h3>
            <p>A “missing-links analysis” is a series of questions to help a person figure out what got in the way of behaving effectively. Its purpose is to show where in the chain of events something happened (or failed to happen) that interfered with effective behavior when it was needed or expected.</p>
            <br />
            <p>Two types of effective behaviors can be missing: <span className="bold">expected behaviors</span> or <span className="bold">needed behaviors.</span></p>
            <br />
            <p><span className="bold">Expected behaviors</span> are ones you have agreed to do (e.g., get to work on time), have been instructed to do (e.g., skills training homework), have planned to do (e.g., clean your room), or have desperately hoped to do (e.g., exercise in the mornings).</p>
            <br />
            <p><span className="bold">Needed behaviors</span> are skillful behaviors that constitute effective responses in a specific situation (e.g., skillful interpersonal behavior to calm down a stressful interaction) or to address specific problems (e.g., getting up on time when your alarm clock is broken).</p>
        </>
    )
}

function slide3() {
    return(
        <>
            <h3 className="slideHeading">When is Missing-Links Analysis Used?</h3>
            <p>Missing-links analysis and problem solving are likely to be sufficient when the problem is not knowing what was expected or needed, unwillingness to do what was expected or needed, or never having the thought enter your mind to do what was needed or expected.</p>
            <br />
            <p>Missing-links analyses together with chain analyses may be useful in figuring out the problem when you know what the effective behavior is but still do not do it. </p>
        </>
    )
}

function slide4() {
    return(
        <>
            <h3 className="slideHeading">Why Bother?</h3>
            <p>A missing-links analysis can be an invaluable tool for assessing situations when effective behaviors are repeatedly missing. As noted in discussing chain analysis, attempts to solve a problem often fail because the problem at hand is not fully understood and assessed.</p>
            <br />
            <p>An advantage of the missing-links analysis is that the questions can usually be asked and answered very rapidly</p>
        </>
    )
}

function slide5() {
    return(
        <>
            <h3 className="slideHeading">How to Do It:</h3>
            <p>Answer the questions below until further questions would not be helpful or don’t make sense. As soon as you get to that point, start problem solving.</p>
            <ol>
                <li>Did you know what effective behavior was needed or expected?</li>
                <li>Were you willing to do the needed or expected effective behavior?</li>
                <li>Did the thought of doing the needed or expected behavior ever enter your mind?</li>
                <li>What got in the way of doing the needed or expected behavior right away?</li>
            </ol>
            <p>For each question you answer "yes" to, move on to the next question (until the end).</p>
            <br />
            <p>If you answer "no" to a question, stop there and ask yourself what got in the way? Then, brainstorm solutions for overcoming that obstacle in the future.</p>
            <div className="thinkAboutIt">
                <h3><FaLightbulb /> Think About It!</h3>
                <p>Think of patterns of effective behaviors that are missing in your life— or, if you cannot yet articulate a pattern, instances when you did not do something that was really important to do.</p>
            </div>
        </>
    )
}

function slide6(){
    return(
        <>
            <h3 className="slideHeading">Missing-Links Analysis + Chain Analysis</h3>
            <p>A complete analysis of missing behavior requires that you combine a missing-links analysis with aspects of a chain analysis of the same behavior. This should happen when the factors that contribute to you not doing something are complicated or are somehow preventing you from doing what is needed even when you know what that is. When this is the case, you start with a missing-links analysis and after question 4 switch to a chain analysis.</p>
        </>
    )
}

function slide7(){
    return(
        <>
            <h3 className="slideHeading">Conclusion</h3>
            <p>You've just learned about another useful skill for analyzing behavior: missing-links analysis! Now that you know what to do, let's put those skills to practice with an exercise!</p>
        </> 
    )
}