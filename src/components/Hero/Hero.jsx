import React from 'react';
import Header from '../Header/Header';
import Hero_image from "../../assets/hero_image.png";
import Hero_image_back from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png";
import Heart from "../../assets/heart.png";
import NumberCounter from 'number-counter'
import './Hero.css'

import {motion} from 'framer-motion'
const Hero = () => {
    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className='hero' id='home'>
        <div className="blur hero-blur"></div>
        <div className="left-h">

            <Header/>    
            
            { /*the best ad */}
            <div className="the-best-ad">
                <motion.div
                initial={{left: mobile? "140px": '238px'}}
                whileInView={{left: '8px'}}
                transition={{...transition, type: 'tween'}}            
                ></motion.div>
                <span>the best fitness club in the town</span>
            </div>

            {/*Hero Heading */}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
                <div>
                    <span>
                       In here we will help you to shape and build your ideal body and 
                       live up your life to fullest
                    </span>
                </div>
            </div>

            {/*figures */}
            <div className="figures">
                <div>
                    <span>
                        <NumberCounter end={140} start={100}  delay='4' preFix="+"/>
                    </span>
                    <span>expert coachs</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={978} start={800}  delay='4' preFix="+"/>
                    </span>
                    <span>member joined</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={50} start={0}  delay='4' preFix="+"/>
                    </span>
                    <span>fitness porgrams</span>
                </div>
            </div>

            {/*hero button */}
            <div className="hero-buttons">
                <button className='btn'>Get Started</button>
                <button className='btn'>Learn More</button>
            </div>
        </div>


        <div className="right-h">
            <button className='btn'>Join Now</button>

            <motion.div
            initial={{right:'-1rem'}}
            whileInView={{right:'4rem'}}
            transition={transition}
            className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span><span> 116 bpm</span>
            </motion.div>

            {/*hero image*/}
            <img src={Hero_image} alt="" className='hero-image' />
            <motion.img
            initial={{right:'11rem'}}
            whileInView={{right:'20rem'}}
            transition={transition}
            src={Hero_image_back} alt="" className='hero-image-back' />

            {/*calories */}
            <motion.div
            initial={{right:'37rem'}}
            whileInView={{right:'28rem'}}
            transition={transition}
            className="calories">
                <img src={Calories} alt="" />
                <div>
                    <span>Calories Burned</span>
                    <span> 220 keal</span>
                </div>
            </motion.div>


        </div>

    </div>
  );
}

export default Hero

