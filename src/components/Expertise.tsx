import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython, faRaspberryPi } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "ReactJs",
    "NextJs",
    "NodeJs",
    "NestJs",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "PyTorch",
    "Tensorflow",    
];

const labelsThird = [
    "Arduino",
    "STM",
    "ESP32",
    "Raspberry Pi",
    "MQTT",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I specialize in building dynamic and scalable web applications. On the backend, I have experience with Node.js + Express, NestJS, and Flask, creating robust APIs and managing server-side logic. On the frontend, I craft responsive and user-friendly interfaces using ReactJS, Next.js, Flask, and Flutter. My expertise spans the full development lifecycle, from designing efficient architectures to deploying high-quality solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI Devleopment</h3>
                    <p>I specialize in designing and implementing AI systems with a focus on practical applications. I developed an AI solution for coffee roasting crack sound detection using RNN deep learning architectures, ensuring precise identification of critical roasting stages. My work highlights the integration of advanced AI models into real-world applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faRaspberryPi} size="3x"/>
                    <h3>IoT & Embedded</h3>
                    <p>As a hardware engineer, I specialize in IoT development, designing and implementing systems using microcontrollers such as Arduino, STM, and ESP32, as well as single-board computers like Raspberry Pi. My expertise bridges hardware and software, enabling the creation of innovative and connected IoT solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;