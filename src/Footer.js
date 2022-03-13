import React from "react";

const Footer = () => {
  const astyle = {
    textDecoration: "none",
    color: "#7B7B7B",
    fontSize: "15px",
    fontWeight: "300",
  };

  return (
    <>
      <div
        className="container-fluid p-3"
        style={{ backgroundColor: "#F7F7F7" }}
      >
        <div className="container">
          <div
            className="row d-flex justify-content-between align-items-center"
            style={{ margin: "20px 0" }}
          >
            <div className="col-md-3 foot" style={astyle}>
              Vignitus copyright 2021
            </div>
            <div className="col-md-3 foot" style={astyle}>
              <a href="#" style={astyle}>
                Mentions légales
              </a>
              &nbsp;&nbsp; | &nbsp;&nbsp;
              <a href="#" style={astyle}>
                CGV
              </a>
              &nbsp; &nbsp; | &nbsp; &nbsp;
              <a href="#" style={astyle}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
