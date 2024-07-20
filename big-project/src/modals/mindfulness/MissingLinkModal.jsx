import { RiCloseLine } from "react-icons/ri";

export default function MissingLinkModal({setMissingLinksIsOpen}){
    return(
        <>
            <div className="centered">
                <div className="modal">
                <div className="modalHeader">
                        <h5 className="heading">Missing Links Analysis</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setMissingLinksIsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }}/>
                    </button>

                    <div className="modalContent">
                        <div className="worksheetDescription">
                            <p>Use this sheet to first figure out what got in the way of doing things you needed or hoped to do, or things you agreed to do or others expected you to do. Then use that information to problem-solve, so that you will be more likely to do what is needed, hoped for, or expected next time.</p>
                        </div>
                        <hr />

                        <div className="answerBox">
                            <h3>1. Did I know what effective behavior was needed or expected?:</h3>
                            <div className="checkboxes">
                                <label className="checkboxContainer" htmlFor="yesEffective">
                                    Yes
                                    <input type="checkbox" name="yesEffective" id="yesEffective" />
                                    <span className="checkmark"></span>
                                </label>
        
                                <label className="checkboxContainer" htmlFor="noEffective">
                                    No
                                    <input type="checkbox" name="noEffective" id="noEffective" />
                                    <span className="checkmark"></span>
                                </label>
                                
                            </div>
                            <h3>If NO, what got in the way of knowing?:</h3>
                            <textarea name="effectivenessInterference" id="effectivenessInterference" placeholder="Example: I was too overwhelmed."></textarea>
                            <h3>Describe problem solving:</h3>
                            <textarea name="problemSolving" id="problemSolving" placeholder="Example: Asking my friend for help so I didn't have to do it alone."></textarea>
                        </div>

                        <div className="answerBox">
                            <h3>2. If YES to question 1, was I willing to do what was needed?:</h3>
                            <div className="checkboxes">
                                <label className="checkboxContainer" htmlFor="yesNeeded">
                                    Yes
                                    <input type="checkbox" name="yesNeeded" id="yesNeeded" />
                                    <span className="checkmark"></span>
                                </label>
        
                                <label className="checkboxContainer" htmlFor="noNeeded">
                                    No
                                    <input type="checkbox" name="noNeeded" id="noNeeded" />
                                    <span className="checkmark"></span>
                                </label>
                                
                            </div>
                            <h3>If NO, what got in the way of wanting to do what was needed?:</h3>
                            <textarea name="wantingInterference" id="wantingInterference" placeholder="Example: I felt demoralized."></textarea>
                            <h3>Describe problem solving:</h3>
                            <textarea name="problemSolving2" id="problemSolving2" placeholder="Example: Practicing opposite action."></textarea>
                        </div>

                        <div className="answerBox">
                            <h3>3. If YES to question 2, did the thought of doing what was needed or expected ever enter my mind?:</h3>
                            <div className="checkboxes">
                                <label className="checkboxContainer" htmlFor="yesThinking">
                                    Yes
                                    <input type="checkbox" name="yesThinking" id="yesThinking" />
                                    <span className="checkmark"></span>
                                </label>
        
                                <label className="checkboxContainer" htmlFor="noThinking">
                                    No
                                    <input type="checkbox" name="noThinking" id="noThinking" />
                                    <span className="checkmark"></span>
                                </label>
                                
                            </div>
                            <h3>If NO, describe problem solving:</h3>
                            <textarea name="problemSolving3" id="problemSolving3" placeholder="Example: Practicing coping ahead."></textarea>
                        </div>

                        <div className="answerBox">
                            <h3>4. If YES to question 3, what got in the way of doing what was needed or expected right away?:</h3>
                            <textarea name="rightAwayInterference" id="rightAwayInterference" placeholder="Example: I was too tired."></textarea>
                            <h3>Describe problem solving:</h3>
                            <textarea name="problemSolving4" id="problemSolving4" placeholder="Example: Doing pros and cons."></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}