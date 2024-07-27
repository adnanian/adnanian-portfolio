import { useState } from "react";
import "../styles/Header.css";

/**
 * https://www.youtube.com/watch?v=aNDqzlAKmZc
 * 
 * @returns 
 */
export default function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggle = () => {
        setShowMobileMenu((isOpen) => !isOpen);
    }

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
                key="skills"
                className="nav-link"
                href="#skills"
                title="Click here to learn more about Adnan's skills."
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
            >
                <span>Technical</span> 
                <span>Projects</span>
            </a>
        ),
        (
            <a
                key="side-projects"
                className="nav-link"
                href="#side-projects"
                title="Click here to view Adnan's projects that don't involve software engineering."
                style={{display: 'flex', flexDirection: 'column'}}
            >
                <span>Side</span> 
                <span>Projects</span>
            </a>
        ),
        (
            <a
                key="contact"
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
                id="site-logo"
                className="fancy-font"
                href="#home"
                title="Click here to navigate back to the home page."
            >
                {/* <figure>
                    <img
                        src="./adnanian-flag.png"
                        alt="The flag of Adnan - Consists of a black square with four rings, each in red, black, white, and green."
                    />
                    <figcaption>Home Page</figcaption>
                </figure> */}
                <img
                    src="./adnanian-flag.png"
                    alt="The flag of Adnan - Consists of a black square with four rings, each in red, black, white, and green."
                />
                <span>Home Page</span>
            </a>
            <span className="fancy-font">Adnan Wazwaz</span>
            <nav className="inline-menu">
                {navigationalLinks}
            </nav>
            <nav className={`hamburger-menu-${showMobileMenu}`}>
                {navigationalLinks}
            </nav>
            <button className="hamburger-button" onClick={toggle}>
                &equiv;
            </button>
        </header>
    )
}