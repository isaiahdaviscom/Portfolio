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
      <div className={style.module}>
        <h1 className={style.title}>Coming Soon</h1>
        <ul className={style.social}>
          <li>
            <a href="https://www.linkedin.com/in/isaiahdavis/">Linkedin</a>
          </li>
          <li>
            <a href="https://github.com/isaiahdaviscom">Github</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1rH7Eucq0iVyIELQjll8vozXqsrV45okn/view?usp=sharing">
              Resume
            </a>
          </li>
        </ul>
      </div>
      {/* <Slides data={Projects.projects}></Slides> */}
    </div>
  );
};

export default Home;
