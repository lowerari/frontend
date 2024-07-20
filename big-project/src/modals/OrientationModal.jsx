import { RiCloseLine } from "react-icons/ri";

export default function OrientationModal({ setOrientationIsOpen }) {
    return (
        <>
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className="heading">Pros and Cons of Using Skills</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setOrientationIsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }}/>
                    </button>

                    <div className="modalContent">
                        <div className="worksheetDescription">
                            <p>Use this worksheet to evaluate the pros and cons of using skills to reach your goals. This will help you to motivate yourself to practice skills by helping you figure out what is the most effective way of achieving what YOU want.</p>
                        </div>
                        <hr />

                        <div className="describeBox">
                            <h3>Describe the situation or problem:</h3>
                            <textarea name="problemDescription" id="problemDescription" placeholder="Example: My emotions are overwhelming me and causing me to lose control."></textarea>
                        </div>
                        <div className="describeBox">
                            <h3>Describe your goal in this situation:</h3>
                            <textarea name="goalDescription" id="goalDescription" placeholder="Example: To better control my emotions and use positive coping mechanisms."></textarea>
                        </div>

                        <div className="instructions">
                            <p>
                                List the pros and cons of usings skills to reach your goal.
                            </p>
                            <p>
                                Then, list the pros and cons of NOT using skills, or not using them completely.
                            </p>
                            <p>
                                Check the facts to ensure that you are correct in your assessment of the advantages and disadvantages of using skills.
                            </p>
                            <p>
                                Refer back to this worksheet when you are feeling unmotivated, or when you are considering not using skills.
                            </p>
                        </div>

                        <div className="prosBox">
                            <h3>
                                Pros:
                            </h3>
                            <h4>
                                Using Skills:
                            </h4>
                            <textarea name="usingSkillsPros" id="usingSkillsPros" placeholder="Example: I can improve my emotion regulation over time."></textarea>
                            <h4>
                                Not Using Skills:
                            </h4>
                            <textarea name="notUsingSkillsPros" id="notUsingSkillsPros" placeholder="Example: It requires no extra effort."></textarea>
                        </div>

                        <div className="consBox">
                            <h3>Cons:</h3>
                            <h4>
                                Using Skills:
                            </h4>
                            <textarea name="usingSkillsCons" id="usingSkillsCons" placeholder="Example: The effects aren't immediate; I have to work hard."></textarea>
                            <h4>
                                Not Using Skills:
                            </h4>
                            <textarea name="notUsingSkillsCons" id="notUsingSkillsCons" placeholder="Example: My problems will never get any better."></textarea>
                        </div>

                        <div className="finalThoughts">
                            <h3>What did you decide to do in this situation?</h3>
                            <textarea name="finalDecision" id="finalDecision"></textarea>
                            <h3>Is this the best decision?</h3>
                            <textarea name="bestDecision" id="bestDecision"></textarea>
                        </div>

                        <div className="invisodiv"></div>

                    </div>

                    <div className="modalActions">
                        <div className="actionsContainer">
                            <button className="deleteBtn" onClick={() => setOrientationIsOpen(false)}>
                                Save
                            </button>
                            <button className="cancelBtn" onClick={() => setOrientationIsOpen(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}