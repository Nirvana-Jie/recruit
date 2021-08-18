import React, { PureComponent } from "react";
import Swip from "../../../Swip";
import "./index.scss";
export default class Food extends PureComponent {
  state = {
    showNum: 0,
    infor: [
      {
        id: 0,
        name: "兴业苑",
        text: "兴业苑食堂与中心食堂一样，是老一派的食堂。菜式种类繁多、价格较低。食堂的小面，三鲜米线广受好评。",
        comment: "“量大实惠 爱了爱了”",
        from: "——评论选自《掌上重邮》",
        showPic: [
          "http://cdn.redrock.team/hello-student_yxyst0.jpg",
          "http://cdn.redrock.team/hello-student_yxyst1.jpg",
          "http://cdn.redrock.team/hello-student_yxyst2.jpg",
        ],
      },
      {
        id: 1,
        name: "中心食堂",
        text: "中心食堂与雨红莲广场相邻。位于学校的中心且菜式整体价格较低，种类繁多，三元小面深受同学们的喜爱。",
        comment: "“小面分量真足”",
        from: "——评论选自《掌上重邮》",
        showPic: [
          "http://cdn.redrock.team/hello-student_zxst0.jpg",
          "http://cdn.redrock.team/hello-student_zxst1.jpg",
          "http://cdn.redrock.team/hello-student_zxst2.jpg",
          "http://cdn.redrock.team/hello-student_zxst3.jpg",
        ],
      },
      {
        id: 2,
        name: "大西北",
        text: "大西北食堂在中心食堂的背面，食堂空间较少， 提供的菜式以清真食物为主。如果你想品尝西北美食，大西北是一个不错的选择。",
        comment: "“炒刀削我来了”",
        from: "——评论选自《掌上重邮》",
        showPic: [
          "http://cdn.redrock.team/hello-student_dxb0.jpg",
          "http://cdn.redrock.team/hello-student_dxb1.jpg",
          "http://cdn.redrock.team/hello-student_dxb2.jpg",
        ],
      },
      {
        id: 3,
        name: "千喜鹤",
        text: "千喜鹤食堂是知名的网红食堂，食堂装修豪华而富有文艺气息，提供的美食种类很多且独特：蛋糕，奶茶，烧腊，渔粉。",
        comment: "“瓦香鸡~永远的神”",
        from: "——评论选自《掌上重邮》",
        showPic: [
          "http://cdn.redrock.team/hello-student_qxh0.jpg",
          "http://cdn.redrock.team/hello-student_qxh1.png",
          "http://cdn.redrock.team/hello-student_qxh2.png",
        ],
      },
      {
        id: 4,
        name: "延生食堂",
        text: "延生食堂在学校的口碑很好，食物很有特色：新疆炒米粉、饺子抄手、螺蛳粉等深受同学们的好评。",
        comment: "“椒麻混沌 人间值得”",
        from: "——评论选自《掌上重邮》",
        showPic: [
          "http://cdn.redrock.team/hello-student_ysst0.jpg",
          "http://cdn.redrock.team/hello-student_ysst1.jpg",
          "http://cdn.redrock.team/hello-student_ysst2.jpg",
          "http://cdn.redrock.team/hello-student_ysst3.jpg",
        ],
      },
      {
        id: 5,
        name: "樱花食堂",
        text: "樱花食堂是学校最新的食堂，食堂较小但光线很足。早餐午餐晚餐提供的菜式种类多而便宜。",
        comment: "“大抄手 真的可以”",
        from: "——评论选自《掌上重邮》",
        showPic: [
          "http://cdn.redrock.team/hello-student_yhst0.jpg",
          "http://cdn.redrock.team/hello-student_yhst1.jpg",
          "http://cdn.redrock.team/hello-student_yhst2.jpg",
          "http://cdn.redrock.team/hello-student_yhst3.png",
        ],
      },
      {
        id: 6,
        name: "莘莘食堂",
        text: "莘莘美食城是重邮地理位置最高的食堂，也是最好的食堂之一。食堂大而整洁。香辣干锅、掉渣饼、甜品店、还有二楼种类丰富的自选菜，都是邮子们的最爱。",
        comment: "“掉渣饼你不冲？”",
        from: "——评论选自《掌上重邮》",
        showPic: [
          "http://cdn.redrock.team/hello-student_xxmsc0.jpg",
          " http://cdn.redrock.team/hello-student_xxmsc1.jpg",
          "http://cdn.redrock.team/hello-student_xxmsc2.jpg",
          "http://cdn.redrock.team/hello-student_xxmsc3.jpg",
        ],
      },
    ],
  };
  change = (num) => {
    return (e) => {
      this.setState({ showNum: num });
    };
  };
  render() {
    const { cancel } = this.props;
    const { infor, showNum } = this.state;
    const show = infor.filter((data) => {
      return data.id === showNum;
    });
    return (
      <div className="foodBack">
        <div className="content">
          <div
            className="shut"
            onClick={() => {
              cancel();
            }}
          ></div>
          <div className="title">
            食堂采影：<span>{show[0].name}</span>
          </div>
          <div className="swip">
            <div className="swipercontent">
              <Swip
                showNum={1}
                showPic={show[0].showPic}
                type="popUp"
                between={0}
              />
            </div>
          </div>
          <div className="infor">
            {show[0].text}
            <div>
              {show[0].comment}
              <span>{show[0].from}</span>
            </div>
          </div>
          <div className="switch">
            {infor.map((data, index) => {
              return showNum === data.id ? (
                <button
                  className="btn btnActive"
                  onClick={this.change(data.id)}
                  key={index}
                >
                  {data.name}
                </button>
              ) : (
                <button
                  className="btn"
                  onClick={this.change(data.id)}
                  key={index}
                >
                  {data.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
