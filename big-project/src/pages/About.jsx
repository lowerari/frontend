import { useState } from "react";

export default function About() {
    const [messageSent, setMessageSent] = useState(false);

    const handleSendMessage = (event) => {
        event.preventDefault();
        setMessageSent(true);
    }

    return (
        <div className="about-page">
            {/* <h1>About</h1>
            <p>This is a full-stack application built with Django and React.</p>
            <p>It is a simple application that allows users to sign up, log in, and view their profile.</p>
            <p>It also includes a simple course with lessons and quizzes.</p> */}
            <div className="site-info">
                <h1>Welcome to <span>MyDBTJourney</span></h1>
                <p>MyDBTJourney is a web application that provides users with a platform to learn Dialectical Behavior Therapy (DBT) skills. DBT is a type of cognitive-behavioral therapy that is used to treat individuals with borderline personality disorder (BPD). It is also used to treat other mental health conditions such as depression, anxiety, and eating disorders.</p>
                <p>MyDBTJourney is designed to help users learn DBT skills in a structured and interactive way. The application includes a series of lessons and quizzes that cover the four modules of DBT: mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness.</p>
                <p>Users can sign up for an account, log in, and track their progress as they complete the lessons and quizzes. The application also provides users with a profile page where they can view their course progress and update their account information.</p>
                <p>This site is not intended as a replacement for therapy/professional led mental healthcare. All content on this site is adapted from Dr. Marsha Linehan&apos;s <span>DBT Skills Training Manual, Second Edition</span>.</p>
            </div>
            <div className="creator-info">
                <h1>Meet the Creator</h1>
                <div className="creator-pic"></div>
                <p>Hi! My name is Arianne.</p>
                <p>I created MyDBTJourney with one goal in mind: to allow people with limited time, money, or other resources to have a resource available to them to aid them on their mental health journey.</p>
                <p>I chose Dialectical Behavior Therapy for this goal because I believe it is one of the best and most versitile modern therapies available today. However, due to a limited number of practitioners and a high demand, DBT is often out of reach for many people who could benefit from it the most.</p>
                <p>It is my hope that by creating this website, I can make skills training more accessible to anyone who desires it. Best of luck on your journey!</p>
            </div>
            <hr />
            <div className="contact-area">
                <div className="contact-form">
                    <h1>Contact</h1>
                    <form>
                        <div className="formContainer">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                            />
                        </div>
                        <div className="formContainer">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                            />
                        </div>
                        <div className="formContainer">
                            <label htmlFor="message">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                            />
                        </div>
                        {messageSent && <p className="message-sent">Message sent!</p>}
                        <button onClick={handleSendMessage}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}