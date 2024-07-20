import { RiCloseLine } from "react-icons/ri";

export default function ChainAnalysisModal({ setChainAnalysisIsOpen }) {
    return(
        <>
           <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className="heading">Chain Analysis of Problem Behavior</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setChainAnalysisIsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }}/>
                    </button>

                    <div className="modalContent">
                        <div className="worksheetDescription">
                            <p>Use this worksheet to evaluate the chain of events that led to a problem behavior. This will help you to understand the function of the behavior, and help you to identify the links in the chain that you can target to change the behavior. Use the examples as a guide.</p>
                        </div>
                        <hr />

                        <div className="answerBox">
                            <h3>1. What is the PROBLEM BEHAVIOR that I am analyzing?:</h3>
                            <textarea name="problemBehavior" id="problemBehavior" placeholder="Example: Drinking too much and driving drunk"></textarea>
                        </div>
                        <div className="answerBox">
                            <h3>2. What PROMPTING EVENT in the environment started me on the chain to my problem behavior? Include what happened RIGHT BEFORE you had the urge/thought:</h3>
                            <textarea name="promptingEvent" id="promptingEvent" placeholder="Example: My sister from out of town called me and said she was not going to come visit me the next week like she had said she would, because her husband had an important business party he wanted her to attend with him."></textarea>
                        </div>
                        <div className="answerBox">
                            <h3>3. Describe the things in myself and my environment that made me VULNERABLE:</h3>
                            <textarea name="vulnerabilityPrompt" id="vulnerabilityPrompt" placeholder="Example: My boyfriend said he had to take a business trip sometime in the next month."></textarea>
                        </div>
                        <div className="answerBox">
                            <h3>4. List the chain of events. Remember the possible types of links in the chain: Actions, Body sensations, Cognitions/Thoughts, Feelings, Events (in the environment):</h3>
                            <label htmlFor="firstLink">1st.</label>
                            <textarea className="links" name="firstLink" id="firstLink" placeholder="Example: I felt hurt and started sobbing on the phone with my sister and was angry with her."></textarea>
                            <label htmlFor="secondLink">2nd.</label>
                            <textarea className="links" name="secondLink" id="secondLink" placeholder="Example: I thought 'I can't stand it. No one loves me.'"></textarea>
                            <label htmlFor="thirdLink">3rd.</label>
                            <textarea className="links" name="thirdLink" id="thirdLink" placeholder="Example: I felt very ashamed once I hung up the phone."></textarea>
                            <label htmlFor="fourthLink">4th.</label>
                            <textarea className="links" name="fourthLink" id="fourthLink" placeholder="Example: I thought 'My life is useless. No one will ever be there for me.'"></textarea>
                            <label htmlFor="fifthLink">5th.</label>
                            <textarea className="links" name="fifthLink" id="fifthLink" placeholder="Example: I tried watching TV, but nothing was on that I liked."></textarea>
                            <label htmlFor="sixthLink">6th.</label>
                            <textarea className="links" name="sixthLink" id="sixthLink" placeholder="Example: I started feeling agitated and thought 'I can't stand this.'"></textarea>
                            <label htmlFor="seventhLink">7th.</label>
                            <textarea className="links" name="seventhLink" id="seventhLink" placeholder="Example: I decided to drink a glass of wine to feel better, but I drank two whole bottles."></textarea>
                            <label htmlFor="eigthLink">8th.</label>
                            <textarea className="links" name="eigthLink" id="eigthLink" placeholder="Example: I got in my car and drove to a late night concert."></textarea>
                            <label htmlFor="ninthLink">9th.</label>
                            <textarea className="links" name="ninthLink" id="ninthLink" placeholder="Example: I was stopped by the police and arrested for DUI."></textarea>
                        </div>
                        <div className="answerBox">
                            <h3>5. What were the consequences in the environment?:</h3>
                            <textarea name="environmentConsequences" id="environmentConsequences" placeholder="Example: Short term: I had to spend the night in jail. Long term: My boyfriend has less trust in me; my sister is upset about it."></textarea>
                            <h3>And in myself?:</h3>
                            <textarea name="selfConsequences" id="selfConsequences" placeholder="Example: Short term: I feel very ashamed and guilty. Long Term: My insurance payments will go up and I may have trouble getting a job."></textarea>
                            <h3>What harm did the problem behavior cause?:</h3>
                            <textarea name="harmCaused" id="harmCaused" placeholder="Example: It hurts me by giving me a DUI record. My sister feels guilty for upsetting me."></textarea>
                        </div>
                        <div className="answerBox">
                            <h3>6. List new, more skillful behaviors to replace ineffective behaviors.</h3>
                            <label htmlFor="firstNewBehavior">1st.</label>
                            <textarea className="links" name="firstNewBehavior" id="firstNewBehavior" placeholder="Example: Listen to why my sister could not come."></textarea>
                            <label htmlFor="secondNewBehavior">2nd.</label>
                            <textarea className="links" name="secondNewBehavior" id="secondNewBehavior" placeholder="Example: Remember that my sister and boyfriend love me."></textarea>
                            <label htmlFor="thirdNewBehavior">3rd.</label>
                            <textarea className="links" name="thirdNewBehavior" id="thirdNewBehavior" placeholder="Example: Check the facts: Is my sister going to reject me over this?"></textarea>
                            <label htmlFor="fourthNewBehavior">4th.</label>
                            <textarea className="links" name="fourthNewBehavior" id="fourthNewBehavior" placeholder="Example: Call my sister back and apologize for being angry."></textarea>
                            <label htmlFor="fifthNewBehavior">5th.</label>
                            <textarea className="links" name="fifthNewBehavior" id="fifthNewBehavior" placeholder="Example: Download a movie, play a game, or call a friend instead."></textarea>
                            <label htmlFor="sixthNewBehavior">6th.</label>
                            <textarea className="links" name="sixthNewBehavior" id="sixthNewBehavior" placeholder="Example: Try TIP skills to bring down emotional arousal."></textarea>
                            <label htmlFor="seventhNewBehavior">7th.</label>
                            <textarea className="links" name="seventhNewBehavior" id="seventhNewBehavior" placeholder="Example: Walk down the street and have dinner out."></textarea>
                            <label htmlFor="eigthNewBehavior">8th.</label>
                            <textarea className="links" name="eigthNewBehavior" id="eigthNewBehavior" placeholder="Example: Call my boyfriend and ask him to come over for a while."></textarea>
                            <label htmlFor="ninthNewBehavior">9th.</label>
                            <textarea className="links" name="ninthNewBehavior" id="ninthNewBehavior" placeholder="Example: Take a long bath, check the facts, remember emotions pass, call my therapist."></textarea>
                        </div>
                        <div className="answerBox">
                            <h3>7. Prevention Plans: Ways to reduce my vulnerability in the future:</h3>
                            <textarea name="preventionPlan" id="preventionPlan" placeholder="Example: Make plans for how to cope whenever my boyfriend is out of town."></textarea>
                            <h3>Ways to prevent the precipitating event from happening again:</h3>
                            <textarea name="preventPrecipitating" id="preventPrecipitating" placeholder="Example: I can't prevent the precipitating event, so I need to practice coping ahead and have plans to manage when I'm alone."></textarea>
                        </div>
                        <div className="answerBox">
                            <h3>8. Plans to repair, correct, and overcorrect the harm:</h3>
                            <textarea name="repairPlans" id="repairPlans" placeholder="Example: Apologize to my sister and reassure her that she has the right to change plans. Work with her to plan a new time for a visit. Ask if it would be easier if I came to visit her."></textarea>
                        </div>

                        <div className="invisodiv"></div>

                    </div>

                    <div className="modalActions">
                        <div className="actionsContainer">
                            <button className="deleteBtn" onClick={() => setChainAnalysisIsOpen(false)}>
                                Save
                            </button>
                            <button className="cancelBtn" onClick={() => setChainAnalysisIsOpen(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>

                </div>
            </div> 
        </>
    )
}