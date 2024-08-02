import TechSkillCard from "../components/TechSkillCard";
import { skillSet } from "../techData";
import "../styles/SkillsSection.css";

/**
 * Creates a section of the page showing all of Adnan's skills.
 * 
 * @returns the skills section.
 */
export default function SkillsSection() {

    const skillCards = skillSet.map((skill) => {
        return (
            <li key={`t-${skill.name}`}><TechSkillCard skill={skill} /></li>
        )
    })

    return (
        <section id="skills">
            <h1>What am I Good At?</h1>
            <span className="round-frame">
                Icons taken from&nbsp;
                <a 
                    href="https://techicons.dev/?search=j" 
                    className="nav-link external"
                    target="_blank"
                    rel="noreferrer"
                >
                    TechIcons
                </a>
                , which in turn have been sourced from&nbsp;
                <a 
                    href="https://github.com/devicons/devicon" 
                    className="nav-link external"
                    target="_blank"
                    rel="noreferrer"
                >
                    DevIcons
                </a>.
            </span>
            {/* <ul>
                {skillCards}
            </ul> */}
        </section>
    );
}