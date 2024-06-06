import { Link } from "react-router-dom";

export default function Profile() {
    return (
        <div className="profile-page">
            <div className="profile-header">
                <div className="profile-image">
                    <img src="src/pictures/sergey-semin-Y0WXj3xqJz0-unsplash.jpg" alt="Photo by Sergey Semin on Unsplash" />
                </div>
                <div className="username">MyUser</div>
            </div>
            <div className="dbtDiary">
                <p>DBT Diary</p>
                <div className="day-icons">
                    <div className="day active">M</div>
                    <div className="day active">T</div>
                    <div className="day active">W</div>
                    <div className="day">Th</div>
                    <div className="day">F</div>
                    <div className="day">Sa</div>
                    <div className="day">Su</div>
                </div>
                <Link to="/diary_overview">
                    <div className="viewDiaryContainer">
                        <div className="viewDiaryButton">View Diary</div>
                    </div>
                </Link>
            </div>
            <div className="courses">
                <p>Courses</p>
                <div className="course active">
                    <div className="course-icon mindfulness">
                        <img src="src/pictures/icons8-mind-50.png" alt="" />
                    </div>
                    <div className="course-name">Mindfulness</div>
                </div>
                <div className="course active">
                    <div className="course-icon distress">
                        <img src="src/pictures/icons8-calm-64.png" alt="" />
                    </div>
                    <div className="course-name">Distress Tolerance</div>
                </div>
                <div className="course active">
                    <div className="course-icon emotion">
                        <img src="src/pictures/icons8-happy-64.png" alt="" />
                    </div>
                    <div className="course-name">Emotion Regulation</div>
                </div>
                <div className="course">
                    <div className="course-icon interpersonal">
                        <img src="src/pictures/icons8-handshake-50.png" alt="" />
                    </div>
                    <div className="course-name">Interpersonal Effectiveness</div>
                </div>
            </div>
            <div className="skills">
                <p>Skills Practice</p>
                <div className="skillsContainer">
                    <div className="skill mindfulness">
                        <div className="skill-icon">
                            <img src="src/pictures/icons8-mind-50-black.png" alt="" />
                        </div>
                        <div className="skill-text">Practice Mindfulness</div>
                    </div>
                    <div className="skill distress">
                        <div className="skill-icon">
                            <img src="src/pictures/icons8-calm-64-black.png" alt="" />
                        </div>
                        <div className="skill-text">Practice Distress Tolerance</div>
                    </div>
                    <div className="skill emotion">
                        <div className="skill-icon">
                            <img src="src/pictures/icons8-happy-64-black.png" alt="" />
                        </div>
                        <div className="skill-text">Practice Emotion Regulation</div>
                    </div>
                    <div className="skill interpersonal">
                        <div className="skill-icon">
                            <img src="src/pictures/icons8-handshake-50-black.png" alt="" />
                        </div>
                        <div className="skill-text">Practice Interpersonal Effectiveness</div>
                    </div>
                </div>
            </div>
        </div>
    )
}