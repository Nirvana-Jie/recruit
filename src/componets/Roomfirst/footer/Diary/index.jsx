import React, { Component } from "react";
import "./index.scss";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

SwiperCore.use([Navigation]);
export default class Diary extends Component {
  render() {
    const { cancel } = this.props;
    return (
      <div className="swiper_background">
        <Swiper spaceBetween={50} slidesPerView={1} navigation={true}>
          <SwiperSlide>
            <div className=" diary_bg">
              <div className="diary_header">军训日记</div>
              <div className="box1">教官好帅</div>
              <div className="box2">求求快下雨吧</div>
              <div className="box3">好热啊</div>
              <div className="box4">饭堂好多人啊</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="diary1">
              <div className="diary_header">军训风采</div>
              <div className="essay">
                “你若军训，便是晴天”，九月份，烈日当空，
                重邮一定少不了萌新们汗水的挥洒。比直的军
                姿、响彻的口号、嘹亮的军歌，分列式的齐整、
                军体拳的嘶吼、战术的热血、队列操的灵动和
                防爆的正义，满眼都是军绿色。快来睹一睹军
                训风采，看看军训的萌新有多潇洒！
              </div>
              <div className="title">分列式</div>
              <div className="show">
                <div className="show1"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="diary2">
              <div className="diary_header">军训风采</div>
              <div className="title">军体拳</div>
              <div className="show">
                <div className="show2"></div>
              </div>
              <div className="title">战术</div>
              <div className="show">
                <div className="show3"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="diary3">
              <div className="diary_header">军训风采</div>
              <div className="title">队列操</div>
              <div className="show">
                <div className="show4"></div>
              </div>
              <div className="title">防爆</div>
              <div className="show">
                <div className="show5"></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="diary4">
              <div
                onClick={() => {
                  cancel();
                }}
              ></div>
              <div className="diary_header">军训风采</div>
              <div className="action1">
                <div className="action_header">防晒</div>
                <div className="action_body">
                  为了不被变成“煤老板”一定要涂好防晒霜或者喷雾,及时补涂。
                </div>
              </div>
              <div className="action2">
                <div className="action_header">晒伤修复</div>
                <div className="action_body">
                  宿舍常备晒后修复霜，妈妈再也不用担心我的皮肤晒伤了。
                </div>
              </div>
              <div className="action3">
                <div className="action_header">鞋垫</div>
                <div className="action_body">
                  胶鞋的鞋底薄，一双舒适的棉鞋垫会让你的军训体验upup。
                </div>
              </div>
              <div className="action4">
                <div className="action_header">多喝水啊</div>
                <div className="action_body">
                  在烈日下的训练105度，补水是非常重要的，记得携带水杯，及时补充水分，盐水最佳。
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}
