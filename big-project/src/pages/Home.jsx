export default function Home() {
    return(
        <div className="home-page">
            <main>
                <div className="hero">
                    <img src="src/pictures/thomas-rey-Oadvsf3xH9E-unsplash.jpg" alt="Photo by Thomas Rey on Unsplash" />
                    <p>The journey towards living the life you want begins here</p>
                </div>
                <div className="sign-up">Sign Up</div>
                <div className="info">
                    <p className="heading">Learn Life Skills</p>
                    <div className="icons">
                        <div className="skill">
                            <div className="icon mindfulness">
                                <img src="src/pictures/icons8-mind-50.png" alt="" />
                            </div>
                            <p>Mindfulness</p>
                        </div>
                        <div className="skill">
                            <div className="icon distress">
                                <img src="src/pictures/icons8-calm-64.png" alt="" />
                            </div>
                            <p>Distress Tolerance</p>
                        </div>
                        <div className="skill">
                            <div className="icon emotion">
                                <img src="src/pictures/icons8-happy-64.png" alt="" />
                            </div>
                            <p>Emotion Regulation</p>
                        </div>
                        <div className="skill">
                            <div className="icon interpersonal">
                                <img src="src/pictures/icons8-handshake-50.png" alt="" />
                            </div>
                            <p>Interpersonal Effectiveness</p>
                        </div>
                    </div>
                </div>
                <div className="features-cards">
                    <div className="card">
                        <div className="picture">
                            <img src="src/pictures/carlos-de-miguel-Kq2WV3WPrYU-unsplash.jpg" alt="Photo by Carlos de Miguel on Unsplash" />
                        </div>
                        <div className="text">
                            <h1>Improve Your Life</h1>
                            <p>Learn how to improve your life by learning new skills to help you make the most out of the life you have.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="picture">
                            <img src="src/pictures/alexander-andrews-jNKv4QohAk0-unsplash.jpg" alt="Photo by Alexander Andrews on Unsplash" />
                        </div>
                        <div className="text">
                            <h1>Tailored to YOUR Needs</h1>
                            <p>Learn skills that are relevant to YOU and your needs.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="picture">
                            <img src="src/pictures/aron-visuals-BXOXnQ26B7o-unsplash.jpg" alt="Photo by Aron Visuals on Unsplash" />
                        </div>
                        <div className="text">
                            <h1>Learn at Your Own Pace</h1>
                            <p>Short on time? Need a flexible learning schedule? Learn as much as you want when you want!</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}