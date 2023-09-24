import React from 'react';
import './skills.css';
import CPP from "../../assets/C++.png"
import CSS from "../../assets/cssLogo.png"
import HTML from "../../assets/htmlLogo.png"
import JS from "../../assets/jsLogo.png"
import nodeLogo from "../../assets/nodeLogo.png"
import reactLogo from "../../assets/reactLogo.png"
import JAVA from "../../assets/javaLogo.png"
import SQL from "../../assets/sqlLogo.png"
import mongo from "../../assets/mongoLogo.png"
import gitLogo from "../../assets/gitLogo.png"
import pythonLogo from "../../assets/pythonLogo.png"

const Skills = () => {
  return (
    <section id="skills">
    <div className="skillHeading">
        <p className="skillIntro">Skills</p>
        <p className="skillText">
        I am passionate about developing technology to drive positive change in people's lives.
            During my programming journey, I've diligently acquired and am continuously honing a diverse skill set, including:</p>  
    </div>
 
        <div className="skillContainers">
            <div className="skillContainer">
                <img src={HTML} alt="" className="skill1" />
            </div>
            <div className="skillContainer">
                <img src={CSS} alt="" className="skill2" />
            </div>
            <div className="skillContainer">
                <img src={JS} alt="" className="skill3" />
            </div>
            <div className="skillContainer">
                <img src={reactLogo} alt="" className="skill5" />
            </div>
            <div className="skillContainer">
                <img src={nodeLogo} alt="" className="skill6" />
            </div>
            <div className="skillContainer">
                <img src={CPP} alt="" className="skill4" />
            </div>
            <div className="skillContainer">
                <img src={JAVA} alt="" className="skill7" />
            </div>
            <div className="skillContainer">
                <img src={SQL} alt="" className="skill8" />
            </div>
            <div className="skillContainer">
                <img src={mongo} alt="" className="skill9" />
            </div>
            <div className="skillContainer">
                <img src={gitLogo} alt="" className="skill9" />
            </div>
            <div className="skillContainer">
                <img src={pythonLogo} alt="" className="skill9" />
            </div>
            
        </div>
    </section>
  )
}

export default Skills