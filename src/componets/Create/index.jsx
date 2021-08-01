import React, { Fragment, PureComponent } from "react";

import "./index.scss";

export default class index extends PureComponent {
  render() {
    return (
      <Fragment>
        <div className="backGround">
          123
          <div className="header"></div>
          <div className="content"></div>
          <div className="footer"></div>
        </div>
      </Fragment>
    );
  }
}
