import './global.css'
// import Snow from "./components/Snow";

const App = () => {
 return (
  <div className="production-container">
    <div className="construction-icon">🚧</div>
    <h1 className="production-title">Website Under Production</h1>
    <p className="production-subtitle">
      We're working hard to bring you something amazing.<br /> Our website is currently under development and will be live soon!
    </p>

    <div className="contact-section">
      <h2 className="contact-title">For Queries Contact:</h2>
      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-name">Tatwin Shelian</div>
          <div className="contact-phone">
            📞 <a href="tel:+918637458726" aria-label="Call Tatwin Shelian">+91 86374 58726</a>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-name">Nithesh</div>
          <div className="contact-phone">
            📞 <a href="tel:+918248991003" aria-label="Call Nithesh">+91 82489 91003</a>
          </div>
        </div>

      </div>
    </div>
  </div>
 );
};

export default App;