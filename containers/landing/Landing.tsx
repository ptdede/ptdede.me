import dayjs from "dayjs";
import Head from "next/head";
import React from "react";
import {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    EmailShareButton,

    FacebookIcon,
    GooglePlusIcon,
    LinkedinIcon,
    TwitterIcon,
    WhatsappIcon,
    EmailIcon,
} from 'react-share';

import StyledLanding from "./StyledLanding";

const socialSize = 24;

const Landing = () => {
    return (
        <StyledLanding>
            <Head>
                <title>Dede Adhyatmika | Personal and Portfolio Website</title>
                <meta name="description" content="Hi, My name is I Putu Dede Tulus Adhyatmika. I use modern technology stack to solve problem in website and mobile development. Welcome to my personal website. Feel free to contact me anytime." />
                <meta property="og:title" content="Dede Adhyatmika | Personal & Portfolio Website" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://ptdede.me" />
                <meta property="og:image" content="https://ptdede.me/static/images/cover-social.jpg" />
                <meta property="og:site_name" content="Dede Adhyatmika Profile" />
                <meta property="og:description" content="Hi, My name is I Putu Dede Tulus Adhyatmika. I use modern technology stack to solve problem in website and mobile development. Welcome to my personal website. Feel free to contact me anytime." />

                {/* All meta below is Optional */}
                <meta name="copyright" content="Dede Adhyatmika" />
                {/* ex: Sunday, July 18th, 2010, 5:15 pm */}
                <meta name="revised" content={dayjs().format("dddd, MMMM Do, YYYY, h:mm:ss a")} />
            </Head>

            <div className="landing--hero">
                <div className="landing-hero--content">
                    <div className="photo" style={{ backgroundImage: `url("/static/images/profile.jpg")` }} />
                    <div className="profile-content">
                        <h2>Hi There!</h2>
                        <h1>It's me Dede Adhyatmika</h1>
                        <div className="social--container">
                            <a href="mailto:putu.dede@gmail.com" aria-label="email">
                                <img src="/static/icons/email.png" alt="email" />
                            </a>
                            <a href="https://github.com/ptdede" target="_blank" rel="noopener" aria-label="github">
                                <img src="/static/icons/github.png" alt="github" />
                            </a>
                            <a href="https://linkedin.com/in/ptdede/" target="_blank" rel="noopener" aria-label="linkedin">
                                <img src="/static/icons/linkedin.png" alt="linkedin" />
                            </a>
                            <a href="https://twitter.com/ptdede" target="_blank" rel="noopener" aria-label="twitter">
                                <img src="/static/icons/twitter.png" alt="twitter" />
                            </a>
                            <a href="skype:putu.dede@gmail.com" aria-label="skype">
                                <img src="/static/icons/skype.png" alt="skype" />
                            </a>
                            <a href="tel:+6282111112365" aria-label="whatsapp">
                                <img src="/static/icons/whatsapp.png" alt="whatsapp" />
                            </a>
                        </div>
                        <p>I describe my self as passionate personality in the modern tech world. Always open to exploring new ideas. Has great communication skills, respect for others and a great listener. Experienced in front-end development (React, Angular), Mobile platform (Native, Hybrid) and Server Management (Nginx, Apache). Really appreciate well designed things. Also a dog lover.</p>
                    </div>
                </div>
            </div>

            <div className="landing--scroller">
            </div>

            <div className="footer">
                <p>view this project on <a href="https://github.com/ptdede/ptdede.me" aria-label="github project page">github</a></p>
                <div>
                    <EmailShareButton url="https://ptdede.me" size={32} round={true} title="Dede Adhyatmika | Personal and Portfolio Website" />
                    <p>share me</p>
                    <div className="social">
                        <FacebookShareButton additionalProps={{["aria-label"]: "Facebook Share Button"}} size={socialSize} url="https://ptdede.me">
                          <FacebookIcon size={socialSize} round={true} />  
                        </FacebookShareButton>
                        <GooglePlusShareButton additionalProps={{["aria-label"]: "GooglePlus Share Button"}} size={socialSize} url="https://ptdede.me">
                          <GooglePlusIcon size={socialSize} round={true} />  
                        </GooglePlusShareButton>
                        <LinkedinShareButton additionalProps={{["aria-label"]: "Linkedin Share Button"}} size={socialSize} url="https://ptdede.me">
                          <LinkedinIcon size={socialSize} round={true} />  
                        </LinkedinShareButton>
                        <TwitterShareButton additionalProps={{["aria-label"]: "Twitter Share Button"}} size={socialSize} url="https://ptdede.me">
                          <TwitterIcon size={socialSize} round={true} />  
                        </TwitterShareButton>
                        <WhatsappShareButton additionalProps={{["aria-label"]: "Whatsapp Share Button"}} size={socialSize} url="https://ptdede.me">
                            <WhatsappIcon size={socialSize} round={true} />
                        </WhatsappShareButton>
                        <EmailShareButton additionalProps={{ ["aria-label"]: "Email Share Button"}} size={socialSize} url="https://ptdede.me" title="Dede Adhyatmika | Personal and Portfolio Website">
                            <EmailIcon size={socialSize} round={true} />
                        </EmailShareButton>
                    </div>
                </div>
            </div>
        </StyledLanding>
    );
}

export default Landing;
