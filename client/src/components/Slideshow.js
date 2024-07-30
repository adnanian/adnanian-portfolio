import { useState } from "react"
import "../styles/Slideshow.css"

export default function Slideshow({id, title, children}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const childComponents = [...children];

    /**
     * 
     * Article of Reference: https://stackoverflow.com/questions/15462750/scroll-backward-circular-array
     */
    function previous() {
        setCurrentIndex((index) => (index - 1 + childComponents.length) % childComponents.length);
    }

    function next() {
        setCurrentIndex((index) => (index + 1) % childComponents.length);
    }

    return (
        <div id={id} className="slideshow">
            <div className="slide-heading">
                <h3>{title}</h3>
                <h4>{`Slide ${currentIndex + 1} of ${childComponents.length}`}</h4>
            </div>
            <div className="slide-navigation">
                <button className="slide-button" onClick={previous}>&lt;</button>
                {childComponents[currentIndex]}
                <button className="slide-button" onClick={next}>&gt;</button>
            </div>
        </div>
    )
}