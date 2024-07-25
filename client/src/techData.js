class TechProject {
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

const techDirectory = "./images/tech/";

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
        `${techDirectory}my-word-bank.png`,
        new Date('July 20, 2024')
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
        `${techDirectory}language-classifications-cli.png`,
        new Date('July 20, 2024')
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
        `${techDirectory}easy-itemizer.jpg`,
        new Date('July 20, 2024')
    )
]

export {techProjects}