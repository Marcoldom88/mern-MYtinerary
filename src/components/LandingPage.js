import "../stylesheets/LandingPage.css"
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <section>
      <main className="page-container">
        <section className="header">
          <img className="logo" src="assets/MYtineraryLogo.png" alt="Mytinerary Logo"></img>
          <br /><p>Find your perfect trip, designed by insiders who know and love their cities</p>
        </section>
        <section>
          <div className="arrow-container">
            <h2>Start browsing</h2>
            <Link to="">
              <img className="arrow" src="assets/circled-right-2.png" alt="circle with arrow pointing right"></img>
            </Link>
          </div>
          <div>
            <p>Want to build your own MYtinerary?</p>
            <div className="links-container">
              <Link to="">Log in</Link>
              <Link to="">Create Account</Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="fixed-bottom">
        <img className="home" src="assets/homeIcon.png" alt="House icon"></img>
      </footer>
    </section>
  )

}

export default LandingPage;