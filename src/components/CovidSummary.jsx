import React from "react";
import Card from "./Card";

const CovidSummary = (props) => {
  const { totalConfirmed, totalRecoverd, totalDeaths, country } = props;
  return (
    <div>
      <div>
        <div
          style={{
            backgroundColor: "#f53b57",
            padding: "1px",
            marginBottom: "12px",
            color: "#fff",
            borderBottom: "5px solid #485460",
          }}
        >
          <h1 style={{ textTransform: "capitalize" }}>
            {country === "" ? "COVID-19 TRACKER" : country}
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Card>
            <span style={{ fontSize: "20px" }}>
              <b>Total Confirmed</b>
            </span>
            <br />
            <span>{totalConfirmed}</span>
          </Card>

          <Card>
            <span style={{ fontSize: "20px" }}>
              <b>Total Recovered</b>
            </span>
            <br />
            <span>{totalRecoverd}</span>
          </Card>
          <Card>
            <span style={{ fontSize: "20px" }}>
              <b>Total Deaths</b>
            </span>
            <br />
            <span>{totalDeaths}</span>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CovidSummary;
