import React, { useState, useEffect } from "react";
import { Form, Button, Dropdown, Container } from "react-bootstrap";

const SearchBar = ({ onWeatherDataReceived }) => {
  const [selectedState, setSelectedState] = useState("");
  const [states, setStates] = useState([]);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [noCitiesFound, setNoCitiesFound] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel recupero dei dati.");
        }
        return response.json();
      })
      .then((data) => {
        const statesList = data
          .map((state) => ({
            name: state.name.common,
            code: state.cca2,
            flag: state.flags.png,
          }))
          .sort((a, b) => a.name.localeCompare(b.name));

        setStates(statesList);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setCitySuggestions([]);
    setShowDropdown(false);
    setNoCitiesFound(false);
  };

  const handleCityChange = (event) => {
    const inputCity = event.target.value;
    setCity(inputCity);

    if (inputCity.length > 2 && selectedState) {
      fetchCities(inputCity);
      setShowDropdown(true);
    } else {
      setCitySuggestions([]);
      setShowDropdown(false);
      setNoCitiesFound(false);
    }
  };

  const fetchCities = (inputCity) => {
    const url = `https://api.openweathermap.org/data/2.5/find?q=${inputCity}&type=like&sort=population&appid=d505b62b7d561fd19e26ea4fca0629a7`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.list) {
          const filteredCities = data.list.filter(
            (city) => city.sys.country === selectedState
          );

          if (filteredCities.length === 0) {
            setNoCitiesFound(true);
          } else {
            setNoCitiesFound(false);
            setCitySuggestions(filteredCities.map((city) => city.name));
          }
        } else {
          setCitySuggestions([]);
          setNoCitiesFound(true);
        }
      })
      .catch((error) => {
        console.error("Errore nella ricerca delle città:", error);
      });
  };

  const handleCitySelect = (selectedCity) => {
    setCity(selectedCity);
    setShowDropdown(false);
  };

  const fetchWeatherData = (cityName) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d505b62b7d561fd19e26ea4fca0629a7`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          const weatherData = {
            cityName: cityName,
            stateName: selectedState,
            flag: states.find((state) => state.code === selectedState)?.flag,
            temperature: data.main.temp,
            temperature_percipita: data.main.feels_like,
            temperature_max: data.main.temp_max,
            temperature_min: data.main.temp_min,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
          };
          onWeatherDataReceived(weatherData);
        }
      })
      .catch((error) => {
        console.error("Errore nella richiesta dei dati meteo:", error);
      });
  };

  const handleCitySearch = () => {
    if (!city || !selectedState) {
      return;
    }
    fetchWeatherData(city);
  };

  if (loading) {
    return <div>Caricamento in corso...</div>;
  }

  if (error) {
    return <div>Errore nel recupero degli stati: {error}</div>;
  }

  return (
    <>
      <div className="search-bar container-fluid d-flex mt-3">
        <Form.Select
          id="state-select"
          value={selectedState}
          onChange={handleStateChange}
          style={{ backgroundColor: "#ffffebb5" }}
          className="me-2 fst-italic "
        >
          <option value="">Seleziona uno stato</option>
          {states.map((state) => (
            <option key={state.code} value={state.code}>
              <img
                src={state.flag}
                alt={state.name}
                style={{ width: "20px", height: "15px", marginRight: "10px" }}
              />
              {state.name}
            </option>
          ))}
        </Form.Select>

        <Form.Control
          id="nome-city"
          type="text"
          style={{
            color: "rgba(63, 60, 60, 0.648)",
            backgroundColor: "#ffffebb5",
            boxShadow: "0 4px 8px rgba(175, 16, 16, 0.2)",
          }}
          placeholder="Inserisci la città"
          className="me-2"
          value={city}
          onChange={handleCityChange}
        />

        {showDropdown && citySuggestions.length > 0 && (
          <Container fluid className="me-3">
            <Dropdown.Menu className="d-flex flex-column" show>
              {citySuggestions.map((suggestion, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() => handleCitySelect(suggestion)}
                >
                  {suggestion}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Container>
        )}

        <Button onClick={handleCitySearch} variant="outline-secondary">
          <span className="material-symbols-outlined">Cerca</span>
        </Button>
      </div>

      {noCitiesFound && city.length > 2 && selectedState && (
        <div className="mt-4">
          <p className="fs-5" style={{ color: "red" }}>
            Nessuna città con questo nome è presente in questo stato.
          </p>
        </div>
      )}
    </>
  );
};

export default SearchBar;
