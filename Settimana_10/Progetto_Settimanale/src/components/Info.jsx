import React from "react";

const Info = ({ datiTempo }) => {
  if (!datiTempo) {
    return null;
  }

  const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(1);

  return (
    <div className="info">
      <div className="description mb-4">
        <h3>{datiTempo.description.toUpperCase()}</h3>
      </div>
      <h2 className="d-flex align-items-center">
        {datiTempo.cityName}, {datiTempo.stateName}
        <img
          src={datiTempo.flag}
          alt={`Bandiera di ${datiTempo.stateName}`}
          width="30"
          height="20"
          className="mx-2"
        />
      </h2>
      <h1>{kelvinToCelsius(datiTempo.temperature)} °C</h1>
      <div className="row-weather-info d-flex flex-column pb-3">
        <div id="info" className="d-flex justify-content-center">
          <div id="Humidity" className="d-flex align-items-center me-4">
            <i className="bi bi-moisture fs-1"></i>
            <div id="number-humidity" className="ms-2">
              <h3>{datiTempo.humidity}%</h3>
              <h4>Humidity</h4>
            </div>
          </div>
          <div id="Wind-Speed" className="d-flex align-items-center me-4">
            <i className="bi bi-wind fs-1"></i>
            <div id="number-Wind-Speed" className="ms-2">
              <h3>{datiTempo.windSpeed} m/s</h3>
              <h4>Wind Speed</h4>
            </div>
          </div>
        </div>
        <div id="infoTemp" className="d-flex justify-content-center">
          <div id="Feels-Like" className="d-flex align-items-center me-4">
            <i className="bi bi-thermometer-half fs-1"></i>
            <div id="number-feels-like" className="ms-2">
              <h3>{kelvinToCelsius(datiTempo.temperature_percipita)} °C</h3>
              <h4>Feels Like</h4>
            </div>
          </div>
          <div id="Max-Temp" className="d-flex align-items-center me-4">
            <i className="bi bi-arrow-up-circle fs-1"></i>
            <div id="number-max-temp" className="ms-2">
              <h3>{kelvinToCelsius(datiTempo.temperature_max)} °C</h3>
              <h4>Max Temp</h4>
            </div>
          </div>
          <div id="Min-Temp" className="d-flex align-items-center">
            <i className="bi bi-arrow-down-circle fs-1"></i>
            <div id="number-min-temp" className="ms-2">
              <h3>{kelvinToCelsius(datiTempo.temperature_min)} °C</h3>
              <h4>Min Temp</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
