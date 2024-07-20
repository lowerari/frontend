import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { FaLightbulb } from "react-icons/fa";

export default function OrientationLesson3({ setOrientationLesson3IsOpen, setOrientationLesson3PracticeIsActive }) {
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
                        <h5 className="heading">Biosocial Theory of Emotion Dysregulation</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setOrientationLesson3IsOpen(false)}>
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
                                setOrientationLesson3IsOpen(false);
                                setOrientationLesson3PracticeIsActive(true);
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
            <h3 className="slideHeading">Biological Factors and Emotional Vulnerability</h3>
            <p>Individuals who are more emotionally vulnerable:</p>
            <ul>
                <li>Are more sensitive to emotional stimuli</li>
                <li>Experience emotions more often than others</li>
                <li>May feel like emotions hit them for no reason</li>
                <li>Have more intense emotions than others</li>
                <li>Have long lasting emotions</li>
            </ul>
            <p>This vulnerability to high emotionality is highly influenced by biological factors:</p>
            <ul>
                <li>Genetics</li>
                <li>Intrauterine factors during pregnancy</li>
                <li>Brain damage or physical disorders after birth</li>
            </ul>
            <p>Additionally, some people are just more emotional than others.</p>
            <div className="thinkAboutIt">
                <h3><FaLightbulb /> Think About It!</h3>
                <p>Do you have siblings or family members who have been markedly different in emotionality ever since (it seems) they were born? How could this be due to biological factors?</p>
            </div>
        </>
    )
}

function slide2() {
    return(
        <>
            <h3 className="slideHeading">Biological Factors and Impulsivity</h3>
            <p>Individuals who are impulsive:</p>
            <ul>
                <li>Find it hard to inhibit behaviors</li>
                <li>Are more likely to do things that get them in trouble</li>
                <li>Have behaviors that often seem to come out of nowhere</li>
                <li>Have moods that get in the way of organizing behavior to achieve goals</li>
                <li>Have trouble controlling behaviors that are linked to their moods</li>
            </ul>
            <p>Genetics and other factors also influence impulsivity.</p>
            <p>Furthermore, some people are just more impulsive than others.</p>
            <div className="thinkAboutIt">
                <h3><FaLightbulb /> Think About It!</h3>
                <p>Do you have siblings or family members who have shown a difference in impulsivity ever since (it seems) they were born? How is this probably due to biological factors?</p>
            </div>
        </>
    )
}

function slide3() {
    return(
        <>
            <h3 className="slideHeading">The Invalidating Environment</h3>
            <p>The invalidating environment is characterized by:</p>
            <ul>
                <li>Intolerance toward expressions of private emotional experiences, particularly those not supported by observable public events.</li>
                <li>Intermittent reinforcement of extreme expressions of emotion, while simultaneously communicating that such emotions are unwarranted.</li>
                <li>Communications that specific emotions are invalid, weird, wrong, or bad.</li>
                <li>Communications that emotions should be coped with without support.</li>
                <li>Not responding to emotions that call for a response or action.</li>
                <li>Confusing one’s own emotions with the emotions of others.</li>
            </ul>
            <p>Examples:</p>
            <ul>
                <li>Telling a child, “Nobody else feels like you do, so just stop being a crybaby.”</li>
                <li>Ignoring screams for help when a child falls off a tricycle until the screams get on the adult’s nerves too much, and then responding in a cold and stern manner.</li>
                <li>Telling a child, “That is such a dumb thing to say!”</li>
                <li>Saying, “If you are going to keep crying, go to your room and come down when you get control of yourself.”</li>
                <li>Saying, “I can see you are upset about losing your textbook for tomorrow’s exam,” but not doing anything to help find the book.</li>
                <li>Saying, “I’m tired; let’s all go to bed.”</li>
            </ul>
            <div className="thinkAboutIt">
                <h3><FaLightbulb /> Think About It!</h3>
                <p>In what ways have you experienced invalidation in your own life?</p>
            </div>
        </>
    )
}

function slide4() {
    return(
        <>
            <h3 className="slideHeading">The Ineffective Environment</h3>
            <p>For several reasons, parents/caregivers may be ineffective at teaching children emotional regulation and behavioral control:</p>
        </>
    )
}

function slide5() {
    return(
        <>
            <h3 className="slideHeading">No Parent Is Perfect at Effective Parenting</h3>
            <p>Most parents go through periods with their children where for a limited time it appears that they must be ineffective parents. This is normative in parenting. At these times, many parents get professional help in parenting.</p>
        </>
    )
}

function slide6() {
    return(
        <>
            <h3 className="slideHeading">Many Parents Simply Do Not Know How to Be Effective Parents</h3>
            <p>Many parents may not have had effective parenting themselves, and thus never learned what to do—how to discipline a child, and how to attend to and reinforce positive behaviors. These parents may not be aware that their parenting style does not fit what their children need.</p>
        </>
    )
}

function slide7() {
    return(
        <>
            <h3 className="slideHeading">Parents May Be Perfectionists</h3>
            <p>Parents may be so perfectionistic or so highly concerned about appearances that they overemphasize internalizing all emotions and characterize impulsivity as a character flaw that can be remedied only if there is sufficient motivation. This is rarely sufficient alone.</p>
        </>
    )
}

function slide8() {
    return(
        <>
            <h3 className="slideHeading">Some Parents Have Serious Disorders</h3>
            <p>Parents who have serious physical or mental disorders may not be able to attend to their children. They may themselves be highly emotionally dysregulated and impulsive.</p>
        </>
    )
}

function slide9() {
    return(
        <>
            <h3 className="slideHeading">Parents May Be Overstressed</h3>
            <p>Some parents may be so overwhelmed that they cannot give their children the attention and coaching the children need. Severe illness in other family members, high- stress jobs, insufficient financial resources, multiple children, the absence of a second parent, and many other factors can interfere with the most caring parent’s being able to give a child what is needed.</p>
            <div className="thinkAboutIt">
                <h3><FaLightbulb /> Think About It!</h3>
                <p>Do/Did your parents have any of these characteristics? If you are a parent, do any of these descriptions fit you?</p>
            </div>
        </>
    )
}

function slide10() {
    return(
        <>
            <h3 className="slideHeading">Reasons for Ineffective Adult Environments</h3>
            <p>Sometimes adults get in environments that are ineffective and sometimes even destructive. Examples include:</p>
            <ul>
                <li><span className="bold">Work Environments</span></li>
                <li><span className="bold">Adult Relationships</span></li>
                <li><span className="bold">Insensitive Individuals</span></li>
            </ul>
        </>
    )
}

function slide11() {
    return(
        <>
            <h3 className="slideHeading">Work Environments</h3>
            <p>Adults’ work environments often excessively punish behaviors that don’t meet the workplace standards, fail to reinforce effective behaviors, and fail to communicate respect. Any or all of these factors can lead to high emotionality in a vulnerable person. Although impulsive behaviors may not show up in the work setting, the stress of the workplace may lead to excess impulsivity outside work.</p>
        </>
    )
}

function slide12(){
    return(
        <>
            <h3 className="slideHeading">Adult Relationships</h3>
            <p>Many adult relationships can lead to high emotionality. This is particularly the case when partners or friends ignore effective behaviors and excessively punish unwanted behaviors. For many individuals who are vulnerable, an environment without nurturing and caring can lead to extreme sadness, loneliness, shame, and other extreme emotions. At times, sadness may spark high anger as well.</p>
        </>
    )
}

function slide13() {
    return(
        <>
            <h3 className="slideHeading">Insensitive Individuals</h3>
            <p>Insensitive individuals who are very important to a person who is overly sensitive to invalidation can set off extreme emotional reactions when they invalidate the person’s core beliefs, hopes, goals, accomplishments, or personal characteristics.</p>
            <div className="thinkAboutIt">
                <h3><FaLightbulb /> Think About It!</h3>
                <p>Have you ever been or are you currently in an ineffective environment?</p>
            </div>
        </>
    )
}

function slide14() {
    return(
        <>
            <h3 className="slideHeading">It's the Transaction That Counts</h3>
            <p>A primary function of emotions is to communicate. When the communication is not received, the sender ordinarily escalates the communication. The more important the communication, the more the sender escalates it.</p>
            <br />
            <p>At the same time, however, if the receiver does not believe the communication, each time the individual tries to communicate the same thing, the receiver will escalate invalidation.</p>
            <br />
            <p>As emotions escalate, invalidation escalates further—and as invalidation escalates further, emotions and their communication escalate further in turn.</p>
            <br />
            <p>Let's take a look at an example of an invalidating transaction:</p>
        </>
    )
}

function slide15() {
    return(
        <>
            <h3 className="slideHeading">Invalidation looks a lot like the following interchange:</h3>
            <p><span className="bold">SENDER:</span>There's a fire.</p>
            <br />
            <p><span className="bold">RECEIVER:</span> You're overreacting. What's wrong with you? There's no fire.</p>
            <br />
            <p><span className="bold">SENDER:</span> Um, there's a fire here!!</p>
            <br />
            <p><span className="bold">RECEIVER:</span> You're crazy! Just blow it out!!</p>
            <br />
            <p>(After many cycles of being invalidated, the sender responds in one of two ways:)</p>
            <br />
            <p><span className="bold">SENDER:</span> Ok, there is no fire. (What's wrong with me??)</p>
            <br />
            <p><span className="bold">RECEIVER:</span> Good job!</p>
            <br />
            <p>(Or:)</p>
            <br />
            <p><span className="bold">SENDER:</span> FIRE!!! FIRE!!! HELP!!!!</p>
            <br />
            <p><span className="bold">RECEIVER:</span> Oh no!! What can I do to help??</p>
            <br />
            <p>
                Often, people who have been invalidated learn to exaggerate their communications to get the receiver to believe them. Unfortunately, once someone gets into this habit, the environment normally gets in the habit of ignoring that person's communications.
            </p>
            <div className="thinkAboutIt">
                <h3><FaLightbulb /> Think About It!</h3>
                <p>Think of a similar transaction like from your own life. When were you the one calling "Fire!" and when were you the one invalidating someone else's cry of "Fire!"? </p>
            </div>
        </>
    )
}

function slide16() {
    return(
        <>
            <h3 className="slideHeading">Conclusion</h3>
            <p>In summary, each of us is influenced by our biological makeup, which then influences our behavior, which then influences our environment, which in turn reacts to and influences us in a never-ending transactional relationship over time. Such a transactional point of view is largely incompatible with blame, although it is not incompatible with identifying important causal factors in our own and others’ behavior.</p>
            <br />
            <p>Now that you've got an understanding of biosocial theory, let's put what you've learned to practice!</p>
        </>
    )
}