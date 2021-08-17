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
  };
  // this.setState({ subject: v[0], color: "#000" });
  changeBack = (e) => {
    setTimeout(() => {
      const { letterIn } = this.props;
      localStorage.setItem("subject", this.state.subject);
      letterIn();
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
