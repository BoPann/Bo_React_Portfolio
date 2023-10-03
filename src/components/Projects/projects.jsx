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
    'https://www.youtube.com/embed/Q6klThbfV_0?si=uAoctSnmcWArH_Wu',
    'https://www.youtube.com/embed/Q6klThbfV_0?si=uAoctSnmcWArH_Wu',
    'https://www.youtube.com/embed/Q6klThbfV_0?si=uAoctSnmcWArH_Wu',
    'https://www.youtube.com/embed/Q6klThbfV_0?si=uAoctSnmcWArH_Wu'
  ];


  return (
    <section id="projects">
      <div className="projectsHeading"> Projects</div>
      <div className="projectsIntro">I am passionate about combining technology and the skills I have learned with my habits, aiming to make changes in my life and, hopefully, in the lives of others as well. Here are some projects I have completed:</div>
      <div className="projectsContainers">

        
      {/* project 1 */}
        <div className="projectsContainer">
        <img src={gearLogo} alt="project1" className="projectLogo" />
        <span className="description">Learning Management System</span>
        <h1 className="projectDetails">
          Java, Gradle, SQL, mySQL Workbench
        </h1>
        <h2 className='projectDetails'>---</h2>
        <div className="projectDetails">
          <h2>Canvas, a well-known learning management system, is seen as having room for improvement by incorporating additional interactive elements. That's why we developed the <span className="highlight">Prohub</span> application, which includes interactive content like quizzes and feedback tools, as well as a collaboration feature called the "promate system" to facilitate student teamwork.</h2>
        </div>
        <h2 className='projectDetails'>---</h2>
        <div className="projectDetails">
          <h2>Developing this application provides me with valuable insights into the software engineering profession. Throughout the semester, my peers and I engage in extensive online meetings, discussions, and collaborative efforts to achieve our goals. Furthermore, this experience affords us the opportunity to engage in the <span className="highlight">complete software development lifecycle, including planning, analysis, design, implementation, testing, and integration phases</span>.</h2>
        </div>
        <button className="videoOpenBtn" onClick={() => handleContainerClick(0)} >Watch Video</button>
        </div>
      {/* project 2 */}
        <div className="projectsContainer">
          <img src={todoLogo} alt="project2" className="projectLogo" />
          <span className="description">Daily Task Manager</span>
          <h1 className="projectDetails">
            Tool used: HTML, CSS, JS, EJS, Bootstrap, NodeJS, ExpressJS, MongoDB
          </h1>
          <h2 className='projectDetails'>---</h2>
          <div className='projectDetails'>
          <h2>Never miss a task again! This application enables users to <span className="highlight">manage their daily to-do lists</span>. It uses MongoDB to store task data, ensuring that unfinished tasks are displayed every time users reopen the application.</h2>
          </div>
          <h2 className='projectDetails'>---</h2>
          <div className="projectDetails">
          <h2>I've gained a wide range of skills and knowledge while developing this application. These skills enhance my understanding of how <span className="highlight">full-stack applications</span> operate, working with <span className="highlight">HTTP requests</span>, utilizing <span className="highlight">JavaScript asynchronous functions</span>, leveraging the convenience of <span className="highlight">Bootstrap</span> for rapid app development, using the <span className="highlight">Embedded JavaScript templating engine</span> to structure my website, and finally, connecting my application to <span className="highlight">MongoDB </span>for efficient data storage.</h2>
          </div>
          <button className="videoOpenBtn" onClick={() => handleContainerClick(1)} >Watch Video</button>
        </div>

      {/* project 3 */}
        <div className="projectsContainer">
          <img src={spotifyLogo} alt="project3" className="projectLogo" />
          <span className="description">Trending Music PlayList Generator </span>
          <h1 className="projectDetails">
            Python, Spotify API, Spotipy, Beautiful Soup, Data Parsing
          </h1>
          <h2 className='projectDetails'>---</h2>
          <div className='projectDetails'>
            <h2>This application is designed to help users <span className="highlight">stay in tune with the latest music trends</span>. It integrates the Spotipy library with the Spotify API, allowing users to search for songs and create dynamic playlists that are always up-to-date. Additionally, it utilizes Python for web scraping the Billboard 100, providing users with the top trending songs based on their selected dates. It's a convenient way for users to keep their music collection fresh and in sync with the latest hits.</h2>
          </div>
          <h2 className='projectDetails'>---</h2>
          <div className="projectDetails">
            <h2>There were two moments that really sparked my inspiration for creating this application. First, during a road trip, I found myself struggling to come up with a playlist, and it got me thinking about how convenient it would be to have an app that keeps me updated with the latest songs. The second moment was when I realized I was unfamiliar with the songs playing in a friend's car, and they were all the latest hits. That's when the idea solidified – 
              <span className="highlight">I wanted to develop an app that not only helps me create playlists of the latest songs but also lets me explore songs from the past, almost like time traveling through music trends!</span> </h2>
          </div>
          <button className="videoOpenBtn" onClick={() => handleContainerClick(2)} >Watch Video</button>
        </div>

        {/* project 4 */}
        <div className="projectsContainer">
          <img src={newsLogo} alt="project4" className="projectLogo" />
          <span className="description">News Catcher</span>
          <h1 className="projectDetails">
            Python, Beautiful Soup, Google Translate API, Data Parsing
          </h1>
          <h2 className='projectDetails'>---</h2>
          <div className="projectDetails">
            <h2>This application is designed to streamline news consumption for users, focusing on a reputable source - The Economist. Using Python, it<span className="highlight"> fetches today's headlines</span> and saves them to a text file. Additionally, it can <span className="highlight"> translate content</span> into various languages using the Google Translate API.</h2>
          </div>
          <h2 className='projectDetails'>---</h2>
          <div className="projectDetails">
          <h2>I'm really into this app because I'm a big fan of the economist news. <span className="highlight">It's awesome how it lets me blend my tech interests with my reading habit</span>, making me feel powerful. Plus, it's super handy for sharing news with my family, especially those who don't speak English. It helps them connected with the world!</h2>
          </div>
          <button className="videoOpenBtn" onClick={() => handleContainerClick(2)} >Watch Video</button>
        </div>

        {/* project 5 */}
        <div className="projectsContainer">
          <img src={manLogo} alt="project5" className="projectLogo" />
          <span className="description">Bo's Page</span>
          <h1 className="projectDetails">
            ReactJS, JS, HTML, CSS, emailJS
          </h1>
          <h2 className='projectDetails'>---</h2>
          <div className="projectDetails">
            <h2>This serves as a platform where I showcase my skills, display the projects I've worked on, and provide a means for people to reach out to me. Building this project has been an incredible learning experience in website development. It has honed my skills in various aspects, including <span className='highlight'>web design</span> (covering layout, style, structure, and responsiveness), decision-making on <span className='highlight'>tools and frameworks</span>, and implementation. My proficiency in <span className="highlight">ReactJS </span> has notably improved, especially in understanding component structure and utilizing state management with hooks. I've also become more adept at working with CSS and HTML, with hands-on experience encompassing aspects like <span className="highlight">padding, flexbox, and animations</span>. Additionally, I've enhanced my proficiency in handling <span className="highlight"> APIs</span>, involving tasks such as managing API keys, tokens, and making requests, like the integration of emailJS for contact functionality. Furthermore, my grasp of JavaScript, particularly in working with asynchronous operations through async/await functions, has grown significantly.</h2>
          </div>
          <h2 className='projectDetails'>---</h2>
          <h2 className="projectDetails">
            {/* I'm really into this app because I'm a big fan of the economist news. It's awesome how it lets me blend my tech interests with my reading habit, making me feel powerful. Plus, it's super handy for sharing news with my family, especially those who don't speak English. It helps them connected with the world! */}
          </h2>
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