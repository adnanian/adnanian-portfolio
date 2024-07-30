import {useState} from "react";
import "../styles/ContactForm.css";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        'name': "",
        'email': "",
        'message': ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact">
            <h1 className="fancy-font">Get in Touch with Me</h1>
            <form name="contact" netlify>
                <label htmlFor="name">Name</label>
                <input 
                    name="name" 
                    type="text" 
                    value={formData.name} 
                    onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                <input 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange}
                />
                <label htmlFor="message">Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="10"
                ></textarea>
                <input type="submit"/>
            </form>
        </section>
    );
}