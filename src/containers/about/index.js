import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss'
import { DiApple, DiAndroid } from 'react-icons/di'
import { FaDev, FaDatabase } from 'react-icons/fa'

const personalDetails = [
    { label: "Name", value: "Anubhav Tyagi" },
    { label: "Age", value: "23" },
    { label: "Address", value: "India" },
    { label: "Email", value: "anubhavtyagi483@gmail.com" },
    { label: "Contact No", value: "+91-8595991040" },
];

const jobSummary = 'Aspiring and detail-oriented Full Stack Developer with hands-on experience in building modern, responsive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Passionate about creating intuitive user interfaces, writing clean and maintainable code, and bringing ideas to life through technology. Quick learner with a strong foundation in web development principles and a commitment to continuous improvement. Eager to contribute to real-world projects, collaborate with teams, and grow into a versatile software developer.';

const About = () => {
    return (
        <section id="about" className="about"  >
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className="about__content" style={{ textAlign: "left" }}>
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={0.5}
                        start={{
                            transform: 'translateX(-900%)',
                            opacity: 0
                        }}
                        end={{
                            transform: 'translateX(0)',
                            opacity: 1
                        }}
                    >

                        <h3>Fullstack Developer</h3>
                        <p>{jobSummary}</p>

                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={0.5}
                        start={{
                            transform: 'translateX(500%)',
                            opacity: 0
                        }}
                        end={{
                            transform: 'translateX(0)',
                            opacity: 1
                        }}
                    >

                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {personalDetails.map((item, i) => (
                                <li key={i}>
                                    <span className="title">{item.label}:</span>
                                    <span className="value">{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__serviceWrapper" style={{ textAlign: "left" }}>
                    <div className="about__content__serviceWrapper__innerContent">

                    </div>
                    <div>
                        <FaDev size={60} color="var(--blue-theme-main-color)" />
                    </div>
                    <div>
                        <DiAndroid size={60} color="var(--blue-theme-main-color)" />
                    </div>
                    <div>
                        <FaDatabase size={60} color="var(--blue-theme-main-color)" />
                    </div>
                    <div>
                        <DiApple size={60} color="var(--blue-theme-main-color)" />
                    </div>
                </div>


            </div>


        </section>
    );
};

export default About;
