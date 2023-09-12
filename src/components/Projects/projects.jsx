import React from 'react';
import './projects.css';
import Project1 from '../../assets/gearLogo.png';
import Project2 from '../../assets/todolistLogo.png'


const Projects = () => {
  return (
    <section id="projects">
      <div className="projectsHeading"> Projects</div>
      <div className="projectsIntro">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum dicta accusamus iste magni totam officiis nobis, odio nam. Suscipit commodi incidunt deserunt fugiat libero unde aut odio quae eveniet adipisci?</div>
      <div className="projectsContainers">
        <div className="projectsContainer">
            <img src={Project1} alt="project1" className="project" />
            <span className="description">Learning Management System</span>
        </div>
        <div className="projectsContainer">
          <img src={Project2} alt="project1" className="project" />
          <span className="description">To Do List</span>
        </div>
        <div className="projectsContainer">
          <img src={Project2} alt="project1" className="project" />
          <span className="description">Lorem ipsum dolor sit amet lo </span>
        </div>

      </div>
    </section>
  )
}

export default Projects