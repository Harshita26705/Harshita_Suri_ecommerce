import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h1>Let’s Connect</h1>
        <p className="contact-intro">
          Whether you’re ready to start a project or just exploring ideas, we’d love to hear from you.
        </p>

        <div className="contact-details">
          <div className="contact-item">
            <span className="contact-label">Email : </span>
            <a href="mailto:hello@cginfinity.com"> hello@cginfinity.com</a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Phone : </span>
            <a href="tel:+919876543210"> +91-9876543210</a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Official Website : </span>
            <a href="https://cginfinity.com/" target="_blank" rel="noopener noreferrer">www.cginfinity.com</a>
          </div>
        </div>
        <br />
        <div className="contact-cta">
          <a href="#quotation" className="cta-button">Request a Quote</a>
        </div>
        
        

        <div className="contact-socials">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/cginfinity" target="_blank" rel="noopener noreferrer">
              <img src="https://cgone.cginfinity.com/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="https://www.youtube.com/CGInfinityInc" target="_blank" rel="noopener noreferrer">
              <img src="https://cgone.cginfinity.com/youtube.svg" alt="YouTube" />
            </a>
            <a href="https://www.facebook.com/cginfinityinc/" target="_blank" rel="noopener noreferrer">
              <img src="https://cgone.cginfinity.com/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/cginfinityinc/" target="_blank" rel="noopener noreferrer">
              <img src="https://cgone.cginfinity.com/instagram.svg" alt="Instagram" />
            </a>
            <a href="https://twitter.com/cginfinityinc" target="_blank" rel="noopener noreferrer">
              <img src="https://cgone.cginfinity.com/twitter.svg" alt="Twitter" />
            </a>
          </div>
        </div>

      

        </div>
    
    </section>
  );
}

export default Contact;
