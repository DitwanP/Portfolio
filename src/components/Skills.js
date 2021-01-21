import React, { Component } from 'react';
import './Skills.scss';
import { motion } from "framer-motion";
import ParticleField from 'react-particles-webgl';
import { FaJava, FaPython, FaReact, FaBootstrap, FaSass, FaNpm, FaGitAlt } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { SiDjango, SiHtml5, SiCss3, SiPostgresql } from 'react-icons/si';


const pageVariants = { 
    in:{ 
        scale: [0.95, 0.95, 0.95, 0.95, 1],
        x: ["100vw", "100vw", "100vw", "0vw", "0vw"],
    },
    notIn: {
        scale: 0.95,
        x: "100vw",
    },
    outDown: {
        scale: [1, 0.95, 0.95, 0.95, 0.95],
        y: [0, 0, 0, 0, 2000],
    }
}

const pageTransitions = { 
    type: "tween",
    ease: "easeInOut",
    duration: 0.75,
}

const textContainers = { 
    start:{ 
        y: 40, opacity: 0 
    },
    end: {
        y: 0, opacity: 1 
    },
    rotate: {
        scale: 1.1, rotateX: 180
    },
}

const particlesConfigDark = {
    showCube: false,
    dimension: '3D',
    velocity: 0.5,
    boundaryType: 'passthru',
    antialias: false,
    direction: {
        xMin: -0.6,
        xMax: 0.3,
        yMin: 1,
        yMax: 0,
        zMin: -0.6,
        zMax: 0.3
    },
    lines: {
        colorMode: 'solid',
        color: '#081016',
        transparency: 0.9,
        limitConnections: true,
        maxConnections: 20,
        minDistance: 150,
        visible: false
    },
    particles: {
        colorMode: 'solid',
        color: '#081016',
        transparency: 1,
        shape: 'circle',
        boundingBox: 'canvas',
        count: 90,
        minSize: 20,
        maxSize: 40,
        visible: true
    },
    cameraControls: {
        enabled: false,
        enableDamping: true,
        dampingFactor: 0.2,
        enableZoom: true,
        autoRotate: false,
        autoRotateSpeed: 0.3,
        resetCameraFlag: true
    }
}

const particlesConfigTeal = {
    showCube: false,
    dimension: '3D',
    velocity: 0.5,
    boundaryType: 'passthru',
    antialias: false,
    direction: {
        xMin: -0.6,
        xMax: 0.3,
        yMin: 1,
        yMax: 0,
        zMin: -0.6,
        zMax: 0.3
    },
    lines: {
        colorMode: 'rainbow',
        color: '#351CCB',
        transparency: 0.9,
        limitConnections: true,
        maxConnections: 20,
        minDistance: 150,
        visible: false
    },
    particles: {
        colorMode: 'solid',
        color: '#4bc3b7',
        transparency: 1,
        shape: 'circle',
        boundingBox: 'canvas',
        count: 60,
        minSize: 10,
        maxSize: 30,
        visible: true
    },
    cameraControls: {
        enabled: false,
        enableDamping: true,
        dampingFactor: 0.2,
        enableZoom: true,
        autoRotate: false,
        autoRotateSpeed: 0.3,
        resetCameraFlag: true
    }
}

export default class Skils extends Component {

    constructor(props) {
        super(props);
        this.titleText = React.createRef(); 
        this.skillListOne = React.createRef();
        this.skillListTwo = React.createRef();
    }

    componentDidMount(){
        const titleElements = this.titleText.current.childNodes;
        const listElementsOne = this.skillListOne.current.childNodes;
        const listElementsTwo = this.skillListTwo.current.childNodes;

        for (let i = 0; i <= titleElements.length - 1; i++) {
            titleElements[i].addEventListener('animationend', function(e) {
                titleElements[i].classList.remove('animated');
            });
        
            titleElements[i].addEventListener('mouseover', function(e) {
                titleElements[i].classList.add('animated');
            });
        }

        for (let i = 0; i <= listElementsOne.length - 1; i++) {
            listElementsOne[i].addEventListener('animationend', function(e) {
                listElementsOne[i].children[0].classList.remove('animated-logo');
                listElementsOne[i].children[1].classList.remove('animated-name');
            });
        
            listElementsOne[i].addEventListener('mouseover', function(e) {
                listElementsOne[i].children[0].classList.add('animated-logo');
                listElementsOne[i].children[1].classList.add('animated-name');
            });
        }

        for (let i = 0; i <= listElementsTwo.length - 1; i++) {
            listElementsTwo[i].addEventListener('animationend', function(e) {
                listElementsTwo[i].children[0].classList.remove('animated-logo');
                listElementsTwo[i].children[1].classList.remove('animated-name');
            });
        
            listElementsTwo[i].addEventListener('mouseover', function(e) {
                listElementsTwo[i].children[0].classList.add('animated-logo');
                listElementsTwo[i].children[1].classList.add('animated-name');
            });
        }
    }

    render() {
        return (
            <motion.div className="skills"
            variants={pageVariants}
            initial="notIn"
            animate="in"
            exit="outDown"
            transition={pageTransitions}>
                <motion.div className="animation-canvas"
                style={{opacity: 0 }}
                animate={{opacity: 1}}
                transition={{duration: 2, delay: 2.8 }}>
                    <ParticleField config={particlesConfigDark}/>
                </motion.div>
                <motion.div className="animation-canvas"
                style={{opacity: 0 }}
                animate={{opacity: 1}}
                transition={{duration: 2, delay: 2.8 }}>
                    <ParticleField config={particlesConfigTeal}/>
                </motion.div>
                <section className="skills-content">
                    <motion.div className="summary"
                    initial="start"
                    animate="end" 
                    variants={textContainers}
                    transition={{ ease: "easeIn", duration: 0.25}}>
                        <motion.div className="title"
                        initial="start"
                        animate="end" 
                        variants={textContainers}
                        transition={{ ease: "easeIn", duration: 0.25, delay: 1 }}>
                            <h2 ref={this.titleText}>
                                <span className="title-span">Technichal</span>
                                &nbsp;
                                <span className="title-span">Skills</span>
                            </h2>
                        </motion.div>
                        <motion.p
                        initial="start"
                        animate="end" 
                        variants={textContainers}
                        transition={{ ease: "easeIn", duration: 0.25, delay: 1.2 }}>
                            My main language of choice is Python for its simplicity. Django was my first 
                            experience with anything web related, then I discovered React and it 
                            became my premier framework for frontend developement.
                        </motion.p>
                        <motion.p
                        initial="start"
                        animate="end" 
                        variants={textContainers}
                        transition={{ ease: "easeIn", duration: 0.25, delay: 1.3 }}>
                            I enjoy using React and a wide variety of other tools to create things that will live on the web. 
                            That being said I do not classify myself as an exclusively Frontend developer, since I've just graduated 
                            and is still new to the world of developing I am very much open to learning both frontend and backend 
                            tech in order to be a well-rounded engineer.
                        </motion.p>
                    </motion.div>
                    <motion.div className="list-of-skills"button
                    initial={{opacity: 0}}
                    animate={{opacity: 1}} 
                    variants={textContainers}
                    transition={{ ease: "easeIn", duration: 0.75, delay: 2 }}>
                        <ul className="skill-list" ref={this.skillListOne}>
                            <li>
                                <FaPython className="skill-logos"/>
                                <h3>Python</h3>
                            </li>
                            <li>
                                <FaJava className="skill-logos"/>
                                <h3>Java</h3>
                            </li>
                            <li>
                                <DiJavascript1 className="skill-logos"/>
                                <h3>JavaScript</h3>
                            </li>
                            <li>
                                <SiDjango className="skill-logos"/>
                                <h3>Django</h3>
                            </li>
                            <li>
                                <FaReact className="skill-logos"/>
                                <h3>React</h3>
                            </li>
                            <li>
                                <FaBootstrap className="skill-logos"/>
                                <h3>Bootstrap</h3>
                            </li>
                        </ul>
                        <ul className="skill-list" ref={this.skillListTwo}>
                            <li>
                                <SiHtml5 className="skill-logos"/>
                                <h3>HTML</h3>
                            </li>
                            <li>
                                <SiCss3 className="skill-logos"/>
                                <h3>CSS</h3>
                            </li>
                            <li>
                                <FaSass className="skill-logos"/>
                                <h3>Sass</h3>
                            </li>
                            <li>
                                <SiPostgresql className="skill-logos"/>
                                <h3>PostgreSQL</h3>
                            </li>
                            <li>
                                <FaGitAlt className="skill-logos"/>
                                <h3>Git</h3>
                            </li>
                            <li>
                                <FaNpm className="skill-logos"/>
                                <h3>NPM</h3>
                            </li>
                        </ul>
                    </motion.div>
                </section>
            </motion.div>
        )
    }
}
