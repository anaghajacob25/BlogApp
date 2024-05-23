import React from "react";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";

function Footer() {
  return (
    <div
      id="footer"
      style={{ width: "100%", height: "450px", backgroundColor: "#e7f1da" }}
      className="d-flex justify-content-evenly align-items-center flex-column  text-dark z-1 "
    >
      <div className="d-flex justify-content-evenly w-100 flex-wrap">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h4>
            <Link
              to={"/"}
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
              }}
            >
              <MDBIcon className="me-2" fas icon="blog" />
              Blogit
            </Link>
          </h4>
          <p>My mindfulness blog</p>
        </div>
        <div
          style={{ width: "500px", height: "150px" }}
          className="element d-flex flex-column justify-content-center align-items-center"
        >
          <p>Get my daily tips on mindful living</p>

          <div className="d-flex flex-column">
            <label htmlFor="subscribe">Email*</label>
            <div className="d-flex justify-content-center align-items-center">
              <input
                type="text"
                id="subscribe"
                className="form-control rounded"
              />
              <button
                className="bg-dark btn ms-2 d-flex justify-content-center  align-items-center "
                style={{ color: "white" }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center text-center">
          Breathe by Tammy Gallaway
          <br />
          Mail: blogit@gmail.com
          <br />
          Phone number: 123-456-7890
          <div className="icons mt-3 d-flex justify-content-between fs-5">
            <Link
              className="text-dark"
              to={"https://react-bootstrap.netlify.app/"}
              style={{ textDecoration: "none" }}
            >
              <i class="fa-brands fa-linkedin"></i>
            </Link>
            <Link
              className="text-dark"
              to={"https://getbootstrap.com/"}
              style={{ textDecoration: "none" }}
            >
              <i class="fa-brands fa-facebook"></i>
            </Link>
            <Link
              className="text-dark"
              to={"https://fontawesome.com/"}
              style={{ textDecoration: "none" }}
            >
              <i class="fa-solid fa-envelope"></i>
            </Link>
            <Link
              className="text-dark"
              to={"https://fontawesome.com/"}
              style={{ textDecoration: "none" }}
            >
              <i class="fa-brands fa-whatsapp"></i>
            </Link>
            <Link
              className="text-dark"
              to={"https://fontawesome.com/"}
              style={{ textDecoration: "none" }}
            >
              <i class="fa-brands fa-github"></i>
            </Link>
            <Link
              className="text-dark"
              to={"https://fontawesome.com/"}
              style={{ textDecoration: "none" }}
            >
              <i class="fa-brands fa-instagram"></i>
            </Link>
          </div>
        </div>
      </div>
      <div
        style={{ width: "400px", height: "50px" }}
        className="w-100 d-flex justify-content-center align-items-end text-center "
      >
        <p>© 2023 by Blogit. Powered Blog App</p>
      </div>
    </div>
  );
}

export default Footer;
