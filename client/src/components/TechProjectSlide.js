import { getDateOnly } from "../helpers";

export default function TechProjectSlide({techProject}) {

    const details = techProject.details.map((detail, index) => {
        return <li key={index}><p>{detail}</p></li>
    });
    
    return (
        <div className="project-slide">
            <div className="slide-core">
                <img src={techProject.image} alt="The technical project on the computer."/>
                <div className="project-info">
                    <h3>{techProject.name}</h3>
                    <span>{getDateOnly(techProject.dateAdded)}</span>
                    <p className="text-box">{techProject.headline}</p>
                    <ul>
                        {details}
                    </ul>
                </div>
            </div>
            <nav className="slide-nav">
                {
                    !techProject.githubLink ? null : (
                        <a
                            className="nav-link external"
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
                            className="nav-link external"
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
                            className="nav-link external"
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