import styled from "styled-components";

const StyledLanding = styled.div`
    position: relative;
    overflow: hidden;

    &::after {
        top: 80vh;
        left: 50%;
        position: absolute;
        content: "";
        width: 1.2px;
        height: 100%;
        background: rgba(111,111,111,.4);
        z-index: 0;
    }

    .landing--hero {
        position: relative;
        width: 100%;
        height: 100vh;
        z-index: 1;
        padding-top: 3rem;

        .profile-content {
            width: 100%;
            max-width: 48rem;
            padding: 3rem 1rem;
            margin: 0 auto;
            line-height: 1.5;
            text-align: center;

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
            }

            .social--container {
                padding: 1rem 0;
                img {
                    width: 35px;
                    margin: 0 5px;
                }
            }
        }
    }

    .landing--scroller {
        
    }

    .photo {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: #111;
        background-position: center;
        background-size: cover;
        margin: 0 auto;
    }
`;

export default StyledLanding;
