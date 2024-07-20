import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { FaBookOpenReader, FaTrophy } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";

export default function OrientationLesson2({ setOrientationLesson2IsOpen, setOrientationLesson2QuizIsActive }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        slide1,
        slide2,
        slide3,
        slide4,
        slide5,
        slide6,
        slide7,
        slide8,
        slide9,
        slide10,
        slide11,
        slide12,
        slide13,
        slide14,
        slide15,
        slide16,
        slide17,
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
                        <h5 className="heading">Introduction to Skills Training</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setOrientationLesson2IsOpen(false)}>
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
                                setOrientationLesson2IsOpen(false);
                                setOrientationLesson2QuizIsActive(true);
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
            <h3 className="slideHeading">Skills Training Assumptions</h3>
            <p>In order to get the most out of skills training, it's important to internalize the following assumptions. An assumption is a belief that cannot be proved, but that you agree to abide by anyway.</p>
        </>
    )
}

function slide2() {
    return(
        <>
            <h3 className="slideHeading">People Are Doing the Best They Can</h3>
            <p>That is, given the multiplicity of causes in the universe (genetics, biological events, environmental events, consequences of previous behavior), each person at this one moment in time is what he or she is. Given who we each are and the fact that all behavior is caused, we are doing the best we can at this one moment, given the causes that have affected us.</p>
        </>
    )
}

function slide3() {
    return(
        <>
            <h3 className="slideHeading">People Want to Improve</h3>
            <p>This is similar to the Dalai Lama's statement that the common characteristic of all people is that they want to be happy.</p>
        </>
    )
}

function slide4() {
    return(
        <>
            <h3 className="slideHeading">People Need to Do Better, Try Harder, and Be More Motivated to Change.</h3>
            <p>The fact that people are doing the best they can, and want to do even better, does not mean that their efforts and motivation are sufficient to the task.</p>
            <br />
            <p>That being said, there are times this does not apply. In particular, when progress is steady and at a realistic rate of improvement with no let-up or episodic drop in effort, doing better, trying harder and being more motivated is not needed.</p>
        </>
    )
}

function slide5() {
    return(
        <>
            <h3 className="slideHeading">People May Not Have Caused All of Their Own Problems, but They Have to Solve Them Anyway</h3>
            <p>People have to change their own behavioral responses and alter their environment for their life to change.</p>
        </>
    )
}

function slide6() {
    return(
        <>
            <h3 className="slideHeading">New Behaviors Must Be Learned in All Relevant Contexts</h3>
            <p>Behaviors learned in one context often do not generalize to different contexts, thus it is important to practice new behaviors in all the environments where they will be needed. (This is one of the main reasons it is important for you to practice new skills in your daily environment.)</p>
        </>
    )
}

function slide7() {
    return(
        <>
            <h3 className="slideHeading">All Behaviors (Actions, Thoughts, Emotions) Are Caused</h3>
            <p>There is always a cause or set of causes for our actions, thoughts, and emotions, even if we don’t know what these causes are.</p>
        </>
    )
}

function slide8() {
    return(
        <>
            <h3 className="slideHeading">Figuring Out and Changing the Causes of Behavior Works Better Than Judging
            and Blaming</h3>
            <p>This assumption is very much related to the previous one. When we agree that all behavior is caused, this leads to the understanding that blaming and being judgmental (“This should not be”) are not effective in changing that situation or behavior.</p>
        </>
    )
}

function slide9() {
    return(
        <>
            <h3 className="slideHeading">Committing to Learning Skills </h3>
            <p>Commitment in skills training is particularly important, because learning skills requires a fair amount of homework practice, and such practice not only takes time but can be difficult to do. Consider the following:</p>
            <ul>
                <li>Are you committed to doing skills lessons and practice?</li>
                <li>Are there any difficulties that could arise that would interfere with your commitment? If so, think about things you could do now to solve or mitigate those problems.</li>
            </ul>
            <p>By committing to skills practice, and planning ahead on how to stay committed, you greatly increase your odds of successfully completing the training, and thereby your odds of making significant improvements in your life!</p>
        </>
    )
}

function slide10() {
    return(
        <>
            <h3 className="slideHeading">The DBT Diary</h3>
            <p>You may have already noticed the Diary section of your profile. Let's get in to what it's for and how it will help you along your DBT Journey.</p>
        </>
    )
}

function slide11() {
    return(
        <>
            <h3 className="slideHeading">What is a DBT Diary?</h3>
            <p>The DBT diary card is designed to track behaviors that you are trying to decrease, as well as skills you are trying to increase. For the most part, the half of the card tracks behaviors to be decreased, and the other half tracks skills to be practiced and increased.</p>
            <br />
            <p>Ideally, you would fill out and save a card for each day that you practice. This will allow you to track and view your progress over time. Being able to see the instances of problematic behaviors decreasing and skill use increasing as you practice and learn is an important tool to help keep you motivated!</p>
        </>
    )
}

function slide12(){
    return(
        <>
            <h3 className="slideHeading">How Is the Diary Card Used?</h3>
            <p>The DBT Diary Card is broken down into different sections:</p>
            <ul>
                <li><span className="bold">Ratings (urges and feelings)</span></li>
                <li><span className="bold">Number of times(a behavior is done)</span></li>
                <li><span className="bold">Used skills</span></li>
                <li><span className="bold">Skills Practiced</span></li>
            </ul>
            <p>And lastly, a notes section to record any thoughts or input you may have.</p>
        </>
    )
}

function slide13() {
    return(
        <>
            <h3 className="slideHeading">Ratings</h3>
            <p>In this section, you are asked to rate your feelings and urges for that day on a scale of 1 to 5.</p>
            <br />
            <p>Rating an urge at "1" means that you did not experience that urge that day, whereas a rating of "5" means the urge was unbearably strong.</p>
            <br />
            <p>Rating a feeling at "1" means you did not experience or did not notice that feeling that day, while a rating of "5" means that feeling dominated your day to the point you couldn't think about anything else.</p>
            <br />
        </>
    )
}

function slide14() {
    return(
        <>
            <h3 className="slideHeading">Number of Times</h3>
            <p>The next section has you give the number of times in a day you engaged in a destructive behavior. What constitutes an occurance is up to you (for instance, "Alcohol" could be number of drinks or it could be quantity) but for your own records it is important to be consistent in the measurement that you use. Consider recording it in the "notes" section for your records.</p>
        </>
    )
}

function slide15() {
    return(
        <>
            <h3 className="slideHeading">Used Skills</h3>
            <p>This section has you report a number between 0 and 7 referring to your skills usage for that day. The meaning of the numbers are as follows:</p>
            <ul>
                <li><span className="bold">0:</span> Not thought about or used</li>
                <li><span className="bold">1:</span> Thought about, not used, didn't want to</li>
                <li><span className="bold">2:</span> Thought about, not used, wanted to</li>
                <li><span className="bold">3:</span> Tried, but couldn't use them</li>
                <li><span className="bold">4:</span> Tried, could use them but they didn't help</li>
                <li><span className="bold">5:</span> Tried, could use them, helped</li>
                <li><span className="bold">6:</span> Automatically used them, didn't help</li>
                <li><span className="bold">7:</span> Automatically used them, helped</li>
            </ul>
            <p>Don't worry about memorizing this list! You can refer to it at any time by hovering over the "info" icon in the diary.</p>
        </>
    )
}

function slide16() {
    return(
        <>
            <h3 className="slideHeading">Skills Practiced</h3>
            <p>Finally, you can use the checkboxes to mark which skills you practiced that day. Afterwards, you can describe how using them went in the "Notes".</p>
        </>
    )
}

function slide17() {
    return(
        <>
            <h3 className="slideHeading">Conclusion</h3>
            <p>Great work, you've finished another lesson! In this lesson we reviewed the assumptions we take into skills training, the importance of commitment to skills practice, and how to use the DBT Diary. Now you're ready for a brief quiz to review these concepts!</p>
        </>
    )
}