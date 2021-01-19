import React, { Component } from 'react';
import ParticleField from 'react-particles-webgl';
import { motion } from "framer-motion";
import './Home.scss';

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

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.nameText = React.createRef(); 
        this.professionText = React.createRef(); 
    }

    componentDidMount(){
        const nameElements = this.nameText.current.childNodes;
        const professionElements = this.professionText.current.childNodes;

        for (let i = 0; i <= nameElements.length - 1; i++) {
            nameElements[i].addEventListener('animationend', function(e) {
                nameElements[i].classList.remove('animated');
            });
        
            nameElements[i].addEventListener('mouseover', function(e) {
                nameElements[i].classList.add('animated');
            });
        }

        for (let x = 0; x <= professionElements.length - 1; x++) {
            professionElements[x].addEventListener('animationend', function(e) {
                professionElements[x].classList.remove('animated');
            });
        
            professionElements[x].addEventListener('mouseover', function(e) {
                professionElements[x].classList.add('animated');
            });
        }
    }

    render (){
        return (
            <motion.div className="hero-container"
            variants={pageVariants}
            initial="notIn"
            animate="in"
            exit="outDown"
            transition={pageTransitions}>
                <motion.div className="animation-canvas"
                style={{opacity: 0 }}
                animate={{opacity: 1}}
                transition={{duration: 2, delay: 1.8 }}>
                    <ParticleField config={particlesConfigDark}/>
                </motion.div>
                <motion.div className="animation-canvas"
                style={{opacity: 0 }}
                animate={{opacity: 1}}
                transition={{duration: 2, delay: 1.8 }}>
                    <ParticleField config={particlesConfigTeal}/>
                </motion.div>
                <section className="hero-content">  
                    <motion.div className="greeting" 
                    initial="start"
                    animate="end" 
                    variants={container}
                    transition={{ ease: "easeIn", duration: 0.25, delay: 1 }}>
                        <h3>Hi, my name is</h3>
                    </motion.div>
                    <motion.div className="name"
                    variants={container}
                    initial="start"
                    animate="end"
                    transition={{ ease: "easeIn", duration: 0.25, delay: 1.1 }}>
                        <h1 ref={this.nameText} aria-label="Ditwan Price">
                            <span className="greeting-chars">D</span>
                            <span className="greeting-chars">i</span>
                            <span className="greeting-chars">t</span>
                            <span className="greeting-chars">w</span>
                            <span className="greeting-chars">a</span>
                            <span className="greeting-chars">n</span>
                            &nbsp;
                            <span className="greeting-chars">P</span>
                            <span className="greeting-chars">r</span>
                            <span className="greeting-chars">i</span>
                            <span className="greeting-chars">c</span>
                            <span className="greeting-chars">e</span>
                            <span className="greeting-chars">.</span>
                        </h1>
                    </motion.div>
                    <motion.div className="profession"
                    style={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeIn", duration: 0.25, delay: 1.2 }}>
                        <h1 ref={this.professionText} aria-label="Ditwan Price">
                            <span className="greeting-chars">I</span>
                            <span className="greeting-chars">'</span>
                            <span className="greeting-chars">m</span>
                            &nbsp;
                            <span className="greeting-chars">a</span>
                            &nbsp;
                            <span className="greeting-chars">D</span>
                            <span className="greeting-chars">e</span>
                            <span className="greeting-chars">v</span>
                            <span className="greeting-chars">e</span>
                            <span className="greeting-chars">l</span>
                            <span className="greeting-chars">o</span>
                            <span className="greeting-chars">p</span>
                            <span className="greeting-chars">e</span>
                            <span className="greeting-chars">r</span>
                            <span className="greeting-chars">.</span>
                            {/* &nbsp;
                            <span className="greeting-chars">E</span>
                            <span className="greeting-chars">n</span>
                            <span className="greeting-chars">g</span>
                            <span className="greeting-chars">i</span>
                            <span className="greeting-chars">n</span>
                            <span className="greeting-chars">e</span>
                            <span className="greeting-chars">e</span>
                            <span className="greeting-chars">r</span>
                            <span className="greeting-chars">.</span> */}
                        </h1>
                    </motion.div>
                    <motion.div className="about-me"
                    style={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeIn", duration: 0.25, delay: 1.3 }}>
                        <h1 aria-label="brief about me">
                            I'm a CS new grad that has developed a genuine passion for coding. 
                            I am eager and open to learning many different technologies, and currently 
                            in search of opportunities that will allow me to continue developing and 
                            honing my skills while contributing what I already know.
                        </h1>
                    </motion.div>
                </section>
            </motion.div>
        );
    }
}
