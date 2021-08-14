import React, { PureComponent } from "react";
import "./index.scss";

export default class Submit extends PureComponent {
  componentDidMount() {
    const { top, bottom, person } = this;
    const timer = setTimeout(() => {
      top.className += " topActive";
      bottom.className += " bottomActive";
      person.className += " personActive";
      clearTimeout(timer);
    }, 100);
  }
  render() {
    const { person } = this.props;
    return (
      <div className="submitBack">
        <div
          className="top"
          ref={(c) => {
            this.top = c;
          }}
        >
          <div>恭喜你</div>
          <div>生成自己喜欢的形象</div>
        </div>
        <div
          ref={(c) => {
            this.person = c;
          }}
          className="person"
          style={{
            backgroundImage:
              "url(" +
              require(`../../../assets/img/create/persons/${person.headbox}${person.bodybox}${person.footerbox}.png`)
                .default +
              ")",
          }}
        ></div>
        <div
          className="bottom"
          ref={(c) => {
            this.bottom = c;
          }}
        >
          <div>欢迎来到CQUPT</div>
          <div>一起开启未知的探索之旅吧！</div>
        </div>
      </div>
    );
  }
}
