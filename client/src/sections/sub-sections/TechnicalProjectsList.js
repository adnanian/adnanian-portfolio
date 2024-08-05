import Slideshow from "../../components/Slideshow";
import TechProjectSlide from "../../components/TechProjectSlide";
import { techProjects } from "../../techData";

/**
 * Creates a sub-section showing all of Adnan's technical works.
 * If the screen is large, then the technical works will be rendered as a slideshow.
 * Otherwise, they will be rendered as a vertical list of cards.
 * 
 * @returns the list of technical projects.
 */
export default function TechnicalProjectsList() {
    const techProjectSlides = techProjects.map((techProject) => {
        return (
            <TechProjectSlide key={techProject.name} techProject={techProject} />
        );
    });

    // const techProjectCards = techProjects.map((techProject) => {
    //     return (
    //         <li key={techProject.name}><TechProjectSlide techProject={techProject} /></li>
    //     );
    // });

    return (
        <div id="tech-projects" className="sub-section">
            <h2 className="fancy-font">My Technical Projects</h2>
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
        </div>
    )
}