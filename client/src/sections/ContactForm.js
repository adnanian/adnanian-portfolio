import { useState } from "react";
import "../styles/ContactForm.css";

/**
 * Creates a Netlify compatible form to contact Adnan for any inquires.
 * All submissions will be sent to Adnan's email.
 * 
 * @returns a contact form.
 */
export default function ContactForm() {
    const [formData, setFormData] = useState({
        'name': "",
        'email': "",
        'message': ""
    });

    /**
     * Updates the formData state value based
     * on the change of input.
     * 
     * @param {Event} e the event. 
     */
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact">
            <h1 className="fancy-font">Get in Touch with Me</h1>
            <form name="contact" method="post">
                <input type="hidden" name="form-name" value="contact" />
                <label htmlFor="name">Name</label>
                <input
                    name="name"
                    type="text"
                    value={formData.name}
                    placeholder="Enter your name..."
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    type="email"
                    value={formData.email}
                    placeholder="Enter your email..."
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="message">Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    placeholder="Enter your message..."
                    onChange={handleChange}
                    rows="10"
                ></textarea>
                <input type="submit" />
            </form>
        </section>
    );
}