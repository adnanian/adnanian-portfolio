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
            <TechSkillCard key={`t-${skill.name}`} skill={skill} />
        )
    })

    return (
        <section id="skills">
            <h1>What am I Good At?</h1>
            <p className="inner-frame">
                Icons taken from&nbsp;
                <a
                    href="https://techicons.dev/?search=j"
                    className="external"
                    target="_blank"
                    rel="noreferrer"
                >
                    TechIcons
                </a>
                , which in turn have been sourced from&nbsp;
                <a
                    href="https://github.com/devicons/devicon"
                    className="external"
                    target="_blank"
                    rel="noreferrer"
                >
                    DevIcons
                </a>.
            </p>
            <div id="skill-grid">
                {skillCards}
            </div>
        </section>
    );
}