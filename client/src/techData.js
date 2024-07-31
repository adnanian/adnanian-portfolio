/**
 * A container for one of Adnan's technical projects.
 */
class TechProject {
    /**
     * Creates a new instance of TechProject.
     * 
     * @param {String} name the name of the project.
     * @param {String} headline the one sentence summary of the project.
     * @param {Array} details list of points that pertain to the project.
     * @param {String} githubLink the GitHub URL for the project.
     * @param {String} demoLink the link to the demonstration of the project.
     * @param {String} liveLink the link to the live application or place where it can be downloaded and installed.
     * @param {String} image the URL of a screenshot of the application.
     * @param {Date} dateAdded the date that the project was completed/added.
     */
    constructor(name, headline, details, githubLink, demoLink, liveLink, image, dateAdded) {
        this.name = name;
        this.headline = headline;
        this.details = details;
        this.githubLink = githubLink;
        this.demoLink = demoLink;
        this.liveLink = liveLink;
        this.image = image;
        this.dateAdded = dateAdded;
    }
}

const techProjectDirectory = "./images/tech/";

const techProjects = [
    new TechProject(
        "My Word Bank",
        "Single page application where users can search for the definitions of words and save them into a custom glossary.",
        [
            "Simplified application into one web page each of HTML, CSS, and JavaScript.",
            "Used HTTP fetch requests to retrieve data from the Free Dictionary API to power the application.",
            "Used HTTP methods to store user-added entries into a local JSON file."
        ],
        "https://github.com/adnanian/atw-flatiron-phase-1-project",
        "https://www.youtube.com/watch?v=bmy29HlcJNc",
        null,
        `${techProjectDirectory}my-word-bank.png`,
        new Date('October 16, 2023')
    ),
    new TechProject(
        "Language Classifications CLI",
        "CLI application that allows users to look up a database of languages and language families, and update its information.",
        [
            "Built an ORM from scratch using Python and SQLite.",
            "Used SQL commands to retrieve information on languages and their classifications, as well as creating, updating, and deleting records.",
            "Used OOP principles and additional helper code to display the information to users in neat, formatted tables, and to generate menus of numbered commands, for easier user experience."
        ],
        "https://github.com/adnanian/atw-flatiron-cli-project",
        "https://www.youtube.com/watch?v=XMmLwLyzkWw",
        null,
        `${techProjectDirectory}language-classifications-cli.png`,
        new Date('February 7, 2024')
    ),
    new TechProject(
        "Easy Itemizer",
        "Full-stack web application where individuals and organizations can manage their inventories and quantities of their items.",
        [
            "Developed the front-end using React.js and Flask SQLAlchemy for the backend.",
            "Used controlled forms and Formik to submit requests to add, update, and remove information.",
            "Used RESTful conventions to generate appropriate responses to the backend.",
            "Used Flask Mail to automate emails."
        ],
        "https://github.com/adnanian/easy-itemizer-web",
        "https://youtu.be/67ajXbG4d7M?feature=shared",
        "https://www.easyitemizer.com/",
        `${techProjectDirectory}easy-itemizer.jpg`,
        new Date('July 11, 2024')
    )
];

/**
 * Container for a technical skill, such as a programming language or an operating system.
 */
class Skill {
    /**
     * Creates a new instance of Skill.
     * 
     * @param {String} name the name.
     * @param {String} iconUrl the icon URL.
     */
    constructor(name, iconUrl) {
        this.name = name;
        this.iconUrl = iconUrl;
    }
}

const techStackDirectory = "./assets/techstack/";

const skillSet = [
    new Skill(
        'Java',
        `${techStackDirectory}Java.svg`
    ),
    new Skill(
        'Eclipse IDE',
        `${techStackDirectory}Eclipse IDE.svg`
    ),
    new Skill(
        'HTML',
        `${techStackDirectory}HTML5.svg`
    ),
    new Skill(
        'CSS',
        `${techStackDirectory}CSS3.svg`
    ),
    new Skill(
        'JavaScript',
        `${techStackDirectory}JavaScript.svg`
    ),
    new Skill(
        'React',
        `${techStackDirectory}React.svg`
    ),
    new Skill(
        'Python',
        `${techStackDirectory}Python.svg`
    ),
    new Skill(
        'Flask',
        `${techStackDirectory}Flask.svg`
    ),
    new Skill(
        'SQLite',
        `${techStackDirectory}SQLite.svg`
    ),
    new Skill(
        'SQLAlchemy',
        `${techStackDirectory}SQLAlchemy.svg`
    ),
    new Skill(
        'PostgreSQL',
        `${techStackDirectory}PostgresSQL.svg`
    ),
    new Skill(
        'MySQL',
        `${techStackDirectory}MySQL.svg`
    ),
    new Skill(
        'JSON',
        `${techStackDirectory}JSON.svg`
    ),
    new Skill(
        'Postman',
        `${techStackDirectory}Postman.svg`
    ),
    new Skill(
        'Git',
        `${techStackDirectory}Git.svg`
    ),
]

export { techProjects, skillSet }