import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Logo from "../../images/logo/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import "./styleHeader.scss";

const menuList = [
  {
    title: "INTRODUCTION",
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

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toogleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <div className="top-bar">
        <div className="containr-top-nav">
          <div className="box-logo">
            <img src={Logo} alt="logo" />
          </div>
          <ul className="top-menu">
            {menuList &&
              menuList.map((menuItem, index) => {
                return (
                  <li className="top-menu__item" key={index}>
                    <Link
                      className="top-menu__item_link Text-Style-11"
                      to={menuItem.to}
                    >
                      {menuItem.title}
                    </Link>
                  </li>
                );
              })}
          </ul>
          <div className="menu-icon" onClick={toogleMenu}>
            <AiOutlineMenu className="out-line-menu" />
          </div>
        </div>
      </div>
      <div
        className={
          openMenu ? "wrapper-dropdown-menu d-block" : "wrapper-dropdown-menu"
        }
      >
        <Container fluid>
          <Row className="justify-content-between align-items-center">
            <Col xs={12} sm={12} md={12}>
              <ul className="menu-inner">
                {menuList &&
                  menuList.map((menuItem, index) => {
                    return (
                      <li className="item-dropdown-menu" key={index}>
                        <Link
                          className="item-dropdown-menu_link "
                          to={menuItem.to}
                        >
                          {menuItem.title}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
