import React from "react";
import anime from "../../../assets/project-shots/anime.png";
import "../ProjectComponent.scss";

const AnimeDB = () => {
  return (
    <div className="project">
      <div className="project-photo">
        <img src={anime} alt="anime" />
      </div>

      <div className="project-info">
        <p className="project-name">Anime DB</p>
        <p className="project-techs">
          Tools: React Redux, JS, Kistu API, Styled-Components.
        </p>
        <p className="project-description">
          Anime DB App in which users can search, save, delete shows in a
          watchlist.
          <br />
          Developed using Kitsu API.
          <br />
          Able to save watchlist using localstorage.
        </p>
        <a
          href="https://625747d6c375552bce81c279--celadon-bombolone-40eea2.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="source-code">Check it out!</button>
        </a>
        <a
          href="https://github.com/alphaworks-react-team/anime-team-1"
          target="_blank"
          rel="noreferrer"
        >
          <button className="source-code">Source Code</button>
        </a>
      </div>
      <hr className="project-hr"></hr>
    </div>
  );
};

export default AnimeDB;
