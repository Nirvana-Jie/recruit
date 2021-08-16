import React, { PureComponent } from "react";
import "swiper/components/effect-flip/effect-flip.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectFlip } from "swiper";
import "swiper/components/navigation/navigation.scss";
import "./index.scss";
import PubSub from "pubsub-js";
SwiperCore.use([Navigation, EffectFlip]);
// Import Swiper styles

export default class Letter extends PureComponent {
  state = {
    subject: "",
  };
  componentDidMount() {
    // this.token = PubSub.subscribe('person', (_, data) => {
    //   console.log(data);
    //   this.setState({
    //     headbox: data.headbox,
    //     bodybox: data.bodybox,
    //   });
    // });
    const subject = localStorage.getItem("subject");
    this.setState({ subject: subject });
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }
  render() {
    const { cancel, personImg } = this.props;
    const profile = personImg.slice(0, 2);
    return (
      <div className="letterback">
        <Swiper
          effect="flip"
          spaceBetween={50}
          slidesPerView={1}
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
                      require(`../../../../assets/img/room/letterpop/profile/${profile}.png`)
                        .default +
                      ")",
                  }}
                ></div>
                <div>恭喜你被重庆邮电大学</div>
                <div>
                  <span>{this.state.subject}</span>专业录取
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
