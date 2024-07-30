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
            <h1>My Technical Projects</h1>
            <Slideshow id="tech-slides">
                {techProjectSlides}
            </Slideshow>
            <ul id="project-card-list">
                {techProjectCards}
            </ul>
        </section>
    );
}