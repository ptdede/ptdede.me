import styled from "styled-components";
import { breakpoints } from "../../assets/media-queries";

const StyledLanding = styled.div`
    position: relative;

    /* &::after {
        top: 80vh;
        left: 50%;
        position: absolute;
        content: "";
        width: 1.2px;
        height: 100%;
        background: rgba(111,111,111,.4);
        z-index: 0;
    } */

    .photo {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: #111;
        background-position: center;
        background-size: cover;
        margin: 0 auto;

        @media ${breakpoints.mobileS} {
            margin-top: 1rem;
        }

        @media ${breakpoints.mobileM} {
            margin-top: 2rem;
        }

        @media ${breakpoints.laptop} {
            margin: 0 auto;
        }

        @media ${breakpoints.desktop} {
            width: 320px;
            height: 320px;
        }
    }

    .landing--hero {
        position: relative;
        min-height: 90vh;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;

        .landing-hero--content {
            padding: 2rem;

            @media ${breakpoints.mobileS} {
                padding: 1rem;
            }

            @media ${breakpoints.laptop} {
                padding: 2rem;
            }
        }

        .profile-content {
            width: 100%;
            max-width: 48rem;
            padding: 3rem 1rem;
            margin: 0 auto;
            line-height: 1.5;
            text-align: center;

            @media ${breakpoints.mobileS} {
                padding: 1rem 1rem;
            }

            @media ${breakpoints.mobileM} {
                padding: 2rem 2rem;
            }

            @media ${breakpoints.tablet} { 
                max-width: 28rem;
            }

            @media ${breakpoints.laptop} { 
                padding: 3rem 1rem;
                max-width: 48rem;
            }

            @media ${breakpoints.desktop} {
                max-width: 67rem;
            }

            .social--container {
                padding: 1rem 0;
                
                @media ${breakpoints.mobileS} {
                    padding: .5rem 3rem;
                }

                @media ${breakpoints.mobileM} {
                    padding: 1rem 3rem;
                }

                @media ${breakpoints.laptop} { 
                    padding: 1rem 0;
                }

                @media ${breakpoints.desktop} { 
                    padding: 3rem 0;
                }

                img {
                    width: 35px;
                    margin: 5px 5px;

                    @media ${breakpoints.desktop} { 
                        width: 65px;
                        margin: 15px 15px;
                    }
                }
            }
        }
    }

    .landing--scroller {
        
    }

    .footer {
        padding: 0rem 3rem;

        @media ${breakpoints.mobileS} {
            padding: 0rem 2rem;
        }

        @media ${breakpoints.mobileM} {
            padding: 0rem 3rem;
        }

        @media ${breakpoints.tablet} { 
            text-align: center;
        }
    }    

    h2 {
        /* color: #9e956e; */
    }

    h1 {
        /* color: #8e8663; */
    }

    h1, h2 {
        font-weight: 300;
        text-align: center;
    }

    h2 {
        font-size: 1.1em;
        font-weight: 800;
    }

    p {
        line-height: 2;
        color: rgba(0,0,0,.6);
    }

    @media ${breakpoints.mobileS} {
        h1 {
            font-size: 1.2em;
            margin-bottom: .5rem;
        }

        h2 {
            font-size: 1em;
            margin-bottom: .5rem;
        }

        p {
            padding: .5rem 0;
            font-size: .8em;
            line-height: 2;
            text-align: justify;
        }
    }

    @media ${breakpoints.tablet} { 
        h1, h2 {
            font-size: 1.8em;
            font-weight: 300;
            text-align: center;
            margin-bottom: 1rem;
        }

        h2 {
            font-size: 1.2em;
            font-weight: 800;
        }

        p {
            padding: .5rem 0;
            font-size: .8em;
            line-height: 2;
            text-align: center;
        }
    }
    
    @media ${breakpoints.laptop} {
        h1, h2 {
            font-size: 1.6777em;
            font-weight: 300;
            text-align: center;
            margin-bottom: 1rem;
        }

        h2 {
            font-size: 1.1em;
            font-weight: 800;
        }

        p {
            padding: .5rem 0;
            font-size: .85em;
            line-height: 2;
            text-align: center;
        }
    }

    @media ${breakpoints.laptopL} {
        h1, h2 {
            font-size: 1.8777em;
            font-weight: 300;
            text-align: center;
            margin-bottom: 1rem;
        }

        h2 {
            font-size: 1.2em;
            font-weight: 800;
        }

        p {
            padding: .5rem 0;
            font-size: 1em;
            line-height: 2;
            text-align: center;
        }
    }

    @media ${breakpoints.desktop} {
        h1, h2 {
            font-size: 3.2777em;
            font-weight: 300;
            text-align: center;
            margin-bottom: 1rem;
        }

        h2 {
            font-size: 2.2em;
            font-weight: 800;
        }

        p {
            padding: 2rem 0;
            font-size: 1.6em;
            line-height: 2;
            text-align: center;
        }
    }
`;

export default StyledLanding;
