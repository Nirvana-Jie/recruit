import { Picker } from "antd-mobile";
import React, { PureComponent } from "react";
import "./index.scss";
import "antd-mobile/lib/picker/style/css";
import PubSub from "pubsub-js";
import background from "../../assets/img/create/name1.png";
import background_active from "../../assets/img/create/name1-active.png";
//自定义选择器列
const CustomChildren = (props) => (
  <div
    onClick={props.onClick}
    style={{
      backgroundSize: "cover",
      backgroundImage: `url(${props.backImg})`,
      height: "43px",
    }}
  >
    <div
      className="test"
      style={{
        marginTop: "5px",
        display: "flex",
        height: "36px",
        lineHeight: "36px",
        fontSize: "12px",
        // backgroundImage: URL(`../../assets/img/create/name1.png`),
      }}
    >
      <div
        style={{
          fontWeight: "70px",
          fontFamily: "basic",
          color: "#FFFFFF",
          lineHeight: "43px",
          textAlign: "center",
          fontSize: "12px",
          flex: 1,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          color: props.changecolor,
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
    label: "软件工程",
    value: "软件工程",
  },
  {
    label: "计算机科学与技术",
    value: "计算机科学与技术",
  },
  {
    label: "光电工程",
    value: "光电工程",
  },
  {
    label: "软件工程1",
    value: "软件工程1",
  },
  {
    label: "软件工程2",
    value: "软件工程2",
  },
  {
    label: "软件工程3",
    value: "软件工程3",
  },
  {
    label: "软件工程4",
    value: "软件工程4",
  },
  {
    label: "软件工程5",
    value: "软件工程5",
  },
  {
    label: "软件工程6",
    value: "软件工程6",
  },
  {
    label: "软件工程7",
    value: "软件工程7",
  },
  {
    label: "软件工程8",
    value: "软件工程8",
  },
  {
    label: "软件工程9",
    value: "软件工程9",
  },
  {
    label: "软件工程10",
    value: "软件工程10",
  },
];

class Test extends PureComponent {
  state = {
    subject: "请选择你的专业",
    color: "#FFFFFF",
    backImg: background,
  };
  postSubject = (v) => {
    this.setState({ subject: v[0], color: "#000" });
    PubSub.publish("picker", { subject: v[0] });
  };

  changeBack = (e) => {
    const { letterIn } = this.props;
    letterIn();
  };
  render() {
    const back = this;
    return (
      <div className="subChange">
        <Picker
          onVisibleChange={(e) => {
            if (e) this.setState({ backImg: background_active });
            else {
              this.changeBack();
              this.setState({ backImg: background });
            }
          }}
          data={seasons}
          cols={1}
          className="forss"
          onChange={(v) => this.setState({ subject: v[0] })}
          onOk={this.changeBack}
          onDismiss={this.changeBack}
        >
          <CustomChildren
            changecolor={this.state.color}
            backImg={this.state.backImg}
          >
            {this.state.subject}
          </CustomChildren>
        </Picker>
      </div>
    );
  }
}
export default Test;
