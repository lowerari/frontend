import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Profile() {
    const [user, setUser] = useState({});
    const token = localStorage.getItem('token');
    const [profilePicture, setProfilePicture] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/user', {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                })

                console.log(response.data);
                setUser(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchUserData();
    }, [token]);

    const handleProfileImageClick = () => {
        document.getElementById('profileImageInput').click();
    };

    useEffect(() => {
        const fetchProfilePicture = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/profile_picture', {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                })

                console.log(response.data);
                setProfilePicture(response.data.profile_picture);
                console.log(profilePicture);
            } catch (error) {
                console.error(error);
            }
        }
        fetchProfilePicture();
    }, [token, profilePicture]);

    const handleUploadProfileImage = async () => {
        const file = document.getElementById('profileImageInput').files[0];
        if (!file){
            console.log('No file selected');
            return;
        }
        const formData = new FormData();
        formData.append('profile_picture', file);

        try {
            const response = await axios.post('http://127.0.0.1:8000/upload_profile_picture', formData, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            })

            console.log(response.data);
            setProfilePicture(response.data.profile_picture);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="profile-page">
            <div className="profile-header">
                <div className="profile-image" onClick={handleProfileImageClick}>
                    <img src={profilePicture ? `https://res.cloudinary.com/dlctj1zzp/${profilePicture}` : "src/pictures/sergey-semin-Y0WXj3xqJz0-unsplash.jpg"} alt="Profile picture" />
                    <input type="file" id="profileImageInput" style={{display: 'none'}} onChange={handleUploadProfileImage} />
                </div>
                <div className="username">{user.username}</div>
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
                    <div className="currentStreak">
                        <p>Current Streak:</p>
                        <div className="streak">3 days</div>
                    </div>
                </div>
                <Link to="/diary_overview">
                    <div className="viewDiaryContainer">
                        <div className="viewDiaryButton">View Diary</div>
                    </div>
                </Link>
            </div>
            
            <div className="courses-and-skills">
            <div className="courses">
                <p>Courses</p>
                <Link to='/course/mindfulness'>
                    <div className="course active">
                        <div className="course-icon mindfulness">
                            <img src="src/pictures/icons8-mind-50.png" alt="" />
                        </div>
                        <div className="course-name">Mindfulness</div>
                    </div>
                </Link>
                <Link to='/course/distress_tolerance'>
                    <div className="course active">
                        <div className="course-icon distress">
                            <img src="src/pictures/icons8-calm-64.png" alt="" />
                        </div>
                        <div className="course-name">Distress Tolerance</div>
                    </div>
                </Link>
                <Link to='/course/emotion_regulation'>
                    <div className="course active">
                        <div className="course-icon emotion">
                            <img src="src/pictures/icons8-happy-64.png" alt="" />
                        </div>
                        <div className="course-name">Emotion Regulation</div>
                    </div>
                </Link>
                <Link to='/course/interpersonal_effectiveness'>
                    <div className="course">
                        <div className="course-icon interpersonal">
                            <img src="src/pictures/icons8-handshake-50.png" alt="" />
                        </div>
                        <div className="course-name">Interpersonal Effectiveness</div>
                    </div>
                </Link>
            </div>
            <div className="skills">
                <p>Skills Practice</p>
                <div className="skillsContainer">
                    <Link to='/practice/mindfulness'>
                        <div className="skill mindfulness">
                            <div className="skill-icon">
                                <img src="src/pictures/icons8-mind-50-black.png" alt="" />
                            </div>
                            <div className="skill-text">Practice Mindfulness</div>
                        </div>
                    </Link>
                    <Link to='/practice/distress_tolerance'>
                        <div className="skill distress">
                            <div className="skill-icon">
                                <img src="src/pictures/icons8-calm-64-black.png" alt="" />
                            </div>
                            <div className="skill-text">Practice Distress Tolerance</div>
                        </div>
                    </Link>
                    <Link to='/practice/emotion_regulation'>
                        <div className="skill emotion">
                            <div className="skill-icon">
                                <img src="src/pictures/icons8-happy-64-black.png" alt="" />
                            </div>
                            <div className="skill-text">Practice Emotion Regulation</div>
                        </div>
                    </Link>
                    <Link to='/practice/interpersonal_effectiveness'>
                        <div className="skill interpersonal">
                            <div className="skill-icon">
                                <img src="src/pictures/icons8-handshake-50-black.png" alt="" />
                            </div>
                            <div className="skill-text">Practice Interpersonal Effectiveness</div>
                        </div>
                    </Link>
                </div>
            </div>
            </div>
        </div>
    )
}