import React from "react";

import HomeSearchBlock from "../components/Home/Home_SearchBlock";
import HomeCategories from "../components/Home/Home_Categories";
import HomeCards from "../components/Home/Home_Cards";

import "../styles/Home.css";

function Home() {
  return (
    <>
      <main>
        <div className="body">
          <HomeSearchBlock />

          <section>
            <HomeCategories />
          </section>

          <section className="recomendacoes">
            <h2 className="recomendations_title">Recomendações</h2>
            <div className="recomendations">
              <HomeCards />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Home;