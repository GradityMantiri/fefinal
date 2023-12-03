import React from 'react';

const ContactPage = () => {
  return (
    <>
      {/* Preloader */}
      <div id="loader-wrapper">
        <div id="loader"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
      {/* End Preloader */}
      <div className="tm-top-header">
        {/* ... (omitting content for brevity) */}
      </div>
      <section className="tm-welcome-section">
        {/* ... (omitting content for brevity) */}
      </section>
      <div className="tm-main-section light-gray-bg">
        <div className="container" id="main">
          <section className="tm-section row">
            <h2 className="col-lg-12 margin-bottom-30">Send us a message</h2>
            <form action="#" method="post" className="tm-contact-form">
              <div className="col-lg-6 col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="contact_name"
                    className="form-control"
                    placeholder="NAME"
                  />
                </div>
                {/* ... (omitting other form fields for brevity) */}
                <div className="form-group">
                  <button className="tm-more-button" type="submit" name="submit">
                    Send message
                  </button>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div id="google-map"></div>
              </div>
            </form>
          </section>
        </div>
      </div>
      <footer>
        {/* ... (omitting content for brevity) */}
      </footer>
    </>
  );
};

export default ContactPage;