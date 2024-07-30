import Slideshow from "../components/Slideshow";
import TechProjectSlide from "../components/TechProjectSlide";
import { techProjects } from "../techData";
import "../styles/TechnicalProjectsSection.css";

export default function TechnicalProjectsSection() {
    
    const techProjectSlides = techProjects.map((techProject) => {
        return (
            <TechProjectSlide key={techProject.name} techProject={techProject}/>
        );
    });

    const techProjectCards = techProjects.map((techProject) => {
        return (
            <li key={techProject.name}><TechProjectSlide  techProject={techProject}/></li>
        );
    });

    return (
        <section id="technical-projects">
            <h1 className="fancy-font">My Technical Projects</h1>
            <article>
                <p>
                    Here are all the applications I made. Use the arrow buttons to
                    navigate between each slide. Each project includes a link to the
                    GitHub repository as well as a video demonstration. For all deployed
                    applications, an additional link to the live product is provided
                    too.
                </p>
            </article>
            <Slideshow id="tech-slides" title="My Applications">
                {techProjectSlides}
            </Slideshow>
            <ul id="project-card-list">
                {techProjectCards}
            </ul>
        </section>
    );
}