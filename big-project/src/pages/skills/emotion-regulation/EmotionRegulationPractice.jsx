import { Link } from 'react-router-dom';

export default function EmotionRegulationPractice() {
    return(
        <div className="skillsPage">
            <div className="skillsIntro">
                <h1>Emotion Regulation Skills</h1>
                <p>Practice skills to help regulate and change your emotional responses. Review the pros and cons of changing emotions in the first place, learn how to understand and give a name to your emotions, through understanding learn how to change your emotional responses, reduce your vulnerability to emotion mind through mindfulness, and learn how to manage overwhelming emotions that cause you distress. </p>
            </div>
            <div className="skillsList">
                <div className="skillsCard">
                    <h2>Pros and Cons of Changing Emotions</h2>
                </div>
                <Link to="/practice/emotion_regulation/understanding_emotions">
                    <div className="skillsCard">
                        <h2>Understanding and Naming Emotions</h2>
                    </div>
                </Link>
                <Link to="/practice/emotion_regulation/changing_responses">
                    <div className="skillsCard">
                        <h2>Changing Emotional Responses</h2>
                    </div>
                </Link>
                <Link to="/practice/emotion_regulation/reducing_vulnerability">
                    <div className="skillsCard">
                        <h2>Reducing Vulnerability to Emotion Mind</h2>
                    </div>
                </Link>
                <Link to="/practice/emotion_regulation/managing_emotions">
                    <div className="skillsCard">
                        <h2>Managing Really Difficult Emotions</h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}