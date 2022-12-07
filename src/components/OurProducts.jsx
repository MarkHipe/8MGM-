import React from "react";
import styled from "styled-components";
import { products } from "../api/products.js";
import { Grid, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { AiOutlineHeart } from "react-icons/ai";

const OurProducts = () => {
  return (
    <Con>
      <div className="heading">
        <h1>Our Products</h1>
        <div className="cat">
          <span className="active">School</span>
          <span>Hospital</span>
          <span>Office</span>
          <span>Casino</span>
        </div>
      </div>
      <div className="contents">
        <div className="contentWrap">
          <div className="productPrevCon">
            <div className="imgWrap">
              <img src={products[0].image} alt="" />
            </div>{" "}
            <div className="details">
              <div className="info">
                <h1>{products[0].name}</h1>
                <p>{products[0].description}</p>
              </div>
              <div className="subInfo">
                <h1>₱{products[0].price}.00</h1>
              </div>
            </div>
          </div>
          <div className="prodSlider">
            <Swiper
              modules={[Grid, Pagination]}
              slidesPerView={3}
              grid={{
                rows: 2,
              }}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              className="mySwiper"
              breakpoints={{
                // when window width is >= 576px
                1: {
                  slidesPerView: 2,
                  grid: {
                    rows: 2,
                  },
                },
                576: {
                  slidesPerView: 2,
                  grid: {
                    rows: 2,
                  },
                },
                992: {
                  slidesPerView: 2,
                  grid: {
                    rows: 2,
                  },
                },
                1299: {
                  slidesPerView: 3,
                  grid: {
                    rows: 2,
                  },
                  spaceBetween: 10,
                },
                1516: {
                  slidesPerView: 3,
                  grid: {
                    rows: 2,
                  },
                },
                1816: {
                  slidesPerView: 4,
                  grid: {
                    rows: 2,
                  },
                },
              }}
            >
              {products.map((prod, i) => {
                return (
                  <SwiperSlide className="perSlide">
                    <div className="prodCard">
                      <img src={prod.image} alt="" />
                    </div>{" "}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </Con>
  );
};

const Con = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  // background: linear-gradient(150.33deg, #b5ffca 5.97%, #4aff7e 82.86%);
  padding-bottom: 2rem;
  color: #424242;
  & .heading {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & h1 {
      font-size: 3rem;
      color: #24753b;
      // border-bottom: 1px solid;
    }
    & .cat {
      display: flex;
      width: 95%;
      margin: auto;
      justify-content: flex-end;
      align-items: center;
      & span {
        margin: auto 10px;
        &.active {
          color: #24753b;
          font-weight: 600;
        }
      }
    }
  }
  & .contents {
    display: flex;
    justify-content: center;
    align-items: center;
    & .contentWrap {
      display: flex;

      justify-content: center;
      align-items: center;
      & .productPrevCon {
        width: 40%;
        height: 540px;
        display: flex;
        border: 1px solid #bebebe;
        border-radius: 20px;
        margin: auto;
        margin-right: 1rem;
        & .imgWrap {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50%;
          & img {
            width: 300px;

            border-radius: 4px;
          }
        }
        & .details {
          display: flex;
          justify-content: center;
          //align-items: center;
          flex-direction: column;
          width: 50%;
          & .info {
            height: 30%;
            padding: 10px;
            & h1 {
              font-size: 25px;
              font-weight: bold;
              margin-bottom: 10px;
            }
            & p {
              font-size: 14px;
              font-weight: normal;
              color: #3b3b3b;
            }
          }
          & .subInfo {
            display: flex;
            padding: 10px;
            flex-direction: column;
            width: 85%;
            border-radius: 20px;
            background-color: #24753b;
            height: 50%;
            color: #fff;
            & h1 {
              font-size: 25px;
              font-weight: bold;
              margin-bottom: 10px;
              margin-left: 10px;
            }
          }
        }
      }

      & .prodSlider {
        // width: 100%;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        & .mySwiper {
          width: 45vw;
          height: 540px;
          & .swiper-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          & .perSlide {
            height: calc((100% - 40px) / 2) !important;
            width: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
          }
          & img {
            cursor: pointer;
            height: 200px;
            width: 200px;
            margin: auto;
            position: relative;
            z-index: 20;
            border: 1px solid #ccc;
            object-fit: cover;
            @media (max-width: 768px) {
              width: 200px;
              height: auto;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
`;

export default OurProducts;
