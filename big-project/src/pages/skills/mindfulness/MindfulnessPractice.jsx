import { Link } from "react-router-dom";

export default function MindfulnessPractice() {
    return(
        <div className="skillsPage">
            <div className="skillsIntro">
                <h1>Mindfulness Skills</h1>
                <p>Begin your DBT journey here. Orient yourself to skills practice, learn how to analyze behavior, practice core mindfulness skills, and check out other perspectives on mindfullness.</p>
            </div>
            <div className="skillsList">
                <Link to="/practice/mindfulness/orientation_behavior_analysis">
                    <div className="skillsCard">
                        <h2>Orientation and Behavior Analysis</h2>
                    </div>
                </Link>
                <Link to="/practice/mindfulness/core_mindfulness_skills">
                <div className="skillsCard">
                    <h2>Core Mindfulness Skills</h2>
                </div>
                </Link>
                <Link to="/practice/mindfulness/other_perspectives">
                <div className="skillsCard">
                    <h2>Other Perspectives on Mindfulness</h2>
                </div>
                </Link>
            </div>
        </div>
    )
}