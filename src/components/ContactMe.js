import React, { Component } from 'react';
import './ContactMe.scss';
import { motion } from "framer-motion";
import { RiMailSendLine } from 'react-icons/ri';
import ParticleField from 'react-particles-webgl';
import axios from 'axios';
import env from 'dotenv';

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

class ContactMe extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            sending: false,
        }

        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({sending: true})

        if (this.state.name === '' || this.state.email === '' || this.state.message === '')
        {
            alert("Please fill out each field before attempting to send a message.")
        } 
        else {
            axios({
                method: "POST", 
                url:`https://ditwanprice.herokuapp.com/send`, 
                scope:"https://mail.google.com/",
                data: this.state
            })
            .then((response) => {
                if (response.data.status === 'success') {
                    alert("Message was sent successfully.");
                    this.resetForm()
                    this.setState({sending: false})
                } 
                else if (response.data.status === 'fail') {
                    alert("Message failed to send.");
                    this.setState({sending: false})
                }
            })
        }
    }

    resetForm(){
        this.setState({
            name: '', 
            email: '', 
            message: ''
        });
    }

    render() {      
        return (
            <motion.div className="contact-me"
            variants={pageVariants}
            initial="notIn"
            animate="in"
            exit="outDown"
            transition={pageTransitions}>
                <motion.div className="animation-canvas"
                style={{opacity: 0 }}
                animate={{opacity: 1}}
                transition={{duration: 2, delay: 2 }}>
                    <ParticleField config={particlesConfigDark}/>
                </motion.div>
                <motion.div className="animation-canvas"
                style={{opacity: 0 }}
                animate={{opacity: 1}}
                transition={{duration: 2, delay: 2 }}>
                    <ParticleField config={particlesConfigTeal}/>
                </motion.div>
                <section className="contact-me-content">
                    <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
                        <motion.div className="name-input"
                        variants={container}
                        initial="start"
                        animate="end"
                        transition={{ ease: "easeIn", duration: 0.25, delay: 1 }}>
                            <label htmlFor="name">Name</label>
                            <input type="text" 
                            value={this.state.name}
                            onChange={this.onNameChange}/>
                        </motion.div>
                        <motion.div className="email-input"
                        variants={container}
                        initial="start"
                        animate="end"
                        transition={{ ease: "easeIn", duration: 0.25, delay: 1.1 }}>
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" 
                            value={this.state.email} 
                            onChange={this.onEmailChange}
                            aria-describedby="emailHelp" />
                        </motion.div>
                        <motion.div className="message-input"
                        variants={container}
                        initial="start"
                        animate="end"
                        transition={{ ease: "easeIn", duration: 0.25, delay: 1.2 }}> 
                            <label htmlFor="message">Message</label>
                            <textarea rows="5" 
                            value={this.state.message} 
                            onChange={this.onMessageChange}/>
                        </motion.div>
                        <motion.button type="submit" className="send-email-btn"
                        variants={container}
                        initial="start"
                        animate="end"
                        transition={{ ease: "easeIn", duration: 0.25, delay: 1.3 }}>
                            {this.state.sending ? <h1 className="sending-message">Sending...</h1> : <RiMailSendLine className="icon"/>}
                        </motion.button>
                    </form>
                </section>
            </motion.div>
        )
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
}

export default ContactMe;