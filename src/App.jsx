import './global.css'
// import Snow from "./components/Snow";

const App = () => {
 return (
  <div className="production-container">
    <div className="construction-icon">🚧</div>
    <h1 className="production-title">Website Under Production</h1>
    <p className="production-subtitle">
      We're working hard to bring you something amazing.<br></br> Our website is currently under development and will be live soon!
    </p>

    <div className="contact-section">
      <h2 className="contact-title">For Queries Contact:</h2>
      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-name">Faiza Fathima</div>
          <div className="contact-phone">
            📞 <a href="tel:+1-555-0123">+91 99431 36777</a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-name">Miraclin Jovitta</div>
          <div className="contact-phone">
            📞 <a href="tel:+1-555-0456">+91 77088 04814</a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-name">Jouvita Kenned</div>
          <div className="contact-phone">
            📞 <a href="tel:+1-555-0789">+91 63691 94579</a>
          </div>
        </div>
      </div>
    </div>
  </div>
 );
};

export default App;