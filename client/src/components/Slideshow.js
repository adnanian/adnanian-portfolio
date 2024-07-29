import { useState } from "react"
import "../styles/Slideshow.css"

export default function Slideshow({id, children}) {
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
            <button className="slide-button col-1" onClick={previous}>&lt;</button>
            {childComponents[currentIndex]}
            <button className="slide-button col-1" onClick={next}>&gt;</button>
        </div>
    )
}