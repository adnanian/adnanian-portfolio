export default function TechSkillCard({skill}) {
    return (
        <div className="skill-card brown-frame">
            <img src={skill.iconUrl} alt={`Adnan is good with ${skill.name}.`}/>
            <h3>{skill.name}</h3>
        </div>
    )
}