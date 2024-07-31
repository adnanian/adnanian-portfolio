import "../styles/Footer.css";

/**
 * Creates a footer. This footer consists of the copyright jargon and a set
 * of navigational links to Adnan's social media profiles.
 * 
 * @returns a footer of external links and copyright.
 */
export default function Footer() {
    const profilesDirectory = "./assets/profiles/";

    return (
        <footer>
            <span className="brown-frame">
                Icons by <a
                    target="_blank"
                    href="https://icons8.com"
                    rel="noreferrer"
                    className="nav-link .external"
                >
                    Icons8
                </a>
            </span>
            <nav>
                <a
                    href="https://www.linkedin.com/in/adnan-wazwaz-09aa1b2b7"
                    target="_blank"
                    rel="noreferrer"
                    title="Click here to open my LinkedIn profile on a new tab."
                    className="media-link"
                >
                    <img
                        src={`${profilesDirectory}icons8-linkedin.svg`}
                        alt="Link to Adnan Wazwaz's LinkedIn profile."
                    />
                </a>
                <a
                    href="https://github.com/adnanian"
                    target="_blank"
                    rel="noreferrer"
                    title="Click here to open my GitHub profile on a new tab."
                    className="media-link"
                >
                    <img
                        src={`${profilesDirectory}icons8-github.svg`}
                        alt="Link to Adnan Wazwaz's GitHub profile."
                    />
                </a>
                <a
                    href="https://www.youtube.com/@adnanian-order"
                    target="_blank"
                    rel="noreferrer"
                    title="Click here to open my YouTube channel on a new tab."
                    className="media-link"
                >
                    <img
                        src={`${profilesDirectory}icons8-youtube.svg`}
                        alt="Link to Adnan Wazwaz's YouTube channel."
                    />
                </a>
                <a
                    href="https://adnanian-programming.hashnode.dev"
                    target="_blank"
                    rel="noreferrer"
                    title="Click here to open my blog page on Hashnode on a new tab."
                    className="media-link"
                >
                    <img
                        src={`${profilesDirectory}icons8-hashnode.svg`}
                        alt="Link to Adnan Wazwaz's blog on Hashnode."
                    />
                </a>
            </nav>
            <span className="fancy-font">©2024 Adnan Wazwaz</span>
        </footer>
    );
}