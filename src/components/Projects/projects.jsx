import React from 'react';
import './projects.css';
import gearLogo from '../../assets/gearLogo.png';
import todoLogo from '../../assets/todolistLogo.png';
import manLogo from '../../assets/manLogo.png';
import newsLogo from '../../assets/newsLogo.png';
import spotifyLogo from '../../assets/spotifyLogo.png';
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

        
      {/* project 1 */}
        <div className="projectsContainer">
        <img src={gearLogo} alt="project1" className="projectLogo" />
        <span className="description">Learning Management System</span>
        <h1 className="projectDetails">
          Tool used: Java, Gradle, SQL, mySQL Workbench
        </h1>
        <h2 className="projectDetails">
          Canvas, a well-known learning management system, is seen as having room for improvement by incorporating additional interactive elements. That's why we developed the Prohub application, which includes interactive content like quizzes and feedback tools, as well as a collaboration feature called the "promate system" to facilitate student teamwork.
        </h2>
        <h3 className="projectDetails">    
          Developing this application provides me with valuable insights into the software engineering profession. Throughout the semester, my peers and I engage in extensive online meetings, discussions, and collaborative efforts to achieve our goals. Furthermore, this experience affords us the opportunity to engage in the complete software development lifecycle, encompassing planning, analysis, design, implementation, testing, and integration phases.
        </h3>
        <button className="videoOpenBtn" onClick={() => handleContainerClick(0)} >Watch Video</button>
        </div>
      {/* project 2 */}
        <div className="projectsContainer">
          <img src={todoLogo} alt="project2" className="projectLogo" />
          <span className="description">Daily Task Manager</span>
          <h1 className="projectDetails">
            Tool used: HTML, CSS, JS, EJS, Bootstrap, NodeJS, ExpressJS, MongoDB
          </h1>
          <h2 className="projectDetails">
            Never miss a task again! This application enables users to manage their daily to-do lists. It uses MongoDB to store task data, ensuring that unfinished tasks are displayed every time users reopen the application.
          </h2>
          <h3 className="projectDetails">
            I've gained a wide range of skills and knowledge while developing this application. These skills encompass understanding how full-stack applications operate, working with HTTP requests, utilizing JavaScript asynchronous functions, leveraging the convenience of Bootstrap for rapid app development, using the Embedded JavaScript templating engine to structure my website, and finally, connecting my application to MongoDB for efficient data storage.
          </h3>
          <button className="videoOpenBtn" onClick={() => handleContainerClick(1)} >Watch Video</button>
        </div>

      {/* project 3 */}
        <div className="projectsContainer">
          <img src={spotifyLogo} alt="project3" className="projectLogo" />
          <span className="description">Trending Music PlayList Generator </span>
          <h1 className="projectDetails">
            Tool used: Python, Spotify API, Spotipy, Beautiful Soup, Data Parsing
          </h1>
          <h2 className="projectDetails">
            This application is designed to help users stay in tune with the latest music trends. It integrates the Spotipy library with the Spotify API, allowing users to search for songs and create dynamic playlists that are always up-to-date. Additionally, it utilizes Python for web scraping the Billboard 100, providing users with the top trending songs based on their selected dates. It's a convenient way for users to keep their music collection fresh and in sync with the latest hits.
          </h2>
          <h3 className="projectDetails">
            There were two moments that really sparked my inspiration for creating this application. First, during a road trip, I found myself struggling to come up with a playlist, and it got me thinking about how convenient it would be to have an app that keeps me updated with the latest songs. The second moment was when I realized I was unfamiliar with the songs playing in a friend's car, and they were all the latest hits. That's when the idea solidified – I wanted to develop an app that not only helps me create playlists of the freshest tunes but also lets me explore songs from the past, almost like time traveling through music trends! 
          </h3>
          <button className="videoOpenBtn" onClick={() => handleContainerClick(2)} >Watch Video</button>
        </div>

        {/* project 4 */}
        <div className="projectsContainer">
          <img src={newsLogo} alt="project4" className="projectLogo" />
          <span className="description">News Catcher</span>
          <h1 className="projectDetails">
            Tool used: Python, Beautiful Soup, Google Translate API, Data Parsing
          </h1>
          <h2 className="projectDetails">
            This application is designed to streamline news consumption for users, focusing on a reputable source - The Economic. Using Python, it fetches today's headlines and saves them to a text file. Additionally, it can translate content into various languages using the Google Translate API.
          </h2>
          <h3 className="projectDetails">
            I'm really into this app because I'm a big fan of the economist news. It's awesome how it lets me blend my tech interests with my reading habit, making me feel powerful. Plus, it's super handy for sharing news with my family, especially those who don't speak English. It helps them connected with the world!
          </h3>
          <button className="videoOpenBtn" onClick={() => handleContainerClick(2)} >Watch Video</button>
        </div>

        {/* project 5 */}
        <div className="projectsContainer">
          <img src={manLogo} alt="project5" className="projectLogo" />
          <span className="description">Bo's Page</span>
          <h1 className="projectDetails">
            Tool used: ReactJS, JS, HTML, CSS, emailJS
          </h1>
          <h2 className="projectDetails">
            This personal website project has been a substantial undertaking for me. It serves as a platform where I showcase my skills, display the projects I've worked on, and provide a means for people to reach out to me. Building this project has been an incredible learning experience in website development. It has honed my skills in various aspects, including web design (covering layout, style, structure, and responsiveness), decision-making on tools and frameworks, and implementation. My proficiency in ReactJS has notably improved, especially in understanding component structure and utilizing state management with hooks. I've also become more adept at working with CSS and HTML, with hands-on experience encompassing aspects like padding, flexbox, and animations. Additionally, I've enhanced my proficiency in handling APIs, involving tasks such as managing API keys, tokens, and making requests, exemplified by the integration of emailJS for contact functionality. Furthermore, my grasp of JavaScript, particularly in working with asynchronous operations through async/await functions, has grown significantly.
          </h2>
          <h3 className="projectDetails">
            I'm really into this app because I'm a big fan of the economist news. It's awesome how it lets me blend my tech interests with my reading habit, making me feel powerful. Plus, it's super handy for sharing news with my family, especially those who don't speak English. It helps them connected with the world!
          </h3>
          {/* <button className="videoOpenBtn" onClick={() => handleContainerClick(2)} >Watch Video</button> */}
        </div>

        
        {/* handle video preview */}
        
        {index != null && (
        <div>
        <div className='overlay' onClick={handleCloseVideo}></div>
        <div className="videoWindow" >
          <iframe src={videos[index]} title="Video" frameBorder="0" allowFullScreen></iframe>
          <button className="videoCloseBtn" onClick={handleCloseVideo}>Close Video</button>
        </div>
        </div>
        )}





      </div>
    </section>
  )
}

export default Projects