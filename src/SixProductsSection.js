import React from "react";
import Product from "./Components/Product";

const SixProductsSection = () => {
  return (
    <>
      <div
        className="container-fluid p-3"
        style={{ backgroundColor: "#F7F7F7" }}
      >
        <div className="container sixPdct">
          <div className="row">
            <div
              className="col-md-8"
              style={{
                padding: "10px",
                backgroundColor: "#fff",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            >
              <div className="row">
                <div className="col-md-2">
                  <Product image={"botttle.png"} />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-2">
                  <Product image={"green-bottlee.png"} />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-2">
                  <Product image={"red-red-bottle.png"} />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-2">
                  <Product image={"green-bottle.png"} />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-8"
              style={{
                padding: "10px",
                backgroundColor: "#fbfcfb",
              }}
            >
              <div className="row">
                <div className="col-md-2">
                  <Product image={"bottle.png"} />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-2">
                  <Product image={"bottle.png"} />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-2">
                  <Product image={"bottle.png"} />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-2">
                  <Product image={"bottle.png"} />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-8"
              style={{
                padding: "10px",
                backgroundColor: "#fbfcfb",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            >
              <div className="row">
                <div
                  className="col-md-12 text-center"
                  style={{ fontSize: "18px" }}
                >
                  Voir toute votre cave
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SixProductsSection;
