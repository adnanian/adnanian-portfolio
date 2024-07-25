import "../styles/Header.css";

/**
 * https://www.youtube.com/watch?v=aNDqzlAKmZc
 * 
 * @returns 
 */
export default function Header() {

    const navigationalLinks = [
        (
            <a
                key="about"
                className="nav-link"
                href="#about"
                title="Click here to learn more about Adnan Wazwaz."
            >
                About
            </a>
        ),
        (
            <a
                className="nav-link"
                href="#skills"
                title="Click here to learn more about Adnan's skills."
            >
                Skills
            </a>
        ),
        (
            <a
                className="nav-link"
                href="#technical-projects"
                title="Click here to view Adnan's technical works."
            >
                Technical Projects
            </a>
        ),
        (
            <a
                className="nav-link"
                href="#side-projects"
                title="Click here to view Adnan's projects that don't involve software engineering."
            >
                Side Projects
            </a>
        ),
        (
            <a
                className="nav-link"
                href="#contact"
                title="Click here to navigate to a form where you can get in touch with Adnan."
            >
                Contact
            </a>
        )
    ];

    return (
        <header>
            <a
                href="#home"
                title="Click here to navigate back to the home page."
            >
                <figure id="site-logo">
                    <img
                        src="./adnanian-flag.png"
                        alt="The flag of Adnan - Consists of a black square with four rings, each in red, black, white, and green."
                    />
                    <figcaption>Home Page</figcaption>
                </figure>
            </a>
            <span>Adnan Wazwaz</span>
            <nav className="off-screen-menu">
                {navigationalLinks}
            </nav>
            <nav className="hamburger-menu">

            </nav>
        </header>
    )
}