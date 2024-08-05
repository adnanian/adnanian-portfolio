import { getDateOnly } from "../helpers";

/**
 * Creates a slide for the slideshow based on the information
 * of a given TechProject.
 * 
 * @param {Object} props
 * @param {techProject} props.techProject the TechProject instance. 
 * @returns the technical project's information rendered as a slide (or a card if on small devices).
 */
export default function TechProjectSlide({ techProject }) {

    const details = techProject.details.map((detail, index) => {
        return <li key={index}><p>{detail}</p></li>
    });

    return (
        <div className="project-slide">
            <div className="slide-core">
                <img 
                    src={techProject.image} 
                    alt="The technical project on the computer." 
                    className="inner-frame"
                />
                <div className="project-info inner-frame">
                    <h3>{techProject.name}</h3>
                    <span>{getDateOnly(techProject.dateAdded)}</span>
                    <p className="text-box">{techProject.headline}</p>
                    <ul>
                        {details}
                    </ul>
                </div>
            </div>
            <nav className="slide-nav inner-frame">
                {
                    !techProject.githubLink ? null : (
                        <a
                            className="external"
                            href={techProject.githubLink}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    )
                }
                {
                    !techProject.demoLink ? null : (
                        <a
                            className="external"
                            href={techProject.demoLink}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Demo
                        </a>
                    )
                }
                {
                    !techProject.liveLink ? null : (
                        <a
                            className="external"
                            href={techProject.liveLink}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live App
                        </a>
                    )
                }
            </nav>
        </div>
    )
}