import TechSkillCard from "../components/TechSkillCard";
import { skillSet } from "../techData";
import "../styles/SkillsSection.css";

export default function SkillsSection() {

    console.log(skillSet);

    const skillCards = skillSet.map((skill) => {
        return (
            <li key={`t-${skill.name}`}><TechSkillCard skill={skill}/></li>
        )
    })

    return (
        <section id="skills">
            <h1>What am I Good At?</h1>
            <ul>
                {skillCards}
            </ul>
        </section>
    );
}