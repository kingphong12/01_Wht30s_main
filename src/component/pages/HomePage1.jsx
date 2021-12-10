import React from "react";
import { Link } from "react-router-dom";
// import { Container } from "reactstrap";
import "./style.scss";
import banner from "../../images/main_banner/main-banner.jpg";
import introductBg from "../../images/introduce_bg/introduction-bg.png";
import logo from "../../images/logo/logo.png";
import besBg from "../../images/bes_bg/bes-bg.png";
import besImages1 from "../../images/bes_bg/best-image-01.png";
import besImages2 from "../../images/bes_bg/best-image-02.png";
import besImages3 from "../../images/bes_bg/best-image-03.png";
import go from "../../images/bes_bg/go-icon.png";

import { Col, Container, Row } from "reactstrap";
import { AiOutlineMenu } from "react-icons/ai";

const menuList = [
  {
    title: "NITRODUCTION",
    to: "/nitroduction",
  },
  {
    title: "SOLUTION",
    to: "/solution",
  },
  {
    title: "RATE PLAN",
    to: "/rate_plan",
  },
  {
    title: "lOGIN",
    to: "/login",
  },
  {
    title: "APPLY FOR FREE USE",
    to: "/apply_for_free_use",
  },
];

const HomePage = () => {
  return (
    <Container fluid="xxl">
      <Row className="">
        <Col style={{ padding: 0 }}>
          <div className="d-flex justify-content-between align-items-center header-nav">
            <div className="header-left">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
            </div>
            <div className="header-right">
              <ul className="d-flex justify-content-center align-align-items-lg-center menu-list">
                {menuList &&
                  menuList.map((menuItem, index) => {
                    return (
                      <li className="menu-list-item" key={index}>
                        <Link
                          to={menuItem.to}
                          className="item-link Text-Style-11"
                        >
                          {menuItem.title}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="menu-icon">
              <AiOutlineMenu className="out-line-menu" />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col style={{ padding: 0 }}>
          <div className="main-banner">
            <img src={banner} alt="main-banner" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col style={{ padding: 0 }}>
          <div className="introduc-bg">
            <img src={introductBg} alt="introduct_bg" />
            <div className="content-introduct">
              <p className="content-introduct-title Text-Style-19">
                WHAT HAPPENED!
              </p>
              <div className="content-introduct-label">
                <span className="Text-Style-6">
                  How to create mobile-optimized videos in minutes. Not a
                  designer, every team makes a lot of videos Can be trimmed.
                  Take the first step to your brand's success. How to create
                  mobile-optimized videos in minutes.
                </span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col style={{ padding: 0 }}>
          <div className="row-image">
            <img src={besBg} alt="bes-images" />
            <div className="best__product d-flex justify-content-center align-items-center">
              <p className="Text-Style-5">BEST PRODUCT</p>
              <div className="best__product-label d-flex justify-content-center align-items-center">
                <span className="Text-Style-16">
                  How to create mobile-optimized videos in minutes. Not a
                  designer, every team makes a lot of videos Can be trimmed.
                  Take the first
                </span>
              </div>
            </div>
            <div className="container__absolute">
              <div className="container__images d-flex justify-content-center align-items-center">
                <div className="bes__image-item d-flex justify-content-center">
                  <img src={besImages1} alt="bes-image1" />
                  <div className="product-info d-flex justify-content-center">
                    <div className="product-info-content">
                      <span className="Text-Style">
                        How to create mobile-optimized
                      </span>
                    </div>
                    <div className="icon-go">
                      <img src={go} alt="go" />
                    </div>
                  </div>
                </div>
                <div className="bes__image-item d-flex justify-content-center">
                  <img src={besImages2} alt="bes-image2" />
                  <div className="product-info d-flex justify-content-center">
                    <div className="product-info-content">
                      <span className="Text-Style">
                        How to create mobile-optimized
                      </span>
                    </div>
                    <div className="icon-go">
                      <img src={go} alt="go" />
                    </div>
                  </div>
                </div>
                <div className="bes__image-item d-flex justify-content-center">
                  <img src={besImages3} alt="bes-image3" />
                  <div className="product-info d-flex justify-content-center">
                    <div className="product-info-content">
                      <span className="Text-Style">
                        How to create mobile-optimized
                      </span>
                    </div>
                    <div className="icon-go">
                      <img src={go} alt="go" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;

// <div className="container__images d-flex justify-content-center align-items-center flex-wrap">
//                 <div className="bes__image-item">
//                   <img src={besImages1} alt="bes-image1" />
//                   <div></div>
//                 </div>
//                 <div className="bes__image-item">
//                   <img src={besImages2} alt="bes-image2" />
//                 </div>
//                 <div className="bes__image-item">
//                   <img src={besImages3} alt="bes-image3" />
//                 </div>
//               </div>

// .container__images {
//   width: 100%;
//   height: 100%;
//   padding: 0 176px 197px 176px;
//   position: relative;
//   .bes__image-item {
//     display: block;
//     position: relative;
//     width: 100%;
//     padding-top: 33.2%;
//     img {
//       position: absolute;
//       display: block;
//       max-width: 100%;
//       max-height: 100%;
//       top: 0;
//       left: 0;
//       right: 0;
//       bottom: 0;
//       // object-fit: cover;
//     }
//   }
// }
