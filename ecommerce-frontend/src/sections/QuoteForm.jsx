import React, { useState } from 'react';
import './QuoteForm.css'; // Optional: for external styling

function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission (e.g., send to backend or email service)
    console.log('Quote request submitted:', formData);
    alert('Thank you! We’ll get back to you shortly.');
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  return (
    <section id="quotation" className="quote-form-section">
      <div className="quote-form">
        <h2>Request a Quote</h2>
        <form onSubmit={handleSubmit}>
          <label>
            * Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </label>

          <label>
            * Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
            />
          </label>

          <label>
            * Service Interested In
            <input
              type="text"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              placeholder="e.g. Cloud Modernization"
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your needs..."
              rows="4"
            />
          </label>

          <button type="submit">Submit Request</button>
        </form>
      </div>
    </section>
  );
}

export default QuoteForm;
