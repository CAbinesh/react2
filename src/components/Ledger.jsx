import React from "react";
import { useNavigate } from "react-router-dom";

function Ledger() {
  const navigate = useNavigate();
  const YearRange = ["2025-26", "2026-27"];

  return (
    <div style={{margin:"10px"}}>
      <button className="sticky" onClick={() => navigate(-1)}>
        ⏪
      </button>
      <h2 style={{ textAlign: "center" }}>Financial Years</h2>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {YearRange.map((year, index) => (
          <div
            className="bunny"
            key={index}
            onClick={() => navigate(`/Ledger/${year}`)}
            style={{
              border: "2px solid black",
              padding: "20px",
              margin: "10px",
              borderRadius: "10px",
              cursor: "pointer",
              width: "50%",
              textAlign: "center",
              fontWeight: "bold",
              backgroundColor: "#f9f9f9",
              boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            {year}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ledger;
