import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";

export default function AnalyzingBehaviorLesson1({ setAnalyzingBehaviorLesson1IsOpen, setAnalyzingBehaviorLesson1PracticeIsActive }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        slide1,
        slide2,
        slide3,
        slide4,
        slide5,
    ];

    const handleUpdateCourseProgress = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.patch('http://127.0.0.1:8000/update_course', {
                analyzing_behavior_lesson_1_practice : true
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
    }

    return(
        <>
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className="heading">Chain Analysis of Problem Behavior</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setAnalyzingBehaviorLesson1IsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }}/>
                    </button>

                    <div className="modalContent">
                        <div className="progressBar">
                            <div className="progressFill" style={{ width: `${(currentSlide + 1) * (100 / slides.length)}%` }}></div>
                        </div>
                        <div className="slide">
                            {/* Dynamically render the current slide component */}
                            {React.createElement(slides[currentSlide])}
                        </div>
                        <div className="slideNav">
                            {currentSlide !== 0 && <button className="prevButton" onClick={goToPreviousSlide}>Previous</button>}
                            {currentSlide === 0 && <div className="invisoDiv"></div>}
                            {currentSlide === slides.length - 1 && <button className="nextButton" onClick={() => {
                                setAnalyzingBehaviorLesson1IsOpen(false);
                                setAnalyzingBehaviorLesson1PracticeIsActive(true);
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
    return(
        <>
            <h3 className="slideHeading">Welcome to the Analyzing Behavior Module!</h3>
            <p>This section is aimed at helping you develop the ability to analyze and understand ineffective, problematic behaviors and idenfity missing effective behaviors that are needed. We will begin with <span className="bold">chain analysis.</span></p>
        </>
    )
}

function slide2() {
    return(
        <>
            <h3 className="slideHeading">What is Chain Analysis?</h3>
            <p>Any behavior can be understood as a series of linked components. These links are “chained” together, because they follow in succession one after the other; one link in the chain leads to another. For behaviors that are well rehearsed (practiced a lot), it may appear that the episode cannot be broken down into steps—that it “all happens at once.” A “chain analysis” provides a series of questions (e.g., what happened before that, what happened next) for unlocking these links that sometimes feel stuck together.</p>
            <br />
            <p>The purpose of a chain analysis is to figure out what the problem is (e.g., being late for work, impulsively quitting a job); what prompts it; what its function is; what is interfering with the resolution of the problem; and what aids are available to help solve the problem.</p>
        </>
    )
}

function slide3() {
    return(
        <>
            <h3 className="slideHeading">Why Conduct Chain Analyses?</h3>
            <p><span className="bold">A chain analysis is an invaluable tool for assessing a behavior to be changed.</span> Although performing a chain analysis requires time and effort, it provides essential information for understanding the events that lead up to a particular problem behavior (i.e., behaviors participants want to change). Many attempts to solve a problem fail because the problem at hand is not fully understood and assessed.</p>
            <br />
            <p>By conducting repeated chain analyses, a person can identify the pattern linking different components of a behavior together. Figuring out what the links are is the first step in finding solutions to stopping the problem behavior. When any of the links of the chain can be broken, the problem behavior can be stopped.</p>
        </>
    )
}

function slide4() {
    return(
        <>
            <h3 className="slideHeading">How to Conduct a Chain Analysis</h3>
            <p>There are 8 steps total. Steps 1-5 are about understanding the problem. Identify:</p>
            <ol>
                <li>What exactly was the problem behavior?</li>
                <li>What event in the environment started the chain of events (called the &quot;prompting event&quot;)?</li>
                <li>What were the vulnerability factors for that particular day?</li>
                <li>What was the chain of events, link by link, that led from the prompting event to the problem behavior?</li>
                <li>What were the consequences of the behavior in the environment?</li>
            </ol>
            <p>Steps 6-8 are about changing the problem behavior:</p>
            <ol start="6">
                <li>Identify skillful behaviors to replace problem links in the chain, and so to decrease the probability of this behavior’s happening again.</li>
                <li>Develop prevention plans to reduce vulnerability to prompting events and to starting down the chain.</li>
                <li>Repair the negative consequences of the problem behavior for the environment and for oneself.</li>
            </ol>
            <p>A note on step 8: <span className="bold">When one is repairing negative consequences, it is extremely important to first figure out what has actually been harmed.</span> For example, someone who betrays a person and says mean, untrue things about the person may try to repair by bringing flowers or candy, as if the damage done was to remove the person’s flowers or candy. The repair that is necessary is to apologize, retract what was said, and also refrain from gossip in order to rebuild the person’s trust</p>
        </>
    )
}

function slide5() {
    return(
        <>
            <h3 className="slideHeading">Let&apos;s Practice!</h3>
            <p>Now that you know the steps, chain analysis is best learned through practice. Proceed to the practice section and let&apos;s try doing a guided chain analysis example!</p>
        </>
    )
}