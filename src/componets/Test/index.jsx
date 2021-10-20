import { Picker } from "antd-mobile";
import React, { PureComponent } from "react";
import "./index.scss";
//自定义选择器列
const CustomChildren = (props) => (
  <div onClick={props.onClick}>
    <div
      className="test"
      style={{
        display: "flex",
        lineHeight: "46px",
        fontSize: "12px",
        // backgroundImage: URL(`../../assets/img/create/name1.png`),
      }}
    >
      <div
        style={{
          fontWeight: "70px",
          fontFamily: "basic",
          lineHeight: "46px",
          textAlign: "center",
          fontSize: "12px",
          flex: 1,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          color: `${props.changecolor}`,
        }}
      >
        {props.children}
      </div>
      <div
        style={{
          textAlign: "right",
          color: "#888",
          marginRight: 15,
          display: "none",
        }}
      >
        {props.extra}
      </div>
    </div>
  </div>
);
const seasons = [
  {
    label: "通信与信息工程学院",
    value: "通信与信息工程学院",
  },
  {
    label: "计算机科学与技术学院",
    value: "计算机科学与技术学院",
  },
  {
    label: "自动化学院",
    value: "自动化学院",
  },
  {
    label: "先进制造工程学院",
    value: "先进制造工程学院",
  },
  {
    label: "光电工程学院",
    value: "光电工程学院",
  },
  {
    label: "生物信息学院",
    value: "生物信息学院",
  },
  {
    label: "软件工程学院",
    value: "软件工程学院",
  },
  {
    label: "理学院",
    value: "理学院",
  },
  {
    label: "经济管理学院",
    value: "经济管理学院",
  },
  {
    label: "现代邮政学院",
    value: "现代邮政学院",
  },
  {
    label: "传媒艺术学院",
    value: "传媒艺术学院",
  },
  {
    label: "外国语学院",
    value: "外国语学院",
  },
  {
    label: "国际学院",
    value: "国际学院",
  },
  {
    label: "网络空间与信息法学院",
    value: "网络空间与信息法学院",
  },
  {
    label: "马克思主义学院",
    value: "马克思主义学院",
  },
  {
    label: "体育学院",
    value: "体育学院",
  },
];
class Test extends PureComponent {
  state = {
    subject: "请选择你的学院",
    color: "#FFFFFF",
  };
  changeBack = (e) => {
    setTimeout(() => {
      const { letterIn } = this.props;
      letterIn(this.state.subject);
    }, 0);
  };
  render() {
    return (
      <div className="subChange">
        <Picker
          onVisibleChange={(e) => {
            if (e);
            else {
              this.changeBack();
            }
          }}
          data={seasons}
          cols={1}
          className="forss"
          onChange={(v) => this.setState({ subject: v[0] })}
          onOk={this.changeBack}
          onDismiss={this.changeBack}
        >
          <CustomChildren changecolor={this.state.color}>
            {this.state.subject}
          </CustomChildren>
        </Picker>
      </div>
    );
  }
}
export default Test;
