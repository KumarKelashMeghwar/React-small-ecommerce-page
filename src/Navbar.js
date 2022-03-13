import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container pt-3">
        <div className="row">
          <div className="col-md-4 head1 d-flex justify-content-around justify-content-lg-between align-items-center">
            <div className="name">Acheter du vin</div>
            <div className="nther-title">Vendre du vin</div>
            <div className="faq">FAQ</div>
          </div>
          <div className="col-md-3 space my-2 my-lg-0"></div>
          <div className="col-md-5 head2 d-flex justify-content-between align-items-center">
            <div className="user-name">
              <span className="user-icon" style={{ marginRight: "8px" }}>
                <i class="bi bi-person-circle"></i>
              </span>
              Mon compte
            </div>
            <div className="message">
              <span className="message-icon" style={{ marginRight: "8px" }}>
                <i class="bi bi-envelope-fill"></i>
              </span>
              Mes messages
            </div>
            <div className="heart">
              <span className="heart-icon" style={{ marginRight: "8px" }}>
                <i class="bi bi-heart-fill"></i>
              </span>
              Wishlist
            </div>
            <div className="FR">
              FR
              <span className="fr" style={{ marginLeft: "8px" }}>
                <i class="bi bi-caret-down-fill"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ backgroundColor: "gray" }} />
      <div className="container">
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-md-3 logo d-flex justify-content-start align-items-center">
            <img
              src="logo.png"
              alt="logo"
              style={{ width: "130px", height: "100%" }}
            />
          </div>

          <div class="col-md-8 d-flex justify-content-start align-items-center">
            <input
              type="text"
              placeholder="Rechercher parmi 120 320 bouteilles"
              style={{
                border: "2px solid #E4E4E4",
                paddingLeft: "10px ",
                borderRadius: "6px",
                outline: "none",
                caretColor: "gray",
              }}
            />
            <div
              style={{
                color: "#fff",
                borderTopRightRadius: "6px",
                borderBottomRightRadius: "6px",
                backgroundColor: "#6A0012",
                marginLeft: "-5px",
              }}
              className="d-flex search_btn justify-content-around align-items-center"
            >
              <i class="bi bi-search"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
