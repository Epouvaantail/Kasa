import React from "react";
import { Link } from "react-router-dom";
import "../style/main.css";
import Banner from "../components/banner";
import Card from "../components/card";
import data from "../data/logement.json";

const Home = () => {
  return (
    <main>
      <Banner />
      <section className="card__box">
        <div className="cards">
          {data.map((acc) => {
            return (
              <div className="card__place" key={acc.id}>
                <Link to={{ pathname: `/Logement/${acc.id}` }}>
                  <Card
                    props={{
                      url: acc.cover,
                      title: acc.title,
                    }}
                  />
                </Link>
              </div>
            );
          })}
        </div>  
      </section>
    </main>
  );
};
export default Home;