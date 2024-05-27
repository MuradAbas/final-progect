import React from "react";
import "./index.scss"
import { Card } from 'antd';




const HomePage = () => {
  return <div id="home-page">
    <div className="home-page">
      <section id="banner">
        <div className="banner">
          <div className="container">
            <div className="content">
              <h1>Shop With Us</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
              <button className="shop">SHOP NOW</button>
              <button className="club ">CLUB MEMBERSHB</button>
            </div>
          </div></div>
      </section>
      <section id="popular-items">
        <div className="contaienr">
          <div className="popular-items">
            <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
              <div className="custom-image">
                <img alt="example" width="100%" src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg" />
              </div>

              <div className="custom-card">
                <h3>Wild West Hoodie</h3>
                <p>www.instagram.com</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  </div>
};

export default HomePage;