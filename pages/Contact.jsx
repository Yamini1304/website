import React, { useState } from 'react';
import './Contact.css';  // Importing the CSS for styling

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',  // Adding the phone field
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send to an API)
        alert('Message sent!');
        setFormData({ name: '', email: '', phone: '', message: '' });  // Reset form
    };

    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Your Email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Your Phone Number"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Your Message"
                    ></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
