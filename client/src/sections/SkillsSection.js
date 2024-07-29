import TechSkillCard from "../components/TechSkillCard";
import { skillSet } from "../techData";
import "../styles/SkillsSection.css";

export default function SkillsSection() {

    const skillCards = skillSet.map((skill) => {
        return (
            <li key={`t-${skill.name}`}><TechSkillCard skill={skill} /></li>
        )
    })

    return (
        <section id="skills">
            <h1>What am I Good At?</h1>
            <span>
                Icons taken from&nbsp;
                <a 
                    href="https://techicons.dev/?search=j" 
                    className="nav-link external"
                >
                    TechIcons
                </a>
                , which in turn have been sourced from&nbsp;
                <a 
                    href="https://github.com/devicons/devicon" 
                    className="nav-link external"
                >
                    DevIcons
                </a>.
            </span>
            <ul>
                {skillCards}
            </ul>
        </section>
    );
}