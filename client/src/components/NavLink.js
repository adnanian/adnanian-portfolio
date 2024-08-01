export default function NavLink( {url, displayText, onSmartToggle}) {
    return (
        <a
            className="nav-link"
            href={url}
            onClick={onSmartToggle}
        >
            {displayText}
        </a>
    );
}