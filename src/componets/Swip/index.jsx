import React, { PureComponent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/swiper.scss";
import "./index.scss";
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default class Swip extends PureComponent {
  componentDidMount() {}
  render() {
    const { showPic, showNum, type, changePerImg, between } = this.props;
    return (
      <Swiper
        loop={type === "popUp" || type === "mapPop" ? true : false}
        spaceBetween={between}
        slidesPerView={showNum}
        onSlideChange={(e) => {
          if (type === "headbox" || type === "footerbox" || type === "bodybox")
            changePerImg(type, e.activeIndex);
        }}
        navigation={type === "popUp" || type === "mapPop" ? false : true}
        pagination={
          type === "popUp" || type === "mapPop" ? { clickable: true } : false
        }
        autoplay={
          type === "popUp" || type === "mapPop"
            ? {
                delay: 2000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
              }
            : false
        }
      >
        {showPic.map((data, index) => {
          return type === "headbox" ||
            type === "footerbox" ||
            type === "bodybox" ? (
            <SwiperSlide key={index}>
              <div
                className={`${type}${index} ${type}`}
                style={{
                  backgroundImage:
                    "url(" +
                    require(`../../assets/img/create/${data}.png`).default +
                    ")",
                  backgroundSize: "cover",
                }}
              ></div>
            </SwiperSlide>
          ) : type === "popUp" ? (
            <SwiperSlide key={index}>
              <div
                className={`${type}${index} ${type}`}
                style={{
                  backgroundImage: `url(${data})`,
                  backgroundSize: "cover",
                }}
              ></div>
            </SwiperSlide>
          ) : (
            <SwiperSlide key={index}>
              <div
                className={`${type}${index} ${type}`}
                style={{
                  backgroundImage:
                    "url(" +
                    require(`../../assets/img/room/mapopo/${data}.jpg`)
                      .default +
                    ")",
                  backgroundSize: "cover",
                }}
              ></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }
}
