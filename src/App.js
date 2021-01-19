import React from 'react';
import loadable from '@loadable/component'
import { AnimatePresence, motion } from 'framer-motion';
import { Route, Switch, NavLink, useLocation } from 'react-router-dom';
import { faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.scss';

const Home = loadable(() => import('./components/Home'));
const Skills = loadable(() => import('./components/Skills'));
const Projects = loadable(() => import('./components/Projects'));
const ContactMe = loadable(() => import('./components/ContactMe'));

function App() {
    const location = useLocation();
    return (
        <div className="App">
            <motion.div className="sidenav-container"
                style={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1}}
                transition={{ ease: "easeOut", duration: 0.25, delay: 1}}>
                    <motion.a className="logo" href="https://ditwan.tech"
                    style={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1}}
                    transition={{ ease: "easeOut", duration: 0.25, delay: 1.5}}>
                        <svg width="40" height="44" viewBox="0 0 391 404" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M195.5 13L364.808 107.5V296.5L195.5 391L26.192 296.5V107.5L195.5 13Z" stroke="#D44729" stroke-width="22"/>
                            <path d="M249.904 258.496C249.904 275.008 246.064 286.72 238.384 293.632C230.896 300.544 218.416 304 200.944 304H141.616V102.4H197.488C214.768 102.4 227.824 105.952 236.656 113.056C245.488 119.968 249.904 131.392 249.904 147.328V258.496ZM224.848 144.736C224.848 138.4 222.928 133.408 219.088 129.76C215.248 125.92 210.16 124 203.824 124H166.672V282.4H203.536C210.832 282.4 216.208 280.768 219.664 277.504C223.12 274.048 224.848 268.672 224.848 261.376V144.736Z" fill="#D44729"/>
                        </svg>
                    </motion.a>
                    <nav className="nav"> 
                        <input id="ham-nav"type="checkbox"/>
                        <motion.label id="ham-nav-label" htmlFor="ham-nav"
                        whileTap={{scale: 0.8, color: "#FFB612"}}>
                            &#9776;
                        </motion.label>
                        <motion.div className="ham-nav-items"
                        style={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1}}
                        transition={{ ease: "easeOut", duration: 0.25, delay: 2 }}>
                            <NavLink to="/" exact activeClassName="active-link" className="nav-links">
                                <svg height="26" width="26" xmlns='http://www.w3.org/2000/svg' className='ionicon' viewBox='0 0 512 512'>
                                    <title>Home</title>
                                    <path d='M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32'/>
                                    <path d='M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='30'/>
                                </svg>
                                <span>Home</span>
                            </NavLink>
                            <NavLink to="/skills" exact activeClassName="active-link" className="nav-links">
                                <svg height="26" width="26" xmlns='http://www.w3.org/2000/svg' className='ionicon' viewBox='0 0 512 512'>
                                    <title>Skills</title>
                                    <path d='M277.42 247a24.68 24.68 0 00-4.08-5.47L255 223.44a21.63 21.63 0 00-6.56-4.57 20.93 20.93 0 00-23.28 4.27c-6.36 6.26-18 17.68-39 38.43C146 301.3 71.43 367.89 37.71 396.29a16 16 0 00-1.09 23.54l39 39.43a16.13 16.13 0 0023.67-.89c29.24-34.37 96.3-109 136-148.23 20.39-20.06 31.82-31.58 38.29-37.94a21.76 21.76 0 003.84-25.2zM478.43 201l-34.31-34a5.44 5.44 0 00-4-1.59 5.59 5.59 0 00-4 1.59h0a11.41 11.41 0 01-9.55 3.27c-4.48-.49-9.25-1.88-12.33-4.86-7-6.86 1.09-20.36-5.07-29a242.88 242.88 0 00-23.08-26.72c-7.06-7-34.81-33.47-81.55-52.53a123.79 123.79 0 00-47-9.24c-26.35 0-46.61 11.76-54 18.51-5.88 5.32-12 13.77-12 13.77a91.29 91.29 0 0110.81-3.2 79.53 79.53 0 0123.28-1.49C241.19 76.8 259.94 84.1 270 92c16.21 13 23.18 30.39 24.27 52.83.8 16.69-15.23 37.76-30.44 54.94a7.85 7.85 0 00.4 10.83l21.24 21.23a8 8 0 0011.14.1c13.93-13.51 31.09-28.47 40.82-34.46s17.58-7.68 21.35-8.09a35.71 35.71 0 0121.3 4.62 13.65 13.65 0 013.08 2.38c6.46 6.56 6.07 17.28-.5 23.74l-2 1.89a5.5 5.5 0 000 7.84l34.31 34a5.5 5.5 0 004 1.58 5.65 5.65 0 004-1.58L478.43 209a5.82 5.82 0 000-8z' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='30'/>
                                </svg>
                                <span>Skills</span>
                            </NavLink>
                            <NavLink to="/projects" exact activeClassName="active-link" className="nav-links">
                                <svg height="26" width="26" xmlns='http://www.w3.org/2000/svg' className='ionicon' viewBox='0 0 512 512'>
                                    <title>Projects</title>
                                    <rect x='48' y='96' width='416' height='304' rx='32.14' ry='32.14' fill='none' stroke='currentColor' strokeLinejoin='round' strokeWidth='30'/>
                                    <path stroke='currentColor' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32' d='M16 416h480'/>
                                </svg>
                                <span>Projects</span>
                            </NavLink>
                            <NavLink to="/contact-me" exact activeClassName="active-link" className="nav-links">
                                <svg height="26" width="26" xmlns='http://www.w3.org/2000/svg' className='ionicon' viewBox='0 0 512 512'>
                                    <title>Contact</title>
                                    <rect x='48' y='96' width='416' height='320' rx='40' ry='40' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='30'/>
                                    <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M112 160l144 112 144-112'/>
                                </svg>                                
                                <span>Contact</span>
                            </NavLink>
                        </motion.div>
                    </nav>
                    <motion.ul className="socials"
                    style={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1}}
                    transition={{ ease: "easeOut", duration: 0.25, delay: 2.5}}>
                        <li>
                            <a className="linkedin" href="https://linkedin.com/in/ditwan-price-6829b7103">
                                <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                            </a>
                        </li>
                        <li>
                            <a className="github" href="https://github.com/DitwanP">
                                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                            </a>
                        </li>
                    </motion.ul>
            </motion.div>
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route exact path="/" component={Home} />
                    <Route path="/skills" component={Skills} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact-me" component={ContactMe} />
                </Switch>
            </AnimatePresence>
        </div>
    );
}

export default App;
