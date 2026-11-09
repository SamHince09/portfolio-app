import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.jpg';

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <p className="welcome-text">WELCOME TO MY PORTFOLIO </p>

        <h1>
          Hi, I'm Samantha Hince!
        </h1>

        <h2>Aspiring Developer</h2>

        <p className="home-description">
          I'm a computer science student at Weber State University, passionate about
          creating websites and applications that are both
          useful and enjoyable to use.

          Welcome to my portfolio! Take a look at my work
          and get to know a little more about me.
        </p>

        <div className="home-buttons">
          <Link to="/projects" className="primary-button">
            Explore My Projects
          </Link>

          <Link to="/about" className="secondary-button">
            Learn More About Me
          </Link>
        </div>
      </div>

      <div className="home-image">
        <img
          src={profileImage}
          alt="My profile"
        />
      </div>
    </section>
  );
}

export default Home;

// Code developed with assistance from ChatGPT (November 2026).
// Prompt: Help create a React portfolio homepage with local image assets.
// Student Review: Reviewed and customized the component.

// Code developed with assistance from ChatGPT (November 2026).
// Prompt: Help me understand why nothing is output
// Student Review: Reviewed and realized I didn't save the correct image type.
