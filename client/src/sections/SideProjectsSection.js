import Slideshow from "../components/Slideshow";
import "../styles/SideProjectsSection.css";

export default function SideProjectsSection() {

    const images = [
        'draft-2-card-list.png',
        'draft-2-layout.jpg',
        'draft-3-card-backs.png',
        'draft-3-layout.jpg',
        'draft-3-number-cards.jpg',
        'draft-3-operand-cards.jpg'
    ];

    const imageSlides = images.map((image) => {
        return (
            <img
                src={`./images/mada/${image}`}
                alt="Mada card design."
            />
        );
    });

    return (
        <section id="side-projects">
            <h1>My Side Projects</h1>
            <article>
                <p>At this time, the only public active side-project is Mada, so for
                    now, I will dedicate this entire section to Mada.</p>
                <p>Mada is a Halal, math-based strategy card game for 2-8 players.
                    The premise of the game is that each player has a personal
                    number, called a position, which must stay within a universal
                    range. You win by eliminating other players' positions from the
                    range, until you're the last active player. If you would like to
                    learn how to play, you can contact me using the form in the next
                    section for an inquiry.
                </p>
            </article>
            <Slideshow id="mada-slides" title="Mada Gallery">
                {imageSlides}
            </Slideshow>
        </section>
    );
}