import React from "react";

const MainProduct = ({ image, heartColor }) => {
  let color = "";
  heartColor ? (color = heartColor) : (color = "#D7D7D7");

  return (
    <>
      <div
        className="product-details d-flex flex-column justify-content-between align-items-start"
        style={{
          width: "260px",
          padding: "10px",
          height: "395px",
          backgroundColor: "#ffffff",
          boxShadow: "0 0 4px #eee",
        }}
      >
        <div
          className="product-image"
          style={{ position: "relative", margin: "0 auto" }}
        >
          <img
            src={image}
            alt="bottle"
            style={{ width: "196.45px", height: "202px", objectFit: "cover" }}
          />
          <div
            className="icon"
            style={{
              position: "absolute",
              right: "0px",
              top: "7px",
            }}
          >
            <i
              class="bi bi-heart-fill"
              style={{
                color: color,
                fontSize: "24px",
              }}
            ></i>
          </div>
        </div>

        <div className="product-more-details">
          <div
            className="product-name"
            style={{
              fontSize: "16px",
              fontWeight: "400",
              letterSpacing: "-0.08",
            }}
          >
            Charles Joguet - Chinon Cuvée Terroir
          </div>
          <div
            className="product-date"
            style={{ fontSize: "14px", fontWeight: "350" }}
          >
            <em>2016 - Val de Loire - Chinon AOP</em>
          </div>
          <div
            className="product-price"
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              fontStyle: "italic",
              margin: "9px 0",
            }}
          >
            10,30 €
          </div>
          <div className="name" style={{ fontSize: "14px", fontWeight: "350" }}>
            Vendu par John Doe
          </div>
          <div
            className="rating"
            style={{ fontSize: "14px", fontWeight: "350" }}
          >
            ⭐ <em style={{ letterSpacing: ".8px" }}>4.84(85)</em>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainProduct;
