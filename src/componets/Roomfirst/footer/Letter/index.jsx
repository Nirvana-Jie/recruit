import React, { PureComponent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFlip, EffectCoverflow } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/effect-flip/effect-flip.scss";
import "swiper/components/effect-flip/effect-flip.scss";

// Import Swiper styles
SwiperCore.use([EffectFlip, EffectCoverflow]);

export default class Letter extends PureComponent {
  render() {
    return (
      <div>
        <Swiper effect="flip">
          <SwiperSlide>
            <img src="/img/1.jpeg"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/2.jpeg"></img>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}
