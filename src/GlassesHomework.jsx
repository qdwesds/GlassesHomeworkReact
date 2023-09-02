import React, { Component } from "react";
import "./GlassesHomework.css";

export default class GlassesHomework extends Component {
  arrInfoGlasses = [
    {
      img: "./img/g1.jpg",
      linkImg: "./img/g1.jpg",
    },
    {
      img: "./img/g2.jpg",
      linkImg: "./img/g2.jpg",
    },
    {
      img: "./img/g3.jpg",
      linkImg: "./img/g3.jpg",
    },
    {
      img: "./img/g4.jpg",
      linkImg: "./img/g4.jpg",
    },
    {
      img: "./img/g5.jpg",
      linkImg: "./img/g5.jpg",
    },
    {
      img: "./img/g6.jpg",
      linkImg: "./img/g6.jpg",
    },
    {
      img: "./img/g7.jpg",
      linkImg: "./img/g7.jpg",
    },
    {
      img: "./img/g8.jpg",
      linkImg: "./img/g8.jpg",
    },
    {
      img: "./img/g9.jpg",
      linkImg: "./img/g9.jpg",
    },
  ];

  state = {
    linkImg: "./img/g1.jpg",
  };

  render() {
    return (
      <div className="glassesContent">
        <div className="">
          <div
            className="text-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <h2 className="text-uppercase">try glasses app online</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 item_img d-inline-flex justify-content-center mt-5">
                <img src={this.state.linkImg} alt="" />
              </div>
            </div>
            <div className="row mt-5">
              {this.arrInfoGlasses.map((item, index) => {
                console.log(item);
                const { img, linkImg } = item;
                return (
                  <div className="col-4 d-inline-flex justify-content-center">
                    <button
                      onClick={() => {
                        this.setState({
                          linkImg: linkImg,
                        });
                      }}
                      className="rounded-3 mt-5"
                      key={index}
                    >
                      <img width={50} height={50} src={img} alt="" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
