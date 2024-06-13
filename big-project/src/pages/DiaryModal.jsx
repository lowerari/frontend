import { RiCloseLine } from "react-icons/ri";
import { CiCircleInfo } from "react-icons/ci";

export default function DiaryModal({ setIsOpen }) {
    return(
        <>
            <div className="darkBG" onClick={() => setIsOpen(false)} />
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className="heading">Diary for: <span>07/06/2024</span></h5>
                    </div>
                    <button className="closeBtn" onClick={() => setIsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>
                    <div className="modalContent">
                        <div className="ratingsContainer">
                            <p>Rate 1 (lowest) to 5 (highest):</p>
                            <div className="urgesRatings">
                                <div className="listHeading">Urges:</div>
                                <div className="urgesList">
                                    <div className="urge">
                                        <div className="urgeName">Commit Suicide:</div>
                                        <div className="radio">
                                            <input type="radio" id="1suicideUrge" name="suicideUrge" value="1" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="1suicideUrge">1</label>
                                        <div className="radio">
                                            <input type="radio" id="2suicideUrge" name="suicideUrge" value="2" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="2suicideUrge">2</label>
                                        <div className="radio">
                                            <input type="radio" id="3suicideUrge" name="suicideUrge" value="3" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="3suicideUrge">3</label>
                                        <div className="radio">
                                            <input type="radio" id="4suicideUrge" name="suicideUrge" value="4" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="4suicideUrge">4</label>
                                        <div className="radio">
                                            <input type="radio" id="5suicideUrge" name="suicideUrge" value="5" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="5suicideUrge">5</label>
                                    </div>
                                    <div className="urge">
                                        <div className="urgeName">Self-Harm:</div>
                                        <div className="radio">
                                            <input type="radio" id="1harmUrge" name="harmUrge" value="1" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="1harmUrge">1</label>
                                        <div className="radio">
                                            <input type="radio" id="2harmUrge" name="harmUrge" value="2" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="2harmUrge">2</label>
                                        <div className="radio">
                                            <input type="radio" id="3harmUrge" name="harmUrge" value="3" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="3harmUrge">3</label>
                                        <div className="radio">
                                            <input type="radio" id="4harmUrge" name="harmUrge" value="4" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="4harmUrge">4</label>
                                        <div className="radio">
                                            <input type="radio" id="5harmUrge" name="harmUrge" value="5" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="5harmUrge">5</label>
                                    </div>
                                    <div className="urge">
                                        <div className="urgeName">Use Drugs:</div>
                                        <div className="radio">
                                            <input type="radio" id="1drugsUrge" name="drugsUrge" value="1" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="1drugsUrge">1</label>
                                        <div className="radio">
                                            <input type="radio" id="2drugsUrge" name="drugsUrge" value="2" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="2drugsUrge">2</label>
                                        <div className="radio">
                                            <input type="radio" id="3drugsUrge" name="drugsUrge" value="3" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="3drugsUrge">3</label>
                                        <div className="radio">
                                            <input type="radio" id="4drugsUrge" name="drugsUrge" value="4" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="4drugsUrge">4</label>
                                        <div className="radio">
                                            <input type="radio" id="5drugsUrge" name="drugsUrge" value="5" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="5drugsUrge">5</label>
                                    </div>
                                </div>
                            </div>
                            <div className="emotionsRatings">
                            <div className="listHeading">Feelings:</div>
                                <div className="urgesList">
                                    <div className="urge">
                                        <div className="urgeName">Emotion Misery:</div>
                                        <div className="radio">
                                            <input type="radio" id="1emotionMisery" name="emotionMisery" value="1" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="1emotionMisery">1</label>
                                        <div className="radio">
                                            <input type="radio" id="2emotionMisery" name="emotionMisery" value="2" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="2emotionMisery">2</label>
                                        <div className="radio">
                                            <input type="radio" id="3emotionMisery" name="emotionMisery" value="3" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="3emotionMisery">3</label>
                                        <div className="radio">
                                            <input type="radio" id="4emotionMisery" name="emotionMisery" value="4" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="4emotionMisery">4</label>
                                        <div className="radio">
                                            <input type="radio" id="5emotionMisery" name="emotionMisery" value="5" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="5emotionMisery">5</label>
                                    </div>
                                    <div className="urge">
                                        <div className="urgeName">Physical Misery:</div>
                                        <div className="radio">
                                            <input type="radio" id="1physicalMisery" name="physicalMisery" value="1" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="1physicalMisery">1</label>
                                        <div className="radio">
                                            <input type="radio" id="2physicalMisery" name="physicalMisery" value="2" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="2physicalMisery">2</label>
                                        <div className="radio">
                                            <input type="radio" id="3physicalMisery" name="physicalMisery" value="3" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="3physicalMisery">3</label>
                                        <div className="radio">
                                            <input type="radio" id="4physicalMisery" name="physicalMisery" value="4" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="4physicalMisery">4</label>
                                        <div className="radio">
                                            <input type="radio" id="5physicalMisery" name="physicalMisery" value="5" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="5physicalMisery">5</label>
                                    </div>
                                    <div className="urge">
                                        <div className="urgeName">Joy:</div>
                                        <div className="radio">
                                            <input type="radio" id="1joyRating" name="joyRating" value="1" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="1joyRating">1</label>
                                        <div className="radio">
                                            <input type="radio" id="2joyRating" name="joyRating" value="2" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="2joyRating">2</label>
                                        <div className="radio">
                                            <input type="radio" id="3joyRating" name="joyRating" value="3" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="3joyRating">3</label>
                                        <div className="radio">
                                            <input type="radio" id="4joyRating" name="joyRating" value="4" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="4joyRating">4</label>
                                        <div className="radio">
                                            <input type="radio" id="5joyRating" name="joyRating" value="5" />
                                            <span className="radioButton"></span>
                                        </div>
                                        <label htmlFor="5joyRating">5</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ratingsContainer">
                            <p>Number of times:</p>
                            <div className="drugsContainer">
                                <div className="listHeading">Substances used:</div>
                                <div className="drug">
                                    <label htmlFor="alcohol">Alcohol:</label>
                                    <input type="number" id="alcohol" name="alcohol" min="0" />
                                </div>
                                <div className="drug">
                                    <label htmlFor="illegalDrugs">Illegal Drugs:</label>
                                    <input type="number" id="illegalDrugs" name="illegalDrugs" min="0" />
                                </div>
                                <div className="drug">
                                    <label htmlFor="prescriptionMeds">Prescription Meds:</label>
                                    <input type="number" id="prescriptionMeds" name="prescriptionMeds" min="0" />
                                </div>
                                <div className="drug">
                                    <label htmlFor="overTheCounter">Over-The-Counter:</label>
                                    <input type="number" id="overTheCounter" name="overTheCounter" min="0" />
                                </div>
                            </div>
                            <div className="drugsContainer">
                                <div className="drug">
                                    <label htmlFor="selfHarm">Self-Harm:</label>
                                    <input type="number" id="selfHarm" name="selfHarm" min="0" />
                                </div>
                            </div>
                            <div className="drugsContainer">
                                <div className="drug">
                                    <label htmlFor="lies">Lied:</label>
                                    <input type="number" id="lies" name="lies" min="0" />
                                </div>
                            </div>
                        </div>
                        <div className="ratingsContainer">
                            <p>Used skills: <span className="infoButton"><CiCircleInfo /></span></p>
                            <div className="skillsUseRadioButtons">
                                <div className="radio">
                                    <input type="radio" id="1skillsRating" value="1" />
                                    <span className="radioButton"></span>
                                </div>
                                <label htmlFor="1skillsRating">1</label>
                                <div className="radio">
                                    <input type="radio" id="2skillsRating" value="2" />
                                    <span className="radioButton"></span>
                                </div>
                                <label htmlFor="2skillsRating">2</label>
                                <div className="radio">
                                    <input type="radio" id="3skillsRating" value="3" />
                                    <span className="radioButton"></span>
                                </div>
                                <label htmlFor="3skillsRating">3</label>
                                <div className="radio">
                                    <input type="radio" id="4skillsRating" value="4" />
                                    <span className="radioButton"></span>
                                </div>
                                <label htmlFor="4skillsRating">4</label>
                                <div className="radio">
                                    <input type="radio" id="5skillsRating" value="5" />
                                    <span className="radioButton"></span>
                                </div>
                                <label htmlFor="5skillsRating">5</label>
                                <div className="radio">
                                    <input type="radio" id="6skillsRating" value="6" />
                                    <span className="radioButton"></span>
                                </div>
                                <label htmlFor="6skillsRating">6</label>
                                <div className="radio">
                                    <input type="radio" id="7skillsRating" value="7" />
                                    <span className="radioButton"></span>
                                </div>
                                <label htmlFor="7skillsRating">7</label>
                            </div>
                        </div>
                        <div className="ratingsContainer">
                            <p>Skills Practiced:</p>
                            <div className="skillsPracticedList">
                                <label className="container">One
                                    <input type="checkbox" name="radio"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">Two
                                    <input type="checkbox" name="radio"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">Three
                                    <input type="checkbox" name="radio"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">Four
                                    <input type="checkbox" name="radio"/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div className="ratingsContainer">
                            <p>Notes:</p>
                            <div className="notesContainer">
                                <textarea name="notes" id="notes" cols="45" rows="10"></textarea>
                            </div>
                        </div>
                        <div className="invisodiv"></div>
                    </div>
                    <div className="modalActions">
                        <div className="actionsContainer">
                            <button className="deleteBtn" onClick={() => setIsOpen(false)}>
                                Save Diary
                            </button>
                            <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    )
}