import React from 'react';
import StyledLanding from './StyledLanding';

const Landing = () => {
    return (
        <StyledLanding>
            <div className="landing--hero">
                <div className="landing-hero--content">
                    <div className="photo" style={{ backgroundImage: `url("/static/images/profile.jpg")` }} />
                    <div className="profile-content">
                        <h2>Hi There!</h2>
                        <h1>It's me Dede Adhyatmika</h1>
                        <div className="social--container">
                            <a href="mailto:putu.dede@gmail.com" ><img src="/static/icons/email.png" /></a>
                            <a href="https://github.com/ptdede" target="_blank"><img src="/static/icons/github.png" /></a>
                            <a href="https://linkedin.com/in/ptdede/" target="_blank"><img src="/static/icons/linkedin.png" /></a>
                            <a href="https://twitter.com/ptdede" target="_blank"><img src="/static/icons/twitter.png" /></a>
                            <a href="skype:putu.dede@gmail.com" ><img src="/static/icons/skype.png" /></a>
                            <a href="tel:+6282111112365" ><img src="/static/icons/whatsapp.png" /></a>
                        </div>
                        <p>I describe my self as passionate personality in the modern tech world. Always open to exploring new ideas. Has great communication skills, respect for others and a great listener. Experienced in front-end development (React, Angular), Mobile platform (Native, Hybrid) and Server Management (Nginx, Apache). Really appreciate well designed things. Also a dog lover.</p>
                    </div>
                </div>
            </div>

            <div className="landing--scroller">
            </div>
        </StyledLanding>
    );
}

export default Landing;
