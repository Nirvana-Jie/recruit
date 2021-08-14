import React, { PureComponent } from "react";
import "swiper/components/effect-flip/effect-flip.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectFlip } from "swiper";
import "swiper/components/navigation/navigation.scss";
import "./index.scss";
SwiperCore.use([Navigation, EffectFlip]);
// Import Swiper styles

export default class Letter extends PureComponent {
  render() {
    const { cancel } = this.props;
    return (
      <div className="letterback">
        <Swiper
          effect="flip"
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
        >
          <SwiperSlide>
            <div className="letter letter1">
              <div className="content">
                <div
                  className="profile"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("../../../../assets/img/room/letterpop/profile/03.png")
                        .default +
                      ")",
                  }}
                ></div>
                <div>恭喜你被重庆邮电大学</div>
                <div>
                  <span>集成电路设计与集成系统</span>专业录取
                </div>
                <div>
                  请于
                  <span>9月 日- 日</span>
                </div>
                <div>前往校内风雨操场报道</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="letter letter2">
              <div
                className="shut"
                onClick={() => {
                  cancel();
                }}
              ></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}
