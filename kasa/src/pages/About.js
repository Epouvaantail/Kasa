import React from "react";
import "../style/About.css";
import Montain from "../assets/images/montagne.png";
import Collapse from "../components/collapse";


const About = () => {
  return (
    <main>
        <div className="about__banner">
          <img src={Montain} alt="banner about"/>
        </div>
        <section>
        <Collapse
          state={{
            title: "Fiabilité",
            description:
              "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
          }}
        />
        <Collapse
          state={{
            title: "Respect",
            description:
              "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
          }}
        />
        <Collapse
          state={{
            title: "Service",
            description:
              "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
          }}
        />
        <Collapse
          state={{
            title: "Sécurité",
            description:
              "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
          }}
        />
        </section>
    </main>
  );
};
export default About;