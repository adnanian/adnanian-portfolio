import { useState } from "react";
import "../styles/Projects.css";
import { ProjectType } from "../helpers";

export default function Projects() {
    const [projectType, setProjectType] = useState(ProjectType.TECHNICAL);

    function handleChange(e) {
        setProjectType(e.target.value);
    }

    return (
        <section id="projects">
            <h1>My Projects</h1>
            <p className="inner-frame">
                I have organized all my projects into two categories. One category
                is reserved for all the applications that I made using the skills
                mentioned above. The other category are side projects that I work
                on whenever I have free time.
            </p>
            <div className="radio-group">
                <h2>Select the project type below: </h2>
                <div class="radio">
                    <input
                        name="tech-radio"
                        type="radio"
                        value={ProjectType.TECHNICAL}
                        onChange={handleChange}
                        checked={projectType === ProjectType.TECHNICAL}
                    />
                    <span>Technical Projects</span>
                </div>
                <div class="radio">
                    <input
                        name="side-radio"
                        type="radio"
                        value={ProjectType.SIDE}
                        onChange={handleChange}
                        checked={projectType === ProjectType.SIDE}
                    />
                    <span>Technical Projects</span>
                </div>
            </div>
            {
                projectType === ProjectType.TECHNICAL ? (
                    <p>Tech projects here...</p>
                ) : (
                    <p>Side projects here...</p>
                )
            }
        </section>
    )
}