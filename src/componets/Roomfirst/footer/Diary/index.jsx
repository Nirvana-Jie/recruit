import React, { Component } from "react";
import Swiper from "swiper";
import "./index.scss";
export default class Diary extends Component {
  swiperReady = () => {
    var swiper = new Swiper(".swiper-container", {
      watchSlidesProgress: true, //查看slide的progress
      resistanceRatio: 0, //禁止边缘移动
      on: {
        init: function () {
          console.log(this);
          const slides = this.slides;
          for (let i = 0; i < slides.length; i++) {
            const slide = slides.eq(i);
            slide.css("zIndex", 100 - i); //设置slide的z-index层级
          }
        },

        resize: function (swiper) {
          swiper.update();
        },

        setTranslate: function () {
          const slides = this.slides;
          const offsetAfter = this.width * 1.05; //每个slide的位移值
          for (let i = 0; i < slides.length; i++) {
            const slide = slides.eq(i);
            const progress = slides[i].progress;
            if (progress <= 0) {
              //右边slide位移
              slide.transform(
                "translate3d(" +
                  progress * offsetAfter +
                  "px, 0, 0) scale(" +
                  (1 - Math.abs(progress) / 20) +
                  ")"
              );
              slide.css("opacity", progress + 3); //最右边slide透明
            }

            if (progress > 0) {
              slide.transform("rotate(" + -progress * 5 + "deg)"); //左边slide旋转
              slide.css("opacity", 1 - progress); //左边slide透明
            }
          }
        },
        setTransition: function (swiper, transition) {
          for (var i = 0; i < this.slides.length; i++) {
            var slide = this.slides.eq(i);
            slide.transition(transition);
          }
        },
      },
    });
  };
  componentDidMount() {
    this.swiperReady();
  }
  render() {
    return (
      <div className="diary">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div>
                <img src="img/pg2.png" />
              </div>
            </div>
            <div className="swiper-slide">
              <div>
                <img src="img/pg3.png" />
              </div>
            </div>
            <div className="swiper-slide">
              <div>
                <img src="img/pg1.png" />
              </div>
            </div>
            <div className="swiper-slide">
              <div>
                <img src="img/pg4.png" />
              </div>
            </div>
            <div className="swiper-slide">
              <div>
                <img src="img/pg2.png" />
              </div>
            </div>
            <div className="swiper-slide">
              <div>
                <img src="img/pg3.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
