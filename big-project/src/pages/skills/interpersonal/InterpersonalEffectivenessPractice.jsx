import { Link } from 'react-router-dom';

export default function InterpersonalEffectivenessPractice() {
    return(
        <div className="skillsPage">
            <div className="skillsIntro">
                <h1>Interpersonal Effectiveness Skills</h1>
                <p>Practice skills to help you deal with other people in an effective way. Challenge myths about the best way to obtain objectives. Learn how to ask for things and say "no" effectively. Discover how to build lasting, positive relationships while ending destructive ones. Finally, learn how to validate yourself and others and change unwanted behavior using dialectics.  </p>
            </div>
            <div className="skillsList">
                <Link to="/practice/interpersonal_effectiveness/goals_and_factors">
                    <div className="skillsCard">
                        <h2>Goals and Factors that Interfere</h2>
                    </div>
                </Link>
                <Link to="/practice/interpersonal_effectiveness/obtaining_objectives">
                    <div className="skillsCard">
                        <h2>Obtaining Objectives Skillfully</h2>
                    </div>
                </Link>
                <Link to="/practice/interpersonal_effectiveness/building_relationships">
                    <div className="skillsCard">
                        <h2>Building Relationships and Ending Destructive Ones</h2>
                    </div>
                </Link>
                <Link to="/practice/interpersonal_effectiveness/walking_the_middle_path">
                    <div className="skillsCard">
                        <h2>Walking the Middle Path</h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}