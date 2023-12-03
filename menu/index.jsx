import React from 'react';
import './menu'; 

const App = () => {
  return (
    <div>
      {/* Preloader */}
      <div id="loader-wrapper">
        <div id="loader"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
      {/* End Preloader */}
      <div className="tm-top-header">
        <div className="container">
          <div className="row">
            <div className="tm-top-header-inner">
              <div className="tm-logo-container">
                <img src="img/logo.png" alt="Logo" className="tm-site-logo" />
                <h1 className="tm-site-name tm-handwriting-font">MaN'tap House</h1>
              </div>
              <div className="mobile-menu-icon">
                <i className="fa fa-bars"></i>
              </div>
              <nav className="tm-nav">
                <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="today-special.html">Today Special</a></li>
                  <li><a href="menu.html" className="active">Menu</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <section className="tm-welcome-section">
        {/* Rest of your code */}
      </section>
      {/* ... */}
      <footer>
        {/* Footer content */}
      </footer>
      {/* JS */}
      <script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>
      {/* jQuery */}
      <script type="text/javascript" src="js/templatemo-script.js"></script>
      {/* Templatemo Script */}
    </div>
  );
}

export default App;
