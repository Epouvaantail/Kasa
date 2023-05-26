import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Slider from "../components/carousel";
import Collapse from "../components/collapse";
import GreyStar from "../assets/images/greystar.svg";
import RedStar from "../assets/images/redstar.svg";
import Data from "../data/logement.json";
import "../style/Logement.css";

const Logement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = Data.find((item) => item.id === id);

  useEffect(() => {
    if (!data) {
      navigate("/error");
    }
  }, [data, navigate]);

  const numberStars = parseInt(data.rating);
  const stars = [];

  for (let i = 0; i < numberStars; i++) {
    stars.push(
      <img
        src={RedStar}
        alt="note"
        key={i}
        className="star red__star"
      />
    );
  }

  return (
    <div className="logement-container">
      <Slider images={data.pictures} />

      <div className="infos-container">
        <div className="logement">
          <div className="logement-header">
            <h1 className="logement-title">{data.title}</h1>
            <h2 className="logement-location">{data.location}</h2>
          </div>
        </div>

        <div className="logement-tags-stars">
          <ul className="tags">
            {data.tags.map((tag, index) => (
              <li className="logement-tag" key={index}>
                {tag}
              </li>
            ))}
          </ul>

          <div className="user">
            <div className="logement-host">
              <p>{data.host.name}</p>
              <img
                src={data.host.picture}
                alt={"photo de profil de " + data.host.name}
              />
            </div>

            <div className="logement-stars">
              <div className=" filled-star-container "> {stars}</div>
              <div className=" empty-star-container">
                <img src={GreyStar} alt="note" className="star empty-star"/>
                <img src={GreyStar} alt="note" className="star empty-star"/>
                <img src={GreyStar} alt="note" className="star empty-star"/>
                <img src={GreyStar} alt="note" className="star empty-star"/>
                <img src={GreyStar} alt="note" className="star empty-star"/>
              </div>
            </div>
          </div>

          <div className="collapse-container">
            <div className="collapse-description">
              {Data[0] && (
                <Collapse
                  state={{
                    title: "Description",
                    description: Data[0].description,
                  }}
                />
              )}
            </div>

            <div className="collapse-equipment">
              {Data[0] && (
                <Collapse
                  state={{
                    title: "Equipments",
                    equipments: Data[0].equipments,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logement;