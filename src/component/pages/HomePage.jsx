import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import "./styleMain.scss";
import Itroductbanner from "../../images/introduce_bg/introduction-bg.png";
import BesProduct from "../../images/bes_bg/bes-bg.png";
import BesImage1 from "../../images/bes_bg/best-image-01.png";
import BesImage2 from "../../images/bes_bg/best-image-02.png";
import BesImage3 from "../../images/bes_bg/best-image-03.png";
import GoIcon from "../../images/bes_bg/go-icon.png";
import Oject6 from "../../images/brand-story/object-06.png";
import Oject1 from "../../images/brand-story/object-01.png";
import Oject7 from "../../images/brand-story/object-07.png";
import Oject2 from "../../images/brand-story/object-02.png";
import Oject3 from "../../images/brand-story/object-03.png";
import Oject4 from "../../images/brand-story/object-04.png";
import Oject5 from "../../images/brand-story/object-05.png";
import Img from "../../images/brand-story/img.png";
import newImg1 from "../../images/happen/news-img-01.png";
import newImg3 from "../../images/happen/news-img-03.png";
import newImg4 from "../../images/happen/news-img-04.png";
import newImg5 from "../../images/happen/news-img-05.png";
// import newImg5 from "../../images/happen/news-img-05.png";
// import newImg5 from "../../images/happen/news-img-05.png";
import video from "../../images/main-bottom/video.png";
import videoObject1 from "../../images/main-bottom/video-object-01.png";

import videoObject3 from "../../images/main-bottom/video-object-03.png";
import videoObject4 from "../../images/main-bottom/video-object-04.png";
import videoObject5 from "../../images/main-bottom/video-object-05.png";
import videoObject6 from "../../images/main-bottom/video-object-06.png";
import videoObject7 from "../../images/main-bottom/video-object-07.png";
import videoObject9 from "../../images/main-bottom/video-object-09.png";
import videoObject8 from "../../images/main-bottom/video-object-08.png";

import { AiFillHeart } from "react-icons/ai";

import Banner from "../../images/main_banner/main-banner.jpg";
import { productList } from "./ListProduct";

const Main = () => {
  return (
    <div className="main">
      <Container fluid="xxl" className="container-main">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <div className="main-banner">
              <img src={Banner} alt="banner" />
            </div>
          </Col>
        </Row>
      </Container>
      {/* <Container fluid className="container-main">
        <Row>
          <Col> */}
      <div className="main-introduct">
        <img src={Itroductbanner} alt="introduct-banner" />
        <div className="main-introduct__wrapper">
          <div className="main-introduct__info">
            <h3 className="main-introduct__title">what happened</h3>
            <p className="main-introduct__text-info">
              How to create mobile-optimized videos in minutes. Not a designer,
              every team makes a lot of videos Can be trimmed. Take the first
              step to your brand's success. How to create mobile-optimized
              videos in minutes.
            </p>
          </div>
        </div>
      </div>
      {/* </Col>
        </Row>
      </Container> */}
      <Container fluid className="container-main">
        <Row>
          <Col>
            <div className="bes-product">
              <img src={BesProduct} alt="bes-product" />
              <div className="bes-product__wrapper">
                <div className="bes-product__info">
                  <h3 className="bes-product__title">Best Product</h3>
                  <p className="bes-product__label">
                    How to create mobile-optimized videos in minutes. Not a
                    designer, every team makes a lot of videos Can be trimmed.
                    Take the first
                  </p>
                </div>
                <div className="bes-product__image-list">
                  <div className="bes-product__image-list-item">
                    <img src={BesImage1} alt="bes_image1" />
                    <div className="wrapp-link">
                      <p>How to create mobile-optimized</p>
                      <div className="icon-go">
                        <img src={GoIcon} alt="go-icon" />
                      </div>
                    </div>
                  </div>
                  <div className="bes-product__image-list-item">
                    <img src={BesImage2} alt="bes_image2" />
                    <div className="wrapp-link">
                      <p>How to create mobile-optimized</p>
                      <div className="icon-go">
                        <img src={GoIcon} alt="go-icon" />
                      </div>
                    </div>
                  </div>
                  <div className="bes-product__image-list-item">
                    <img src={BesImage3} alt="bes_image3" />
                    <div className="wrapp-link">
                      <p>How to create mobile-optimized</p>
                      <div className="icon-go">
                        <img src={GoIcon} alt="go-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="wrapper-product">
        <div className="wrapper-sroll">
          <div className="container-load">
            {/* <Row> */}
            {productList &&
              productList.map((proItem, index) => {
                return (
                  <div
                    // xs={2}
                    // sm={2}
                    // md={3}
                    // lg={4}
                    key={index}
                    className="margin-bottom-item"
                  >
                    <div className="product-item">
                      <img src={proItem.image} alt="image1" />
                      <h4>{proItem.title}</h4>
                      <div className="product-item__info">
                        <span className="product-item__info-price">
                          {proItem.price}
                        </span>
                        <span className="product-item__info-like">
                          <AiFillHeart className="heart-icon" />
                          {proItem.like}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            {/* </Row> */}
          </div>
        </div>
        <div className="wrapper-btn-load">
          <Button className="btn__see-more">See more</Button>
        </div>
      </div>
      <div className="brand-story">
        <div className="brand-story__info">
          <h3 className="brand-story__title">Brand Story</h3>
          <p className="brand-story__label">
            모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
            아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
            걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
          </p>
        </div>
        {/* <span className="shap"></span> */}
        <div className="brand-story__box">
          <div className="brand-story__box-img">
            <img className="img" src={Img} alt="Img" />
          </div>
          <div className="brand-story__box-info">
            <h3 className="brand-story__box-title">
              What Happened’s Brand story
            </h3>
            <p className="brand-story__box-label">
              청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
              풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
              살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다. 내는
              이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은 끝까지
              칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고 고행을
              끝에 설산에서 황금시대를 이상을 운다.
            </p>
            <div className="brand-story__btn-load">
              <Button className="btn__see-more">See more</Button>
            </div>
          </div>
        </div>
        <img className="Oject1" src={Oject1} alt="Oject1" />
        <img className="Oject2" src={Oject2} alt="Oject2" />
        <img className="Oject3" src={Oject3} alt="Oject3" />
        <img className="Oject6" src={Oject6} alt="oject6" />
        <img className="Oject7" src={Oject7} alt="Oject7" />
        <img className="Oject4" src={Oject4} alt="Oject4" />
        <img className="Oject5" src={Oject5} alt="Oject5" />
      </div>

      <div className="happen">
        {/* <img src={BesProduct} alt="talis" /> */}
        <div className="happen__info">
          <h3 className="happen__title">Happened’s issue</h3>
          <p className="happen__label">
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first
          </p>
          <div className="happen-btn-load">
            <Button className="btn__see-more">See more</Button>
          </div>
        </div>
        <div className="happen__image-list">
          <div className="happen__image-list-item">
            <p className="happen__image-list-item-title">whpn issue</p>
            <div className="newImg">
              <img src={newImg1} alt="newImg" />
            </div>
          </div>
          <div className="happen__image-list-item">
            <p>b brand</p>
            <div className="newImg">
              <img src={newImg3} alt="newImg3" />
            </div>
          </div>
          <div className="happen__image-list-item">
            <p>c brand</p>
            <div className="newImg">
              <img src={newImg3} alt="newImg3" />
            </div>
          </div>
          <div className="happen__image-list-item">
            <p>d brand</p>
            <div className="newImg">
              <img src={newImg4} alt="newImg4" />
            </div>
          </div>
          <div className="happen__image-list-item">
            <p>e brand</p>
            <div className="newImg">
              <img src={newImg5} alt="newImg5" />
            </div>
          </div>
        </div>
      </div>
      <div className="main-bottom">
        {/* <img src={BesProduct} alt="talis" /> */}
        <div className="main-bottom__info">
          <h3 className="main-bottom__title">what happened</h3>
          <p className="main-bottom__label">
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first
          </p>
          <div className="main-bottom-btn-load">
            <Button className="btn__see-more">See more</Button>
          </div>
        </div>
        <div className="main-bottom-video">
          <img className="video" src={video} alt="video" />
        </div>
        <img className="videoObject1" src={videoObject1} alt="videoObject1" />

        <img className="videoObject3" src={videoObject3} alt="videoObject1" />

        <img className="videoObject4" src={videoObject4} alt="videoObject4" />
        <img className="videoObject5" src={videoObject5} alt="videoObject5" />
        <img className="videoObject6" src={videoObject6} alt="videoObject6" />
        <img className="videoObject7" src={videoObject7} alt="videoObject7" />
        <img className="videoObject9" src={videoObject9} alt="videoObject9" />
        <img className="videoObject8" src={videoObject8} alt="videoObject8" />
      </div>
    </div>
  );
};
export default Main;
