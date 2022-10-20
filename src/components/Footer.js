import logo from "./assets/img/logo.png";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-3 pt-5">
          <div className="col">
            <img src={logo} alt="Cine Logo" className="mr-auto" />
            <p className="text-white text-left">
              This is a webapp used to search for Movies details and year of
              release using OMDB API.
            </p>
            <div className="d-flex w-100">
              <div className="social-icon">
                <a href="#">
                  <i className="bx bxl-facebook"></i>
                </a>
              </div>
              <div className="social-icon">
                <a href="#">
                  <i className="bx bxl-twitter"></i>
                </a>
              </div>
              <div className="social-icon">
                <a href="#">
                  <i className="bx bxl-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <h4 className="text-white text-left">Quick Link</h4>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-left">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="bx bx-chevron-right"></i> Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="bx bx-chevron-right"></i> About
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="bx bx-chevron-right"></i> Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4 className="text-white text-left">
              Subscribe to our Newsletter
            </h4>
            <form class="row g-3 mt-5">
              <div class="col-auto">
                <input
                  type="email"
                  class="form-control subscribe-form"
                  id="Email"
                  placeholder="Enter your Email"
                />
              </div>
              <div class="col-auto">
                <button
                  type="submit"
                  class="btn btn-primary mb-3 subscribe-btn"
                >
                  <i className="bx bx-rocket"></i> Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <p className="text-white">
          <i className="bx bx-copyright"></i> 2022-2022 This app is created with{" "}
          <i className="bx bx-heart"></i> from <a href="#">Ibidapo Ayomide</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
