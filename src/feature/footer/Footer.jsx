import React from "react";
import "./styleFooter.scss";
import snSicon01 from "../../images/footer/snsicon-01.png";
import snSicon02 from "../../images/footer/snsicon-02.png";
import snSicon03 from "../../images/footer/snsicon-03.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="wrapper-footer">
      <div className="footer">
        <div className="footer-inner">
          <div className="footer-inner-top">
            <div className="footer-inner-top__left">
              <h3>what happened</h3>
              <Link className="footer-item-link" to="#">
                [공지] 개인 정보 처리 방침 변경 사전 안내
              </Link>
              <Link className="footer-item-link" to="#">
                [공지] iOS 10 이하 버전 지원 중단 안내
              </Link>
              <Link className="footer-item-link" to="#">
                [공지] 29CM 강남 스토어 영업 종료
              </Link>
              <Link className="footer-item-link" to="#">
                [공지] 개인 정보 처리 방침 변경 사전 안내
              </Link>
              <Link className="footer-item-link" to="#">
                [공지] 개인 정보 처리 방침 변경 사전 안내
              </Link>
            </div>
            <div className="footer-inner-top__right">
              <div className="footer-inner-top__right-item">
                <h3>about us</h3>
                <Link className="footer-item-link" to="#">
                  회사 소개
                </Link>
                <Link className="footer-item-link" to="#">
                  인재 채용
                </Link>
                <Link className="footer-item-link" to="#">
                  {" "}
                  상시 할인 혜택
                </Link>
              </div>
              <div className="footer-inner-top__right-item">
                <h3>my order</h3>
                <Link className="footer-item-link" to="#">
                  {" "}
                  내 주문
                </Link>
                <Link className="footer-item-link" to="#">
                  주문 배송
                </Link>
                <Link className="footer-item-link" to="#">
                  {" "}
                  취소 / 교환 / 반품 내역
                </Link>
                <Link className="footer-item-link" to="#">
                  상품 리뷰 내역
                </Link>
                <Link className="footer-item-link" to="#">
                  증빙서류 발급
                </Link>
              </div>
              <div className="footer-inner-top__right-item">
                <h3>my account</h3>
                <Link className="footer-item-link" to="#">
                  회원 정보 수정
                </Link>
                <Link className="footer-item-link" to="#">
                  회원 등급
                </Link>
                <Link className="footer-item-link" to="#">
                  마일리지 현황
                </Link>
                <Link className="footer-item-link" to="#">
                  쿠폰
                </Link>
              </div>
              <div className="footer-inner-top__right-item">
                <h3>help</h3>
                <Link className="footer-item-link" to="#">
                  1 : 1 상담 내역
                </Link>
                <Link className="footer-item-link" to="#">
                  상품 Q & A 내역
                </Link>
                <Link className="footer-item-link" to="#">
                  공지 사항
                </Link>
                <Link className="footer-item-link" to="#">
                  자주하는 질문
                </Link>
                <Link className="footer-item-link" to="#">
                  고객의 소리
                </Link>
              </div>
            </div>
          </div>
          <div className="footer-inner-bottom">
            <div className="footer-inner-bottom-left">
              <p className="footer-item-link">
                © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동
                ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what
                happened.co.kr 서울특별시 강남구 도산대로 8길 17 ｜ FAX :
                070-0000-0000 l 서비스 이용약관 l 개인정보처리방침
              </p>
            </div>
            <ul className="footer-inner-bottom-right">
              <li className="footer-inner-bottom-right-item">
                <Link className="bottom-item-link">
                  <img src={snSicon01} alt="snSicon1" />
                </Link>
              </li>
              <li className="footer-inner-bottom-right-item">
                <Link className="bottom-item-link">
                  <img src={snSicon02} alt="snSicon2" />
                </Link>
              </li>
              <li className="footer-inner-bottom-right-item">
                <Link className="bottom-item-link">
                  <img src={snSicon03} alt="snSicon3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
