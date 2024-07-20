import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { FaBookOpenReader, FaTrophy } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";

export default function OrientationLesson1({ setOrientationLesson1IsOpen, setOrientationLesson1PracticeIsActive }) {
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
                        <h5 className="heading">Goals of Skills Training</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setOrientationLesson1IsOpen(false)}>
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
                                setOrientationLesson1IsOpen(false);
                                setOrientationLesson1PracticeIsActive(true);
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
            <h3 className="slideHeading">Welcome to Skills Training!</h3>
            <p>Congratulations! You've chosen to embark on a very important journey for your mental health and well-being. Throughout this course, you will learn skills that will help you change unwanted behaviors, emotions, thinking, and events that cause misery and distress.</p>
        </>
    )
}

function slide2() {
    return(
        <>
            <h3 className="slideHeading">Behaviors to Decrease</h3>
            <p>By learning skills, you will work on decreasing the following behaviors:</p>
            <ul>
                <li>Mindlessness, emptiness, being out of touch with yourself and others, judgementalness</li>
                <li>Interpersonal conflict and stress, loneliness</li>
                <li>Absense of flexibility, difficulty with change</li>
                <li>Up-and-down and extreme emotions, mood-dependent behavior, difficulties in regulating emotions</li>
                <li>Impulsive behaviors, acting without thinking, difficulties accepting reality as it is, willfullness, addiction</li>
            </ul>
        </>
    )
}

function slide3() {
    return(
        <>
            <h3 className="slideHeading">Skills to Increase</h3>
            <p>But skills training is not just about decreasing certain behaviors! There are also many behaviors you are going to learn/increase. They fall under four big umbrellas: mindfullness, interpersonal effectiveness, emotion regulation, and distress tolerance. Let's break down what each of those means.</p>
        </>
    )
}

function slide4() {
    return(
        <>
            <h3 className="slideHeading">Mindfulness Skills</h3>
            <p>Mindfulness skills help us focus our attention on the present moment, noticing what is going on both inside and outside of ourselves. You will be learning the following types of skills through this training:</p>
            <ul>
                <li><span className="bold">Core mindfullness skills (the "What" and "How" skills):</span> how to observe and experience what really is, to be less judgmental, and live in the moment effectively</li>
                <li><span className="bold">Mindfulness skills from a spiritual perspective (optional):</span> focus on experiencing ultimate reality, forming an intimate connection with the entire universe, and developing a sense of freedom</li>
                <li><span className="bold">Skillfull means (optional):</span> balancing "doing mind" and "being mind"</li>
                <li><span className="bold">Wise mind by walking the middle path (optional)</span></li>
            </ul>
        </>
    )
}

function slide5() {
    return(
        <>
            <h3 className="slideHeading">Interpersonal Effectiveness Skills</h3>
            <p>Interpersonal effectiveness skills help us communicate effectively, maintain self-respect, and build healthy relationships. You will be learning the following types of skills through this training:</p>
            <ul>
                <li><span className="bold">Core interpersonal effectiveness skills:</span> how to deal with conflict situations, getting what you want and need, say no to unwanted requests and demands, all in a way that maintains our self respect and other's respect for us</li>
                <li><span className="bold">Building relationships and ending destructive ones (optional):</span> find potential friends, get people to like you, and maintain positive relationships with others. Build closeness with others on one hand, and end destructive relationships on the other</li>
                <li><span className="bold">Walking the middle path (optional):</span> walk a "middle path" in your relationships, balancing acceptance with change in yourself and in your relationship with others</li>
            </ul>
        </>
    )
}

function slide6() {
    return(
        <>
            <h3 className="slideHeading">Emotion Regulation Skills</h3>
            <p>Emotion regulation skills help us understand and manage our emotions, even though complete emotional control cannot be achieved. To a certain extent, we are who we are, and emotionality is part of us. However, we can get more control and even modulate some emotions. You will be learning the following types of skills through this training:</p>
            <ul>
                <li><span className="bold">Understanding and naming emotions:</span> understand emotions in general and identify your own emotions</li>
                <li><span className="bold">Changing emotional responses:</span> reduce the intensity of painful or unwanted emotions and change situations that prompt painful or unwanted emotions</li>
                <li><span className="bold">Reducing vulnerability to emotion mind:</span> reduce vulnerability to becoming extremely or painfully emotional and increase emotional resilience</li>
                <li><span className="bold">Managing really difficult emotions:</span> accept ongoing emotions and manage extreme emotions</li>
            </ul>
        </>
    )
}

function slide7() {
    return(
        <>
            <h3 className="slideHeading">Distress Tolerance Skills</h3>
            <p>Distress tolerance skills help us survive crises and bear pain that cannot be immediately changed without making things worse. In addition, these skills teach us how to accept and fully enter a life that may not be the life we hoped for or wanted. You will be learning the following types of skills through this training:</p>
            <ul>
                <li><span className="bold">Crisis survival skills:</span> tolerate painful events, urges, and emotions when we cannot make things better right away</li>
                <li><span className="bold">Reality acceptance skills:</span> reduce suffering by accepting and living a life that is not the life you want</li>
                <li><span className="bold">Skills when the crisis is addiction (optional):</span> back down from addiction and live a life of abstinence</li>
            </ul>
        </>
    )
}

function slide8() {
    return(
        <>
            <h3 className="slideHeading">Analyzing Behavior</h3>
            <p>Finally, before we get started with anything else, we will start by learning important skills for how to figure out the causes of problem behavior and plan for problem solving with <span className="bold">chain analysis and missing links analysis.</span></p>
        </>
    )
}

function slide9() {
    return(
        <>
            <h3 className="slideHeading">Format of Skills Training</h3>
            <p>Before we begin, let's go over what skills training will look like:</p>
        </>
    )
}

function slide10() {
    return(
        <>
            <h3 className="slideHeading">Order and Length of Skills Modules</h3>
            <p>The order of the modules will look like this:</p>
            <ul>
                <li><span className="bold">Mindfulness</span></li>
                <li><span className="bold">Distress Tolerance</span></li>
                <li><span className="bold">Emotion Regulation</span></li>
                <li><span className="bold">Interpersonal Effectiveness</span></li>
            </ul>
            <p>Each module is broken down further into "sub-modules" based on the types of skills being taught. Take each module at your own pace; there is no need to rush! Ideally, you should spend about 2 hours per week on learning new skills, and try to practice and apply the skills you've learned each day. You can track your daily and weekly progress by recording it in your skills diary.</p>
        </>
    )
}

function slide11() {
    return(
        <>
            <h3 className="slideHeading">Lesson Format</h3>
            <p>Each skill lesson has three parts:</p>
            <ul>
                <li>A "lesson" section (denoted by the <FaBookOpenReader /> symbol) where you will learn the theory behind the skill and how to practice it</li>
                <li>A "practice" section (denoted by the <FaPencilAlt /> symbol) where you will practice applying the skills you've learned and analyze the theory</li>
                <li>A "quiz" section (denoted by the <FaTrophy /> symbol) where you can test your knowledge of the skills you've learned</li>
            </ul>
            <p>After completing a skill, you can move on to the next one. Each course also includes "worksheets" you can use to practice your skills outside of the lesson and apply them to your daily life.</p>
        </>
    )
}

function slide12(){
    return(
        <>
            <h3 className="slideHeading">Options for Solving Any Problem</h3>
            <p>Finally, let's get motivated for skills training by looking at what your options are for solving problems!</p>
            <p>The options for responding to pain are limited. There may be an infinite number of really painful things that can happen to you, but there are not an infinite number of responses you can make to pain. In fact, if you sit back and think about it, there are only four things you can do when painful problems come into your life:</p>
            <ul>
                <li><span className="bold">Solve the problem</span></li>
                <li><span className="bold">Change your feelings about the problem</span></li>
                <li><span className="bold">Tolerate the problem,</span> or:</li>
                <li><span className="bold">Stay miserable</span> (or make things even worse!)</li>
            </ul>
        </>
    )
}

function slide13() {
    return(
        <>
            <h3 className="slideHeading">Solve the Problem</h3>
            <p>First, you can find a way to try and end or change the problem situation.</p>
            <br />
            <p><span className="bold">Example:</span> If the distress comes from conflict in your marriage, one solution could be to avoid spending time with your spouse; another solution could be to get a divorce and leave the relationship; alternatively, you could get couple counseling and change the relationship so that the conflict is resolved.</p>
            <br />
            <p><span className="bold">Example:</span> If the problem is that you are afraid of flying, you could solve this by avoiding flying; alternatively, you could find a treatment program aimed at reducing fear of flying.</p>
            <br />

            <p>Skills that can help with problem solving:</p>
            <ul>
                <li><span className="bold">Walking the middle path</span> (from interpersonal effectiveness skills)</li>
                <li><span className="bold">Problem solving</span> (from emotion regulation skills)</li>
            </ul>
        </>
    )
}

function slide14() {
    return(
        <>
            <h3 className="slideHeading">Feel Better About the Problem</h3>
            <p>Second, you can work on changing your feelings about the problem situation. You could work at regulating your emotional response to the problem or figure out a way to make a negative into a positive.</p>
            <br />
            <p><span className="bold">Example:</span> Remind yourself that conflict is a normal part of marriage and that it is nothing really to be distressed about. Alternatively, develop more positive relationships outside of your marriage, so that the negative aspects of conflict with you partner are not very important.</p>
            <br />
            <p><span className="bold">Example:</span> Work on feeling better about having a fear of flying; alternatively, join a phobia
            support group.</p>
            <br />

            <p>Skills that can help with changing your feelings about the problem:</p>
            <ul>
                <li><span className="bold">Emotion regulation skills</span></li>
                <li><span className="bold">Mindfulness skills</span></li>
            </ul>
        </>
    )
}

function slide15() {
    return(
        <>
            <h3 className="slideHeading">Tolerate the Problem</h3>
            <p>Third, when you can't solve a problem and you can't feel better about it, you can work on tolerating the problem situation. You can learn to bear the pain and distress without making things worse.</p>
            <br />
            <p><span className="bold">Example:</span> In a marriage full of conflict, you might not be able to solve the problem through divorce or by improving the relationship. You might also not succeed in feeling better about the problem. But you will be less distressed and miserable about it if you practice radical acceptance of the problem.</p>
            <br />
            <p><span className="bold">Example:</span> If you simply cannot get rid of your flying phobia and also can find no way to like it or feel good about it, then you can reduce the suffering it causes you by radically accepting it: It is what it is</p>
            <br />

            <p>Skills that can help with tolerating the problem:</p>
            <ul>
                <li><span className="bold">Distress tolerance skills</span></li>
                <li><span className="bold">Mindfulness skills</span></li>
            </ul>
        </>
    )
}

function slide16() {
    return(
        <>
            <h3 className="slideHeading">Stay Miserable</h3>
            <p>Finally, you can choose to stay miserable or make things even worse. This is the least effective option, but it is an option nonetheless.</p>
            <br />
            <p><span className="bold">Example:</span> In a marriage full of conflict, you could stay miserable by continuing to fight with your spouse and not seeking help. You could make things worse by having an affair or becoming violent.</p>
            <br />
            <p><span className="bold">Example:</span> If you have a fear of flying, you could stay miserable by continuing to avoid flying and never seeking help. You could make things worse by drinking heavily before a flight and causing a scene on the plane.</p>
            <br />

            <p>How to stay miserable:</p>
            <ul>
                <li><span className="bold">Use no skills!</span></li>
            </ul>
        </>
    )
}

function slide17() {
    return(
        <>
            <h3 className="slideHeading">Conclusion</h3>
            <p>Now that you know your options for solving problems, you can use this information to motivate yourself to practice skills. Remember, the goal of skills training is to help you change unwanted behaviors, emotions, thinking, and events that cause misery and distress. You can do this by learning and practicing the skills taught in this course.</p>
        </>
    )
}