import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";
import Banner from "../components/banner";
import Card from "../components/card";
import Logo from "../assets/images/logo_kasa.svg";
import data from "../data/logement.json";

const Home = () => {
  return (
    <main>
      <Banner props={Logo} />
      <section className="card__box">
        <div className="cards">
          {data.map((acc) => {
            return (
              <div key={acc.id}>
                <Link to={{ pathname: `/logement/${acc.id}` }}>
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