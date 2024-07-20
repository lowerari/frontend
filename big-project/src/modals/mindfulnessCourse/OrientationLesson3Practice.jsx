import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

export default function OrientationLesson3Practice({ setOrientationLesson3PracticeIsOpen, setOrientationLesson3QuizIsActive }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        slide1,
        slide2,
        slide3,
        slide4,
        slide5,
        slide6
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
                        <h5 className="heading">Biosocial Theory: Practice</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setOrientationLesson3PracticeIsOpen(false)}>
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
                                setOrientationLesson3PracticeIsOpen(false);
                                setOrientationLesson3QuizIsActive(true);
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
            <h3 className="slideHeading">Emotional Vulnerability</h3>
            <p>Read each statement and check the ones you believe apply to you:</p>
            <hr />
            <p>Emotional vulnerability is BIOLOGICAL: it's simply how some people are born.</p>
            <div className="checkboxes">
                <label className="checkboxContainer" htmlFor="biosocialCheckbox1">
                    <input type="checkbox" name="biosocialCheckbox" id="biosocialCheckbox1" />
                    <span className="checkmark"></span>
                    <p>
                    They are sensitive to emotional stimuli; they can detect subtle emotional information in the environment that others don't notice.
                    </p>
                </label>
        
                <label className="checkboxContainer" htmlFor="biosocialCheckbox2">
                    <input type="checkbox" name="biosocialCheckbox" id="biosocialCheckbox2" />
                    <span className="checkmark"></span>
                    <p>
                    They experience emotions much more often than others.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="biosocialCheckbox3">
                    <input type="checkbox" name="biosocialCheckbox" id="biosocialCheckbox3" />
                    <span className="checkmark"></span>
                    <p>
                    Their emotions seem to hit for no reason; from "out of the blue."
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="biosocialCheckbox4">
                    <input type="checkbox" name="biosocialCheckbox" id="biosocialCheckbox4" />
                    <span className="checkmark"></span>
                    <p>
                    They have more intense emotions.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="biosocialCheckbox5">
                    <input type="checkbox" name="biosocialCheckbox" id="biosocialCheckbox5" />
                    <span className="checkmark"></span>
                    <p>
                    Their emotions "hit like a ton of bricks."
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="biosocialCheckbox6">
                    <input type="checkbox" name="biosocialCheckbox" id="biosocialCheckbox6" />
                    <span className="checkmark"></span>
                    <p>
                    Their emotions are long-lasting.
                    </p>
                </label>                
            </div>
        </div>
    )
}

function slide2() {
    return (
        <div>
            <h3 className="slideHeading">Impulsivity</h3>
            <p>Impulsivity also has a BIOLOGICAL basis: Regulating action is harder for some than others.</p>
            <div className="checkboxes">
                <label className="checkboxContainer" htmlFor="biosocialCheckbox7">
                    <input type="checkbox" name="biosocialCheckbox" id="biosocialCheckbox7" />
                    <span className="checkmark"></span>
                    <p>
                        They find it very hard to restrain impulsive behaviors.
                    </p>
                </label>
        
                <label className="checkboxContainer" htmlFor="biosocialCheckbox8">
                    <input type="checkbox" name="biosocialCheckbox" id="biosocialCheckbox8" />
                    <span className="checkmark"></span>
                    <p>
                        Often, without thinking, they do things that get them in trouble.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="biosocialCheckbox9">
                    <input type="checkbox" name="biosocialCheckbox" id="biosocialCheckbox9" />
                    <span className="checkmark"></span>
                    <p>
                        Sometimes their behavior seems to come out of nowhere.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="biosocialCheckbox10">
                    <input type="checkbox" name="biosocialCheckbox" id="biosocialCheckbox10" />
                    <span className="checkmark"></span>
                    <p>
                        They find it very hard to be effective.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="biosocialCheckbox11">
                    <input type="checkbox" name="biosocialCheckbox" id="biosocialCheckbox11" />
                    <span className="checkmark"></span>
                    <p>
                        Their moods get in the way of organizing to achieve their goals.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="biosocialCheckbox12">
                    <input type="checkbox" name="biosocialCheckbox" id="biosocialCheckbox12" />
                    <span className="checkmark"></span>
                    <p>
                        They cannot control behaviors linked to their moods.
                    </p>
                </label>                
            </div>
        </div>
    )
}

function slide3() {
    return (
        <div>
            <h3 className="slideHeading">Invalidating Environment</h3>
            <p>An invalidating SOCIAL environment can make it very hard to regulate emotions.</p>
            <div className="checkboxes">
                <label className="checkboxContainer" htmlFor="biosocialCheckbox13">
                    <input type="checkbox" name="biosocialCheckbox" id="biosocialCheckbox13" />
                    <span className="checkmark"></span>
                    <p>
                        An invalidating environment doesn't seem to understand your emotions.
                    </p>
                </label>
        
                <label className="checkboxContainer" htmlFor="biosocialCheckbox14">
                    <input type="checkbox" name="biosocialCheckbox" id="biosocialCheckbox14" />
                    <span className="checkmark"></span>
                    <p>
                        It tells you your emotions are invalid, weird, wrong, or bad.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="biosocialCheckbox15">
                    <input type="checkbox" name="biosocialCheckbox" id="biosocialCheckbox15" />
                    <span className="checkmark"></span>
                    <p>
                        It often ignores your emotions and does nothing to help you.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="biosocialCheckbox16">
                    <input type="checkbox" name="biosocialCheckbox" id="biosocialCheckbox16" />
                    <span className="checkmark"></span>
                    <p>
                        It may say things like "Don't be such a baby!" or "Normal people don't feel that way."
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="biosocialCheckbox17">
                    <input type="checkbox" name="biosocialCheckbox" id="biosocialCheckbox17" />
                    <span className="checkmark"></span>
                    <p>
                        People who invalidate are often doing the best they can.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="biosocialCheckbox18">
                    <input type="checkbox" name="biosocialCheckbox" id="biosocialCheckbox18" />
                    <span className="checkmark"></span>
                    <p>
                        They may not know how to validate, or may be afraid that if they validate your emotions, you will get more emotional, not less.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="biosocialCheckbox19">
                    <input type="checkbox" name="biosocialCheckbox" id="biosocialCheckbox19" />
                    <span className="checkmark"></span>
                    <p>
                        They may be under high stress, or may have too few resources themselves.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="biosocialCheckbox20">
                    <input type="checkbox" name="biosocialCheckbox" id="biosocialCheckbox20" />
                    <span className="checkmark"></span>
                    <p>
                        There may just be a poor fit between you and your social environment.
                    </p>
                </label>                  
            </div>
        </div>
    )
}

function slide4() {
    return (
        <div>
            <h3 className="slideHeading">Ineffective Environment</h3>
            <p>An ineffective SOCIAL environment is a big problem when you want to learn to regulate emotions and actions.</p>
            <div className="checkboxes">
                <label className="checkboxContainer" htmlFor="biosocialCheckbox21">
                    <input type="checkbox" name="biosocialCheckbox" id="biosocialCheckbox21" />
                    <span className="checkmark"></span>
                    <p>
                        Your environment may reinforce out-of-control emotions and actions.
                    </p>
                </label>
        
                <label className="checkboxContainer" htmlFor="biosocialCheckbox22">
                    <input type="checkbox" name="biosocialCheckbox" id="biosocialCheckbox22" />
                    <span className="checkmark"></span>
                    <p>
                        If people give in when you get out of control, it will be hard for you to get in control.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="biosocialCheckbox23">
                    <input type="checkbox" name="biosocialCheckbox" id="biosocialCheckbox23" />
                    <span className="checkmark"></span>
                    <p>
                        If others command you to change, but don't coach you on how to do this, it will be hard to keep trying to change.
                    </p>
                </label>           
            </div>
        </div>
    )
}

function slide5() {
    return (
        <div>
            <h3 className="slideHeading">Transactions</h3>
            <p>It's the TRANSACTIONS that count between a person and their social environment.</p>
            <div className="checkboxes">
                <label className="checkboxContainer" htmlFor="biosocialCheckbox24">
                    <input type="checkbox" name="biosocialCheckbox" id="biosocialCheckbox24" />
                    <span className="checkmark"></span>
                    <p>
                        Biology and social environment influence the person.
                    </p>
                </label>
        
                <label className="checkboxContainer" htmlFor="biosocialCheckbox25">
                    <input type="checkbox" name="biosocialCheckbox" id="biosocialCheckbox25" />
                    <span className="checkmark"></span>
                    <p>
                        The person reciprocates and influences his/her own social environment.
                    </p>
                </label>

                <label className="checkboxContainer" htmlFor="biosocialCheckbox26">
                    <input type="checkbox" name="biosocialCheckbox" id="biosocialCheckbox26" />
                    <span className="checkmark"></span>
                    <p>
                        The social environment reciprocates and influences the person, and so on.
                    </p>
                </label>                  
            </div>
        </div>
    )
}

function slide6() {
    return (
        <div>
            <h3 className="slideHeading">Good Work!</h3>
            <p>Now that you can relate biosocial theory to your own life, let's take a quiz on what you've learned so far!</p>
        </div>
    )
}