import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Favoris = ({ setFavorites }) => {
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  const deleteFavorite = () => {
    const favoritesList = JSON.parse(localStorage.getItem("favorites"));
    const index = favoritesList.findIndex(
      (station) => station.changeuuid === favorites.changeuuid
    );
    favoritesList.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(favoritesList));
    alert("Station supprimée des favoris");
    setFavorites(favoritesList);
  };
  return (
    <div className="favorites">
      {favorites &&
        favorites.map((station, index) => {
          return (
            <div className="station" key={index}>
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
              <div className="favorite-icon" onClick={deleteFavorite}>
                <i className="fa-solid fa-star fa-lg"></i>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Favoris;
