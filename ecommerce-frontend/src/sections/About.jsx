import './About.css';

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-content">
        <h1>People First. Driven to Transform.</h1>
        <p>
          At CG Infinity, we believe technology should serve people—not the other way around. For over 25 years, we’ve partnered with forward-thinking organizations to deliver transformative solutions in <strong>Salesforce, AI/ML, cloud modernization, and data strategy</strong>.
        </p>
        <p>
          Our blended teams work hand-in-hand with your leadership to ensure measurable success. We bridge communication gaps from day one, reduce risk, and unlock new revenue opportunities. Integrity and accountability aren’t just values—they’re how we operate.
        </p>
        <a href="#services" className="cta-button"></a>
      </div>
      <div className="about-image">
          <img
            src="https://static.wixstatic.com/media/a34477_32375e2b6e7c407db27a833fbc833494~mv2.png/v1/fill/w_344,h_516,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/CG%20Lightbulb.png"
            alt="CG Infinity Lightbulb"
          />
        </div>
    </div>
  );
}



export default About;
