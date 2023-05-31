import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Slider from "../components/carousel";
import Collapse from "../components/collapse";
import GreyStar from "../assets/images/greystar.svg";
import RedStar from "../assets/images/redstar.svg";
import Data from "../data/logement.json";
import "../style/main.css";

const Logement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = Data.find((item) => item.id === id);

  useEffect(() => {
    if (!data) {
      navigate("./Error");
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
    <div className="logement__container">
      <Slider images={data.pictures} />
      <div className="infos__container">
        <div className="logement">
          <div className="logement__header">
            <div className="part1">
              <h1>{data.title}</h1>
            </div>
            <h2>{data.location}</h2>
          </div>
          <div className="logement__tags">
            <ul className="tags">
              {data.tags.map((tag, index) => (
                <li className="tag" key={index}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="user">
          <div className="logement__host">
            <p>{data.host.name}</p>
            <img src={data.host.picture} alt={"photo de profil de " + data.host.name}/>
          </div>
          <div className="logement__stars">
            <div className=" grey__star__box">
              <img src={GreyStar} alt="note" className="star grey__star"/>
              <img src={GreyStar} alt="note" className="star grey__star"/>
              <img src={GreyStar} alt="note" className="star grey__star"/>
              <img src={GreyStar} alt="note" className="star grey__star"/>
              <img src={GreyStar} alt="note" className="star grey__star"/>
            </div>
            <div className=" red__star__box "> {stars}</div>
          </div>
        </div>
      </div>
      <div className="description">
          <div className="collapse__box">
            {Data[0] && (
              <Collapse
                state={{
                  title: "Description",
                  description: Data[0].description,
                }}
             />
            )}
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
  );
};

export default Logement;