import React, { PureComponent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss";
import "./index.scss";
SwiperCore.use(Navigation);

export default class Swip extends PureComponent {
  componentDidMount() {}
  render() {
    const { showPic } = this.props;
    const { showNum } = this.props;
    const { type } = this.props;
    let b = 1;
    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={showNum}
        onSlideChange={() => console.log("slide change")}
        crossFade={true}
        navigation
      >
        {showPic.map((data, index) => {
          return (
            <SwiperSlide>
              <div className={`${type}${index} ${type}`}>
                <img src={data}></img>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }
}
