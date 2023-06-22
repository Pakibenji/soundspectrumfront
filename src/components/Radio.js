import React, { useEffect, useState } from "react";
import { RadioBrowserApi } from "radio-browser-api";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import allImage from "../assets/img/all.webp";
import classicalImage from "../assets/img/classical.webp";
import countryImage from "../assets/img/country.webp";
import danceImage from "../assets/img/dance.webp";
import discoImage from "../assets/img/disco.webp";
import houseImage from "../assets/img/house.webp";
import jazzImage from "../assets/img/jazz.webp";
import popImage from "../assets/img/pop.webp";
import rapImage from "../assets/img/rap.webp";
import retroImage from "../assets/img/retro.webp";
import rockImage from "../assets/img/rock.webp";
import { useNavigate } from "react-router-dom";

export default function Radio({ setFavorites, favorites }) {
  const [stations, setStations] = useState();
  const [stationFilter, setStationFilter] = useState("all");
  const [imageFilter, setImageFilter] = useState(allImage);
  const navigate = useNavigate();

  useEffect(() => {
    setupApi(stationFilter).then((data) => {
      setStations(data);
    });
  }, [stationFilter]);

  const setupApi = async (stationFilter) => {
    const api = new RadioBrowserApi(fetch.bind(window), "My Radio App");

    const stations = await api
      .searchStations({
        language: "english",
        tag: stationFilter,
        limit: 30,
      })
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log(error);
        alert("un problème est survenu, rechargement de la page");
        navigate("/");
      });
    return stations;
  };

  useEffect(() => {
    switch (stationFilter) {
      case "classical":
        setImageFilter(classicalImage);
        break;
      case "country":
        setImageFilter(countryImage);
        break;
      case "dance":
        setImageFilter(danceImage);
        break;
      case "disco":
        setImageFilter(discoImage);
        break;
      case "house":
        setImageFilter(houseImage);
        break;
      case "jazz":
        setImageFilter(jazzImage);
        break;
      case "pop":
        setImageFilter(popImage);
        break;
      case "rap":
        setImageFilter(rapImage);
        break;
      case "retro":
        setImageFilter(retroImage);
        break;
      case "rock":
        setImageFilter(rockImage);
        break;
      default:
        setImageFilter(allImage);
    }
  }, [stationFilter]);

  const filters = [
    "all",
    "classical",
    "country",
    "dance",
    "disco",
    "house",
    "jazz",
    "pop",
    "rap",
    "retro",
    "rock",
  ];
  const toggleFavorite = (station) => {
    const favoritesList = JSON.parse(localStorage.getItem("favorites")) || [];

    const index = favoritesList.findIndex((fav) => fav.id === station.id);
    if (index === -1) {
      favoritesList.push(station);
      alert("Station ajoutée aux favoris");
    } else {
      alert("Cette station est déjà dans vos favoris");
    }

    localStorage.setItem("favorites", JSON.stringify(favoritesList));
    setFavorites(station);
  };
  return (
    <div className="radio-card">
      <div className="filters">
        {filters.map((filter) => (
          <span
            id="buttonFilter"
            key={filter}
            className={stationFilter === filter ? "selected active" : ""}
            onClick={() => setStationFilter(filter)}
          >
            {filter}
          </span>
        ))}
      </div>
      <div className="stations-container">
        {stations &&
          stations.map((station, index) => {
            return (
              <div className="station" key={station.id}>
                <img src={imageFilter} alt="" />
                <div className="stationName">
                  <div className="name">{station.name}</div>
                </div>

                <AudioPlayer
                  className="player"
                  src={station.urlResolved}
                  showJumpControls={false}
                  layout="stacked"
                  customProgressBarSection={[]}
                  customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                  autoPlayAfterSrcChange={false}
                />
                <div className="favorite-icon">
                  {JSON.parse(localStorage.getItem("favorites")) &&
                  JSON.parse(localStorage.getItem("favorites")).find(
                    (fav) => fav.id === station.id
                  ) ? (
                    <i
                      className="fa-solid fa-star fa-lg"
                      onClick={() => toggleFavorite(station)}
                    ></i>
                  ) : (
                    <i
                      className="fa-regular fa-star fa-lg"
                      onClick={() => toggleFavorite(station)}
                    ></i>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
