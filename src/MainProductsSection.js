import React from "react";
import MainProduct from "./Components/MainProduct";

const MainProductsSection = () => {
  return (
    <>
      <div
        className="container-fluid p-3"
        style={{ backgroundColor: "#F7F7F7" }}
      >
        <div className="container">
          <div className="row" style={{ marginBottom: "20px" }}>
            <div
              className="col-12 main-heading"
              style={{
                letterSpacing: "-0.25px",
                fontWeight: "300",
              }}
            >
              Vous aimerez également chez nos autres membres :
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 d-flex justify-content-around align-items-center">
              <MainProduct image={"bottle.png"} />
            </div>
            <div className="col-md-3 d-flex justify-content-around align-items-center">
              <MainProduct image={"bottle.png"} heartColor={"#6B0019"} />
            </div>
            <div className="col-md-3 d-flex justify-content-around align-items-center">
              <MainProduct image={"bottle.png"} />
            </div>
            <div className="col-md-3 d-flex justify-content-around align-items-center">
              <MainProduct image={"bottle.png"} />
            </div>
          </div>
          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-md-3 d-flex justify-content-around align-items-center">
              <MainProduct image={"bottle.png"} />
            </div>
            <div className="col-md-3 d-flex justify-content-around align-items-center">
              <MainProduct image={"bottle.png"} heartColor={"#6B0019"} />
            </div>
            <div className="col-md-3 d-flex justify-content-around align-items-center">
              <MainProduct image={"bottle.png"} />
            </div>
            <div className="col-md-3 d-flex justify-content-around align-items-center">
              <MainProduct image={"bottle.png"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainProductsSection;
