import React, { Component } from 'react';
import './Projects.scss';
import ParticleField from 'react-particles-webgl';
import BookstoreVideo from '../static/bookstore.mp4';
import HomebaseVideo from '../static/homebase.mp4';
import StatifyVideo from '../static/statify.mp4';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiPlayCircle } from 'react-icons/fi';
import { motion } from "framer-motion";

const pageVariants = { 
    in:{ 
        scale: [0.95, 0.95, 0.95, 1],
        x: ["100vw", "100vw", "0vw", "0vw"],
    },
    notIn: {
        scale: 0.95,
        x: "100vw",
    },
    outDown: {
        scale: [1, 0.95, 0.95],
        y: [0, 0, 1000],
    }
}

const pageTransitions = { 
    type: "tween",
    ease: "easeInOut",
    duration: 0.75,
}

const container = { 
    start:{ y: 40, opacity: 0 },
    startRight:{x: 80, opacity: 0},
    startRightAvi:{x: 200, opacity: 0},
    startLeft:{x: -80, opacity: 0},
    startLeftAvi:{x: -200, opacity: 0},
    endY: { y: 0, opacity: 1 },
    endX: { x: 0, opacity: 1 },
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

class Projects extends Component {
    state = { show: false, video: null };

    showModal = (videoToPlay) => {
        this.setState({ show: true, video: videoToPlay });
        console.log(this.state.show);
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render(){
        return (
            <motion.div className="projects"
            variants={pageVariants}
            initial="notIn"
            animate="in"
            exit="outDown"
            transition={pageTransitions}>
                <motion.div className="animation-canvas"
                    style={{opacity: 0 }}
                    animate={{opacity: 1}}
                    transition={{duration: 2, delay: 5.5 }}>
                        <ParticleField config={particlesConfigDark}/>
                </motion.div>
                <motion.div className="animation-canvas"
                    style={{opacity: 0 }}
                    animate={{opacity: 1}}
                    transition={{duration: 2, delay: 5.5 }}>
                        <ParticleField config={particlesConfigTeal}/>
                </motion.div>
                <section className="projects-content">
                    <Modal show={this.state.show} handleClose={this.hideModal}>
                        <iframe src={this.state.video}
                        frameBorder='0'
                        allowFullScreen
                        title='Demo'
                        className="modal-video"/>
                    </Modal>
                    <motion.ul className="project-list">
                        <motion.li className="project1"
                            initial="startRight"
                            animate="endX" 
                            variants={container}
                            transition={{ ease: "easeIn", duration: 0.5, delay: 1.5 }}>
                                <motion.div className="avatar" 
                                initial="startLeftAvi"
                                animate="endX" 
                                variants={container}
                                transition={{ ease: "easeIn", duration: 0.5, delay: 1.8 }}>
                                    <video src={StatifyVideo}
                                    frameBorder='0'
                                    allowFullScreen
                                    title='Statify demo'
                                    controls="true"
                                    type="video/mp4"
                                    className="video"/>
                                </motion.div>
                                <motion.div className="project-details"> 
                                    <motion.h2 className="title"
                                    initial="start"
                                    animate="endY" 
                                    variants={container}
                                    transition={{ ease: "easeIn", duration: 0.25, delay: 2.8 }}>
                                        <span>01.</span> Statify-me
                                    </motion.h2>
                                    <motion.h3 className="description"
                                    initial="start"
                                    animate="endY" 
                                    variants={container}
                                    transition={{ ease: "easeIn", duration: 0.25, delay: 2.9 }}>
                                        I created this site in order for a user to see a simple and clean
                                        breakdown of their spotify data. I utilized the Spotify API in order for users to 
                                        login and authenticate externally with Spotify, and then their account data
                                        is displayed to them.
                                    </motion.h3>
                                    <motion.ul className="tech-used"
                                    initial="start"
                                    animate="endY" 
                                    variants={container}
                                    transition={{ ease: "easeIn", duration: 0.25, delay: 3 }}> 
                                        <li> <h3>React</h3> </li>
                                        <li> <h3>Express</h3> </li>
                                        <li> <h3>Spotify API</h3> </li>
                                    </motion.ul>
                                    <motion.ul className="tech-used"
                                    initial="start"
                                    animate="endY" 
                                    variants={container}
                                    transition={{ ease: "easeIn", duration: 0.25, delay: 3.1 }}> 
                                        <li> <h3>React Router</h3> </li>
                                        <li> <h3>Framer Motion</h3> </li>
                                        <li> <h3>Loadable</h3> </li>
                                    </motion.ul>
                                    <motion.ul className="links"
                                    initial="start"
                                    animate="endY" 
                                    variants={container}
                                    transition={{ ease: "easeIn", duration: 0.25, delay:3.2 }}> 
                                        <li>
                                            <button type="button" onClick={()=>this.showModal(StatifyVideo)}> <FiPlayCircle/> </button>
                                        </li>
                                        <li>
                                            <a href="https://github.com/DitwanP/statify" target="_blank" rel="noopener noreferrer"> <FaGithub/> </a>
                                        </li>
                                        <li>
                                            <a href="https://statify-me.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <FiExternalLink/> </a>
                                        </li>
                                    </motion.ul>
                                </motion.div>
                            </motion.li>
                        <motion.li className="project2"
                        initial="startLeft"
                        animate="endX" 
                        variants={container}
                        transition={{ ease: "easeIn", duration: 0.5, delay: 2 }}>
                            <motion.div className="project-details"> 
                                <motion.h2 className="title"
                                initial="start"
                                animate="endY" 
                                variants={container}
                                transition={{ ease: "easeIn", duration: 0.25, delay: 3.3 }}>
                                    <span>02.</span> Homebase
                                </motion.h2>
                                <motion.h3 className="description"
                                initial="start"
                                animate="endY" 
                                variants={container}
                                transition={{ ease: "easeIn", duration: 0.25, delay: 3.4 }}>
                                    The idea for this project was to make myself a home page for my 
                                    browser. The page has weather information, a daily quote, and
                                    a new daily background image, all pulled from different APIs. There
                                    is also a simple to-do list for keeping track of small tasks.
                                </motion.h3>
                                <motion.ul className="tech-used"
                                initial="start"
                                animate="endY" 
                                variants={container}
                                transition={{ ease: "easeIn", duration: 0.25, delay: 3.5 }}> 
                                    <li> <h3>Django</h3> </li>
                                    <li> <h3>React</h3> </li>
                                    <li> <h3>Sass</h3> </li>
                                </motion.ul>
                                <motion.ul className="tech-used"
                                initial="start"
                                animate="endY" 
                                variants={container}
                                transition={{ ease: "easeIn", duration: 0.25, delay: 3.6 }}> 
                                    <li> <h3>Unsplash API</h3> </li>
                                    <li> <h3>Quotes API</h3> </li>
                                    <li> <h3>OpenWeatherMap API</h3> </li>
                                </motion.ul>
                                <motion.ul className="links"
                                initial="start"
                                animate="endY" 
                                variants={container}
                                transition={{ ease: "easeIn", duration: 0.25, delay: 3.7 }}> 
                                    <li>
                                        <button type="button" onClick={()=>this.showModal(HomebaseVideo)}> <FiPlayCircle/> </button>
                                    </li>
                                    <li>
                                        <a href="https://github.com/DitwanP/Homebase" target="_blank" rel="noopener noreferrer"> <FaGithub/> </a>
                                    </li>
                                    <li>
                                        <a href="https://homebase-rd.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <FiExternalLink/> </a>
                                    </li>
                                </motion.ul>
                            </motion.div>
                            <motion.div className="avatar" 
                            initial="startRightAvi"
                            animate="endX" 
                            variants={container}
                            transition={{ ease: "easeIn", duration: 0.5, delay: 2.2 }}>
                                <video src={HomebaseVideo}
                                frameBorder='0'
                                allowFullScreen
                                controls="true"
                                type="video/mp4"
                                title='Homebase demo'
                                className="video"/>
                            </motion.div>
                        </motion.li>
                        <motion.li className="project3"
                        initial="startRight"
                        animate="endX" 
                        variants={container}
                        transition={{ ease: "easeIn", duration: 0.5, delay: 2.5 }}>
                            <motion.div className="avatar" 
                            initial="startLeftAvi"
                            animate="endX" 
                            variants={container}
                            transition={{ ease: "easeIn", duration: 0.25, delay: 2.8 }}>
                                <video src={BookstoreVideo}
                                frameBorder='0'
                                allowFullScreen
                                title='Bookstore demo'
                                controls="true"
                                type="video/mp4"
                                className="video"/>
                            </motion.div>
                            <motion.div className="project-details"> 
                                <motion.h2 className="title"
                                initial="start"
                                animate="endY" 
                                variants={container}
                                transition={{ ease: "easeIn", duration: 0.25, delay: 3.9 }}>
                                    <span>03.</span> Bookstore
                                </motion.h2>
                                <motion.h3 className="description"
                                initial="start"
                                animate="endY" 
                                variants={container}
                                transition={{ ease: "easeIn", duration: 0.25, delay: 4 }}>
                                    This project was my first endeavor into the world of web development.
                                    The goal was to create a convincing online bookstore with functionality 
                                    full CRUD functionality in the shopping cart.
                                </motion.h3>
                                <motion.ul className="tech-used"
                                initial="start"
                                animate="endY" 
                                variants={container}
                                transition={{ ease: "easeIn", duration: 0.25, delay: 4.1 }}> 
                                    <li> <h3>Html</h3> </li>
                                    <li> <h3>CSS</h3> </li>
                                </motion.ul>
                                <motion.ul className="tech-used"
                                initial="start"
                                animate="endY" 
                                variants={container}
                                transition={{ ease: "easeIn", duration: 0.25, delay: 4.2 }}> 
                                    <li> <h3>Python</h3> </li>
                                    <li> <h3>Django</h3> </li>
                                    <li> <h3>PostgreSQL</h3> </li>
                                    <li> <h3>Bootsrap</h3> </li>
                                </motion.ul>
                                <motion.ul className="links"
                                initial="start"
                                animate="endY" 
                                variants={container}
                                transition={{ ease: "easeIn", duration: 0.25, delay: 4.3 }}> 
                                    <li>
                                        <button type="button" onClick={()=>this.showModal(BookstoreVideo)}> <FiPlayCircle/> </button>
                                    </li>
                                    <li>
                                        <a href="https://github.com/DitwanP/Group19_Project" target="_blank" rel="noopener noreferrer"> <FaGithub/> </a>
                                    </li>
                                </motion.ul>
                            </motion.div>
                        </motion.li>
                    </motion.ul>
                </section>
            </motion.div>
        )
    }
}

export default Projects;


const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button onClick={handleClose} className="modal-close-button">Close</button>
            </section>
        </div>
    );
};