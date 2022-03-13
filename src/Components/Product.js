import React from "react";

const Product = ({ image }) => {
  return (
    <>
      <div
        className="product-details d-flex flex-column justify-content-between align-items-start"
        style={{
          padding: "10px",
          backgroundColor: "#ffffff",
          boxShadow: "0 0 4px #eee",
        }}
      >
        <div className="product-image" style={{ position: "relative" }}>
          <img src={image} alt="bottle" className="p-img" />
          <div
            className="icon"
            style={{ position: "absolute", right: "10px", top: "7px" }}
          >
            <i
              class="bi bi-heart-fill"
              style={{
                color: "#D7D7D7",
              }}
            ></i>
          </div>
        </div>

        <div
          className="product-name"
          style={{ fontSize: "10px", fontWeight: "600" }}
        >
          Charles Joguet - Chinon Cuvée Terroir
        </div>
        <div className="product-date" style={{ fontSize: "10px" }}>
          <em>2016 - Val de Loire - Chinon AOP</em>
        </div>
        <div
          className="product-price"
          style={{
            fontWeight: "bold",
            fontSize: "14px",
            fontStyle: "italic",
            marginTop: "5px",
          }}
        >
          10,30 €
        </div>
      </div>
    </>
  );
};

export default Product;
