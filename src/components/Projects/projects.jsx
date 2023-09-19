import React from 'react';
import './projects.css';
import Project1 from '../../assets/gearLogo.png';
import Project2 from '../../assets/todolistLogo.png';
import v1 from '../../assets/bg.mp4'
import {useState} from 'react';


const Projects = () => {

  const [showVideo, setShowVideo] = useState(false);

  const handleContainerClick = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };


  return (
    <section id="projects">
      <div className="projectsHeading"> Projects</div>
      <div className="projectsIntro">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum dicta accusamus iste magni totam officiis nobis, odio nam. Suscipit commodi incidunt deserunt fugiat libero unde aut odio quae eveniet adipisci?</div>
      <div className="projectsContainers">
        {/* <div className="projectsContainer">
            <img src={Project1} alt="project1" className="project" />
            <span className="description">Learning Management System</span>
        </div> */}


        <div className="projectsContainer" onClick={handleContainerClick}>
        <img src={Project1} alt="project1" className="project" />
        <span className="description">Learning Management System</span>
        </div>

        <div className="projectsContainer" onClick={handleContainerClick}>
          <img src={Project2} alt="project2" className="project" />
          <span className="description">To Do List</span>
        </div>
        <div className="projectsContainer" onClick={handleContainerClick}>
          <img src={Project2} alt="project3" className="project" />
          <span className="description">Trending Music PlayList Creator </span>
        </div>


        
        {/* handle video preview */}
        
        {showVideo && (
        <div className='overlay'></div> &&
        <div className="videoWindow">
          <iframe src={v1} title="Video" frameBorder="0" allowFullScreen></iframe>
          <button className="videoBtn" onClick={handleCloseVideo}>Close Video</button>
        </div>
        )}

        {showVideo && (
        <div className='overlay'></div> &&
        <div className="videoWindow">
          <iframe src={v1} title="Video" frameBorder="0" allowFullScreen></iframe>
          <button className="videoBtn" onClick={handleCloseVideo}>Close Video</button>
        </div>
        )}

        {showVideo && (
        <div className='overlay'>
        <div className="videoWindow">
          <iframe src={v1} title="Video" frameBorder="0" allowFullScreen></iframe>
          <button className="videoBtn" onClick={handleCloseVideo}>Close Video</button>
        </div>
        </div>
        )}




      </div>
    </section>
  )
}

export default Projects