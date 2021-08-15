import React, { PureComponent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/swiper.scss";
import "./index.scss";
SwiperCore.use([Navigation]);

export default class Swip extends PureComponent {
  componentDidMount() {}
  render() {
    const { showPic, showNum, type, changePerImg, between } = this.props;
    return (
      <Swiper
        spaceBetween={between}
        slidesPerView={showNum}
        onSlideChange={(e) => {
          if (type === "headbox" || type === "footerbox" || type === "bodybox")
            changePerImg(type, e.activeIndex);
        }}
        navigation={type === "popUp" ? false : true}
        pagination={type === "popUp" ? true : false}
      >
        {showPic.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className={`${type}${index} ${type}`}
                style={{
                  backgroundImage: `url(${data})`,
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
