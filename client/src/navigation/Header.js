import "../styles/Header.css";

/**
 * https://www.youtube.com/watch?v=aNDqzlAKmZc
 * 
 * @returns 
 */
export default function Header({showMobileMenu, onToggle, onSmartToggle}) {

    const navigationalLinks = [
        (
            <a
                key="about"
                className="nav-link"
                href="#about"
                title="Click here to learn more about Adnan Wazwaz."
                onClick={onSmartToggle}
            >
                About
            </a>
        ),
        (
            <a
                key="skills"
                className="nav-link"
                href="#skills"
                title="Click here to learn more about Adnan's skills."
                onClick={onSmartToggle}
            >
                Skills
            </a>
        ),
        (
            <a
                key="tech-projects"
                className="nav-link"
                href="#technical-projects"
                title="Click here to view Adnan's technical works."
                style={{display: 'flex', flexDirection: 'column'}}
                onClick={onSmartToggle}
            >
                {
                    showMobileMenu ? "Technical Projects" : (
                        <>
                            <span>Technical</span> 
                            <span>Projects</span>
                        </>
                    )
                }
            </a>
        ),
        (
            <a
                key="side-projects"
                className="nav-link"
                href="#side-projects"
                title="Click here to view Adnan's projects that don't involve software engineering."
                style={{display: 'flex', flexDirection: 'column'}}
                onClick={onSmartToggle}
            >
                {
                    showMobileMenu ? "Side Projects" : (
                        <>
                            <span>Side</span> 
                            <span>Projects</span>
                        </>
                    )
                }
            </a>
        ),
        (
            <a
                key="contact"
                className="nav-link"
                href="#contact"
                title="Click here to navigate to a form where you can get in touch with Adnan."
                onClick={onSmartToggle}
            >
                Contact
            </a>
        )
    ];

    const scrollToTop = () => {
        window.scrollTo(0, 0);
        document.location.href = "#";
    };

    return (
        <header>
            <button
                id="site-logo"
                className={!showMobileMenu ? "fancy-font" : "no-show"}
                // href="#home"
                title="Click here to navigate back to the top."
                onClick={scrollToTop}
            >
                <img
                    src="./adnanian-flag.png"
                    alt="The flag of Adnan - Consists of a black square with four rings, each in red, black, white, and green."
                />
                {/* <span>Home Page</span> */}
            </button>
            <span className={!showMobileMenu ? "fancy-font" : "no-show"}>Adnan Wazwaz</span>
            <nav className="inline-menu">
                {navigationalLinks}
            </nav>
            <nav className={`hamburger-menu-${showMobileMenu}`}>
                {navigationalLinks}
            </nav>
            <button className="hamburger-button" onClick={onToggle}>
                &equiv;
            </button>
        </header>
    )
}