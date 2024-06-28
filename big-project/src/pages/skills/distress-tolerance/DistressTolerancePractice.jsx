import { Link } from 'react-router-dom';

export default function DistressTolerancePractice() {
    return(
        <div className="skillsPage">
            <div className="skillsIntro">
                <h1>Distress Tolerance Skills</h1>
                <p>Practice skills to help manage and survive painful moments. Get through emotional crises with healthy coping mechanisms, learn how to accept painful truths and motivate yourself to keep going. If you struggle with addiction, learn how to overcome urges and replace unhealthy coping mechanisms with helpful ones. </p>
            </div>
            <div className="skillsList">
                <Link to="/practice/distress_tolerance/crisis_survival">
                <div className="skillsCard">
                    <h2>Crisis Survival Skills</h2>
                </div>
                </Link>
                <Link to="/practice/distress_tolerance/reality_acceptance">
                <div className="skillsCard">
                    <h2>Reality Acceptance Skills</h2>
                </div>
                </Link>
                <Link to="/practice/distress_tolerance/when_crisis_is_addiction">
                <div className="skillsCard">
                    <h2>When the Crisis is Addiction</h2>
                </div>
                </Link>
            </div>
        </div>
    )
}