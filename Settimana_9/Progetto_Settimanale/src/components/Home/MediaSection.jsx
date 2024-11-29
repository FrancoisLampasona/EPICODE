import React, { Component } from "react";
import { Alert, Spinner } from "react-bootstrap";
import FilmCarousel from "./Carosello";

class MediaSection extends Component {
  state = {
    arrayFilms: [],
    error: false,
    loading: true,
  };

  getFilms = (query) => {
    this.setState({ loading: true, error: false });

    fetch(`http://www.omdbapi.com/?apikey=bfb62e62&s=${query}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella chiamata API");
        }
      })
      .then((data) => {
        if (data.Response === "False") {
          throw new Error("Errore nella risposta API");
        } else {
          this.setState({ arrayFilms: data.Search || [], loading: false });
        }
      })
      .catch((error) => {
        console.error("Errore:", error);
        this.setState({ error: true, loading: false });
      });
  };

  componentDidMount() {
    const { title } = this.props;
    this.getFilms(title);
  }

  render() {
    const { arrayFilms, error, loading } = this.state;
    const { title } = this.props;

    return (
      <>
        {error && (
          <Alert variant="danger" className="text-center">
            Qualcosa è andato storto durante il caricamento dei dati.
          </Alert>
        )}
        {loading && (
          <div className="d-flex justify-content-center my-5">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        {!loading && !error && <FilmCarousel title={title} films={arrayFilms} />}
      </>
    );
  }
}

export default MediaSection;
