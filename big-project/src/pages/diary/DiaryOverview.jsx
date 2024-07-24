import { useState } from "react"
// import { Link } from "react-router-dom"
// import { IoReturnDownBack } from "react-icons/io5";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { Chart } from "react-google-charts";


import DiaryModal from "../../modals/DiaryModal"

export default function DiaryOverview() {
    const [isOpen, setIsOpen] = useState(false);
    const [urgesChartIsOpen, setUrgesChartIsOpen] = useState(true);
    const [emotionsChartIsOpen, setEmotionsChartIsOpen] = useState(false);


    // const data = [
    //     {week: 'Week 1', suicide: 3, selfharm: 2, drugs: 1},
    //     {week: 'Week 2', suicide: 2, selfharm: 2, drugs: 0},
    //     {week: 'Week 3', suicide: 2, selfharm: 1, drugs: 1},
    //     {week: 'Week 4', suicide: 1, selfharm: 0, drugs: 0},
    //     {week: 'Week 5', suicide: 0, selfharm: 0, drugs: 0},
    // ]

    const urgesData = [
        ["Week", "Suicide", "Self-Harm", "Drugs"],
        ["1", 3, 5, 1],
        ["2", 2, 4, 1],
        ["3", 1, 3, 0],
        ["4", 3, 4, 2],
    ];

    const emotionsData = [
        ["Week", "Emotion Misery", "Physical Misery", "Joy"],
        ["1", 5, 2, 0],
        ["2", 4, 0, 1],
        ["3", 3, 1, 2],
        ["4", 5, 3, 1],
    ]

    const urgesOptions = {
        title: "Urges",
        curveType: "none",
        legend: { position: "bottom" },
        colors: ['#9E788F', '#F4A261', '#A9B3CE'],
        hAxis: {title: 'Week', textPosition: 'out'},
        vAxis: {
            viewWindow: {
                min: 0,
                max: 5
            }
        },
    };

    const emotionsOptions = {
        title: "Emotions",
        curveType: "none",
        legend: { position: "bottom" },
        colors: ['#9E788F', '#F4A261', '#A9B3CE'],
        hAxis: {title: 'Week', textPosition: 'out'},
        vAxis: {
            viewWindow: {
                min: 0,
                max: 5
            }
        },
    }

    return (
        <div className="DiaryOverview">
            {/* <Link to='/profile'>
                <div className="backButton">
                    Back 
                    <div className="backArrow">
                        <IoReturnDownBack />
                    </div>
                </div>
            </Link> */}
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
                    <div className="chart">
                        {/* <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data} width="100%" height="100%">
                                <XAxis dataKey="week" />
                                <YAxis domain={[0, 5]} type="number" />
                                <CartesianGrid stroke="grey" strokeDasharray="5 5" />
                                <Line dataKey={'suicide'} stroke="purple" strokeWidth={3} />
                                <Line dataKey={'selfharm'} stroke="orange" strokeWidth={3} />
                                <Line dataKey={'drugs'} stroke="lightblue" strokeWidth={3} />
                                <Legend />
                            </LineChart>
                        </ResponsiveContainer> */}
                        <div className="bigger-chart">
                            {urgesChartIsOpen && <Chart
                                chartType="LineChart"
                                width="100%"
                                height="100%"
                                data={urgesData}
                                options={urgesOptions}
                            />}
                            {emotionsChartIsOpen && <Chart
                                chartType="LineChart"
                                width="100%"
                                height="100%"
                                data={emotionsData}
                                options={emotionsOptions}
                            />}
                        </div>
                    </div>
                    <div className="toggleButtonsContainer">
                        <div 
                            className="urgesButton"
                            onClick={() => {
                                setUrgesChartIsOpen(true);
                                setEmotionsChartIsOpen(false);
                            }}
                        >Urges</div>
                        <div 
                            className="emotionsButton"
                            onClick={() => {
                                setUrgesChartIsOpen(false);
                                setEmotionsChartIsOpen(true);
                            }}
                        >Emotions</div>
                        <div className="drugsButton">Drugs/Medications</div>
                        <div className="actionsButton">Actions</div>
                    </div>
                </div>
                
            </div>
            {isOpen && <DiaryModal setIsOpen={setIsOpen} />}
        </div>
    )
}