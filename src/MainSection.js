import React from "react";

const MainSection = () => {
  const btnStyle = {
    padding: "10px 35px",
    borderRadius: "10px",
    cursor: "pointer",
  };

  const imageStyle = {
    objectFit: "cover",
    borderRadius: "10px",
  };

  return (
    <>
      <div
        className="container-fluid p-3 mt-3"
        style={{ backgroundColor: "#F7F7F7" }}
      >
        <div className="container thisContainer">
          <div className="row d-flex justify-content-between">
            <div className="col-md-8">
              <div className="row">
                <div
                  className="col-lg-9 col-8"
                  style={{
                    overflow: "hidden",
                    padding: "0 2px 0 0",
                  }}
                >
                  <img
                    src="red-bottle.png"
                    alt="red bottle"
                    className="bottle-img"
                    style={{
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="col-lg-3 col-4">
                  <img
                    src="bottle-cover.png"
                    alt="bottle"
                    style={imageStyle}
                    className="immg"
                  />
                  <img
                    src="bottle-cover-2.png"
                    alt="bottle"
                    className="immg"
                    style={{ ...imageStyle, margin: "13px 0" }}
                  />
                  <img
                    src="bottle-cap.png"
                    alt="bottle"
                    style={imageStyle}
                    className="immg"
                  />
                </div>
              </div>
              <div
                className="row  d-flex justify-content-between"
                style={{ marginTop: "20px", width: "102%", padding: "0" }}
              >
                <div
                  className="col-12"
                  style={{
                    padding: "15px",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    margin: "0",
                    fontSize: "18px",
                    fontWeight: "350",
                  }}
                >
                  Promu premier cru classé « A » de Saint-Emilion en 2012, le
                  légendaire Angélus se déploie en bouche, charnu et gourmand,
                  avec une trame admirable d'élégance et une belle concentration{" "}
                  <br /> Promu premier cru classé « A » de Saint-Emilion en
                  2012, le légendaire Angélus se déploie en bouche, charnu et
                  gourmand, avec une trame admirable d'élégance et une belle
                  concentration <br /> Promu premier cru classé « A » de
                  Saint-Emilion en 2012, le légendaire Angélus se déploie en
                  bouche, charnu et gourmand, avec une trame admirable
                  d'élégance et une belle concentration
                </div>
              </div>
            </div>
            <div
              className="col-md-3 thisCol"
              style={{
                padding: "20px",
                backgroundColor: "#fff",
                borderRadius: "10px",
              }}
            >
              <div
                className="rightSide"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <em
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    letterSpacing: "-0.10px",
                  }}
                >
                  Chateau Joguet - Chinon cuvée Terroir
                </em>
                <br />
                <br />
                <div style={{ fontSize: "17.5px" }}>
                  <span style={{ fontWeight: "600" }}>Millesime:</span> 1995
                </div>
                <div style={{ fontSize: "17.5px" }}>
                  <span style={{ fontWeight: "600" }}>Couleur:</span> rough
                </div>
                <div style={{ fontSize: "17.5px" }}>
                  <span style={{ fontWeight: "600" }}>Quantité:</span> 3
                  bouteilles
                </div>
                <div style={{ fontSize: "17.5px" }}>
                  <span style={{ fontWeight: "600" }}>Viticulture: </span>
                  biologique
                </div>
                <div style={{ fontSize: "17.5px" }}>
                  <span style={{ fontWeight: "600" }}>Type de cave: </span>
                  cave naturelle enterrée
                </div>
                <div style={{ fontSize: "17.5px" }}>
                  <span style={{ fontWeight: "600" }}>
                    Caisse bois / Coffret d'origine:&nbsp;
                  </span>
                  non
                </div>
                <div style={{ fontSize: "17.5px" }}>
                  <span style={{ fontWeight: "600" }}>
                    Capsule Représentative de Droit (CRD):&nbsp;
                  </span>
                  non
                </div>
                <div style={{ fontSize: "17.5px" }}>
                  <span style={{ fontWeight: "600" }}>
                    Pourcentage alcool: &nbsp;
                  </span>
                  13.50 %
                </div>
                <div style={{ fontSize: "17.5px" }}>
                  <span style={{ fontWeight: "600" }}>Région: </span>
                  Bordeaux
                </div>
                <div style={{ fontSize: "17.5px" }}>
                  <span style={{ fontWeight: "600" }}>Appellation / Vin: </span>
                  Saint-Émilion Grand Cru
                </div>
                <div style={{ fontSize: "17.5px" }}>
                  <span style={{ fontWeight: "600" }}>Classement: </span>
                  1er grand cru classé a
                </div>
                <br />
                <br />
                <div style={{ fontSize: "17.5px" }}>
                  Ajouté le: &nbsp;
                  <span style={{ fontWeight: "600", fontSize: "20px" }}>
                    12/10/2021
                  </span>
                </div>
                <div style={{ fontSize: "17.5px" }}>
                  par&nbsp;
                  <span
                    style={{
                      fontWeight: "600",
                      fontSize: "20px",
                      color: "#6A0012",
                    }}
                  >
                    Vous
                  </span>
                </div>
                <br />
                <br />
                <div style={{ fontSize: "17.5px" }}>
                  Envoie à la charge de I’acheteur :
                </div>
                <div style={{ fontSize: "17.5px" }}>Option 1 : 12.90 €</div>
                <div style={{ fontSize: "17.5px" }}>Option 2 : 14.90 €</div>
                <div style={{ fontSize: "17.5px" }}>Option 3 : 17.90 €</div>
                <br />
                <div
                  className="price"
                  style={{ fontSize: "35px", fontWeight: "500" }}
                >
                  29.90 €
                </div>
                <br />
                <br />
                <div className="buttons d-flex justify-content-between">
                  <div
                    className="modifier-btn"
                    style={{ ...btnStyle, backgroundColor: "#DFDFDF" }}
                  >
                    Modifier
                  </div>
                  <div
                    className="booster-btn"
                    style={{
                      ...btnStyle,
                      backgroundColor: "#6A0012",
                      color: "#fff",
                    }}
                  >
                    Booster
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
