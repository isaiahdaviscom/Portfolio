import { h } from "preact";
import { useEffect } from "preact/hooks";
import style from "./style";
//
import Slides from "../../components/slides";
import Projects from "../../components/projects";

const Home = () => {
  /**
   * Netlify CMS's accept invite link land on home page.
   * This redirection takes it to the right place(/admin).
   */

  useEffect(() => {
    if (
      window !== undefined &&
      window.location.href.includes("#invite_token")
    ) {
      const { href } = window.location;
      window.location.href = `${href.substring(
        0,
        href.indexOf("#")
      )}admin${href.substring(href.indexOf("#"))}`;
    }
  }, []);
  console.log(Projects);
  return (
    <div className={style.home}>
      <div style={{textAlign:"center"}} className={style.module}>
        <h1 className={style.title}>Coming Soon</h1>
        <img src="assets/profile-branded.png" alt="Avatar" />
        <h4>Visual Designer <span style={{color: "#aaaaaa"}}>&amp;</span> Front-end Developer</h4>
        <div className={style.social} style={{display:"flex"}}> 
          <a href="https://www.linkedin.com/in/isaiahdavis/">
            <img style={{height:"36px"}} src="assets/vendors/fontawesome/linkedin-brands.svg" alt="My Linkedin profile" />
            <p><small>Linkedin</small></p>
          </a>
          <a href="https://github.com/isaiahdaviscom">
            <img style={{height:"36px"}} src="assets/vendors/fontawesome/github-square-brands.svg" alt="My GitHub profile" />
            <p><small>Github</small></p>
          </a>
          <a href="https://www.behance.net/isaiahdavism">
            <img style={{height:"36px"}} src="assets/vendors/fontawesome/behance-square-brands.svg" alt="My Adobe Behance profile" />
            <p><small>Behance</small></p>
          </a>
          <a href="https://drive.google.com/file/d/1rH7Eucq0iVyIELQjll8vozXqs rV45okn/view?usp=sharing">
            <img style={{height:"36px"}} src="assets/vendors/fontawesome/file-word-regular.svg" alt="My Résumé" />
            <p><small>R&eacute;sum&eacute;</small></p>
          </a>
        </div>
        <div style={{display:"none"}}>
          <h3>Projects</h3>
          <div style={{display: "flex"}}>
            <div>image</div> 
            <div>title</div> 
          </div>
        </div>
      </div>
      {/* <Slides data={Projects.projects}></Slides> */}
    </div>
  );
};

export default Home;
