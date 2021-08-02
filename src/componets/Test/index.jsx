import { Picker } from "antd-mobile";
import React, { PureComponent } from "react";
import "./index.scss";
import "antd-mobile/lib/picker/style/css";
import PubSub from "pubsub-js";
//自定义选择器列
const CustomChildren = (props) => (
  <div
    onClick={props.onClick}
    style={{
      backgroundColor: "#FFFF",
      borderRadius: "30px",
      boxShadow: " 0px 0px 2px #888",
    }}
  >
    <div
      className="test"
      style={{
        display: "flex",
        height: "36px",
        lineHeight: "36px",
        fontSize: "12px",
      }}
    >
      <div
        style={{
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
    label: "2013",
    value: "2013",
  },
  {
    label: "2014",
    value: "2014",
  },
];

class Test extends PureComponent {
  state = {
    subject: "请选择你的专业",
    color: "#888",
  };
  postSubject = (v) => {
    this.setState({ subject: v[0], color: "#000" });
    PubSub.publish("picker", { subject: v[0] });
  };
  render() {
    return (
      <div className="subChange">
        <Picker
          data={seasons}
          cols={1}
          className="forss"
          onChange={(v) => this.setState({ subject: v[0] })}
          onOk={this.postSubject}
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
