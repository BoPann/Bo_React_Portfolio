import React from 'react';
import './projects.css';
import Project1 from '../../assets/gearLogo.png';
import Project2 from '../../assets/todolistLogo.png';
import v0 from '../../assets/bg.mp4'
import v1 from '../../assets/star.mp4'
import v2 from '../../assets/landing.mp4'
import {useState} from 'react';


const Projects = () => {

  const [index, setIndex] = useState(null);

  const handleContainerClick = (index) => {
    setIndex(index);
  };

  const handleCloseVideo = () => {
    setIndex(null);
  };

  const videos = [
    'https://www.youtube.com/embed/QUNrBEhvXWQ',
    'https://www.youtube.com/embed/Puo3VkPkNZ4',
    'https://www.youtube.com/embed/6i-84wqc_qU' 
  ];


  return (
    <section id="projects">
      <div className="projectsHeading"> Projects</div>
      <div className="projectsIntro">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum dicta accusamus iste magni totam officiis nobis, odio nam. Suscipit commodi incidunt deserunt fugiat libero unde aut odio quae eveniet adipisci?</div>
      <div className="projectsContainers">
        {/* <div className="projectsContainer">
            <img src={Project1} alt="project1" className="project" />
            <span className="description">Learning Management System</span>
        </div> */}


        <div className="projectsContainer" onClick={() => handleContainerClick(0)}>
        <img src={Project1} alt="project1" className="projectLogo" />
        <span className="description">Learning Management System</span>
        <span className="projectDetails">this is the detail of the project</span>
        </div>

        <div className="projectsContainer" onClick={() => handleContainerClick(1)}>
          <img src={Project2} alt="project2" className="projectLogo" />
          <span className="description">To Do List</span>
        </div>
        <div className="projectsContainer" onClick={() => handleContainerClick(2)}>
          <img src={Project2} alt="project3" className="projectLogo" />
          <span className="description">Trending Music PlayList Creator </span>
        </div>


        
        {/* handle video preview */}
        
        {index != null && (
        <div>
        <div className='overlay' onClick={handleCloseVideo}></div>
        <div className="videoWindow" >
          <iframe src={videos[index]} title="Video" frameBorder="0" allowFullScreen></iframe>
          <button className="videoBtn" onClick={handleCloseVideo}>Close Video</button>
        </div>
        </div>
        )}





      </div>
    </section>
  )
}

export default Projects