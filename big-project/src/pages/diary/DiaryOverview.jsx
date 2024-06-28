import { useState } from "react"
import { Link } from "react-router-dom"
import { IoReturnDownBack } from "react-icons/io5";

import DiaryModal from "../../modals/DiaryModal"

export default function DiaryOverview() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="DiaryOverview">
            <Link to='/profile'>
                <div className="backButton">
                    Back 
                    <div className="backArrow">
                        <IoReturnDownBack />
                    </div>
                </div>
            </Link>
            <div className="diaryDates">
                <div className="diaryDatesSelector">
                    <label htmlFor="datesSelector">Diary for:</label>
                    <div className="selectorContainer">
                        <select name="datesSelector" id="datesSelector">
                            <option value="10/06/2024-16/06/2024">10/06/2024-16/06/2024</option>
                        </select>
                    </div>
                </div>
                <div className="diaryDatesView">
                    <div className="day-icons">
                        <div className="day active">M</div>
                        <div className="day active">T</div>
                        <div className="day active">W</div>
                        <div className="day">Th</div>
                        <div className="day">F</div>
                        <div className="day">Sa</div>
                        <div className="day">Su</div>
                    </div>
                    <div className="newDiaryButtonContainer">
                        <div className="newDiaryButton" onClick={() => setIsOpen(true)}>+New Diary</div>
                    </div>
                </div>
            </div>
            <div className="weeklyOverview">
                <p>Weekly Overview:</p>
                <div className="statsContainer">
                    <div className="statTitle">Urges</div>
                    <div className="statInfo">
                        <div className="urgeContainer">Commit Suicide: <span>#/5</span></div>
                        <div className="urgeContainer">Self-Harm: <span>#/5</span></div>
                        <div className="urgeContainer">Use Drugs: <span>#/5</span></div>
                    </div>
                </div>
                <div className="statsContainer">
                    <div className="statTitle">Emotions</div>
                    <div className="statInfo">
                        <div className="emotionsContainer">Emotional Misery: <span>#/5</span></div>
                        <div className="emotionsContainer">Physical Misery: <span>#/5</span></div>
                        <div className="emotionsContainer">Joy: <span>#/5</span></div>
                    </div>
                </div>
                <div className="statsContainer">
                    <div className="statTitle">Drugs/Medications</div>
                    <div className="statInfo">
                        <div className="drugsContainer">Alcohol: <span>#</span></div>
                        <div className="drugsContainer">Illegal Drugs: <span>#</span></div>
                        <div className="drugsContainer">Prescription Meds: <span>#</span></div>
                        <div className="drugsContainer">Over-The-Counter: <span>#</span></div>
                    </div>
                </div>
                <div className="statsContainer">
                    <div className="statTitle">Actions</div>
                    <div className="statInfo">
                        <div className="actionsContainer">Self-Harm: <span>#</span></div>
                        <div className="actionsContainer">Lied: <span>#</span></div>
                    </div>
                </div>
                <div className="statsContainer">
                    <div className="statTitle">Skills Practiced</div>
                    <div className="statInfo">
                        <div className="skillsPracticedContainer">Skill 1</div>
                        <div className="skillsPracticedContainer">Skill 2</div>
                        <div className="skillsPracticedContainer">Skill 3</div>
                    </div>
                </div>
            </div>
            <div className="progressReport">
                <p>Progress Report:</p>
                <div className="chartContainer">
                    <div className="chart">A BIG OL CHART GOES HERE</div>
                    <div className="toggleButtonsContainer">
                        <div className="urgesButton">Urges</div>
                        <div className="emotionsButton">Emotions</div>
                        <div className="drugsButton">Drugs/Medications</div>
                        <div className="actionsButton">Actions</div>
                    </div>
                </div>
                
            </div>
            {isOpen && <DiaryModal setIsOpen={setIsOpen} />}
        </div>
    )
}