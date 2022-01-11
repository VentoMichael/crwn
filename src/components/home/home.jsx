import React from "react";
import "./home.scss";
const Home = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">HATS</h1>
            <span className="subtitle">Shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Jackets</h1>
            <span className="subtitle">Shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">SNEACKERS</h1>
            <span className="subtitle">Shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">WOMEN</h1>
            <span className="subtitle">Shop now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">MENS</h1>
            <span className="subtitle">Shop now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
