import { useState, useEffect } from "react";
import axios from "axios";

export default function AddData() {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/')
        .then((response) => console.log("It worked."));
    }, []);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('http://localhost:5000/get-all-images');
                setImageUrls(response.data.image_urls);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    const images = imageUrls.map((url, index) => {
        return <img key={index} src={url} alt={`${index} - no alt needed.`}/>
    })

    return (
        <div>
            {images}
        </div>
    );
}