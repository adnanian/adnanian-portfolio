/**
 * Creates a small card of a technical skill.
 * 
 * @param {Object} props
 * @param {Skill} props.skill the technical skill. 
 * @returns a skill's icon and name.
 */
export default function TechSkillCard({ skill }) {
    return (
        <div className="skill-card inner-frame">
            <img src={skill.iconUrl} alt={`Adnan is good with ${skill.name}.`} />
            <h3>{skill.name}</h3>
        </div>
    )
}