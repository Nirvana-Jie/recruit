import "./index.scss";
import React, { PureComponent } from "react";
import Cover from "../Cover";
export default class Roomfirst extends PureComponent {
  // Animate = () => {
  //   const c = this.cartoon;
  //   console.log(c.style);
  //   c.timer = setInterval(function () {
  //     if (c.offsetLeft >= 300) {
  //       c.style.top = c.offsetTop + 10 + "px";
  //     } else c.style.left = c.offsetLeft + Math.ceil((300 - c.offsetLeft) / 20) + "px";
  //   }, 30);
  // };
  // cancelAnimate = () => {
  //   const c = this.cartoon;
  //   clearInterval(c.timer);
  // };
  mapMove = (e) => {
    e.target.className += " mapActive";
  };
  componentDidMount() {
    const { view } = this;
    console.log(view);
    view.scrollTo(600, 0);
  }
  render() {
    return (
      <div
        className="room"
        ref={(c) => {
          this.view = c;
        }}
      >
        <div className="tip">wwww</div>
        {/* <Cover /> */}
        <div className="header">123456</div>
        <div className="content">
          8月4日，在湖北省疫情防控指挥部新闻发布会上，武汉市人民政府副秘书长李涛介绍了本次疫情武汉呈现的特点。根据全基因组测序结果和流行病学调查报告，截至目前，本次疫情呈现出以下特点：
          一是同一传染源。我市2日通报的7例病例中，已完成的2例样本测序结果显示为delta型，且与江苏本轮本土病例毒株高度同源。
          二是单一传播链。病例1唐某曾于7月27日在荆州高铁站候车时，与江苏淮安某旅游团的活动轨迹存在交集，在抵汉后传播给室友和工友。
          三是8月2日通报的病例，和3号新增的9例确诊、3例无症状感染疫情发生地为同一工地的封控人员，本次疫情大部分病例均与该工地关联。
          本次疫情感染者样本 PCR 检测病毒结果显示患者的 Ct
          值低，表明感染者体内病毒载量高；同时经全基因组测序，表明引起我市疫情的为德尔塔变异株。现有的研究表明，德尔塔变异株病毒载量高、传播能力强、传播速度快，给疫情防控工作带来了异常严峻的挑战。
          8月3日，我市新增确诊病例9例，无症状感染者3例，数据背后有下列几个原因：
          一是全面精准开展流行病学调查，对发现病例工地的所有务工人员及相关人员全覆盖调查，快速锁定风险人员及其关联人员并开展检测。
          二是迅速采取了工地、周边小区封控措施，严格限制人员流动，及时开展检测的同时，使风险外溢降到最低。
          三是迅速开展封控区域内密切接触者、重点人群核酸检测排查，第一时间搜索到感染者。
          四是适时启动全员核酸筛查，扩大了搜索范围。
          正是由于疫情发生后，卫生、交通、城管等多部门联防联控机制的迅速启动，多管齐下，高效处置，精准流调，扩大筛查，早期发现更多感染人群，尽早实施源头管控，充分体现了我市应对疫情“快、准”，使我市的新增病例增加较快。对于后续遏制疫情蔓延具有重要的意义。
          长江日报出品 采写：记者王恺凝 武叶 编辑：曹欣怡 校对：刘永杰
          <div
            className="map"
            onClick={this.mapMove}
            // onTouchStart={this.Animate}
            // onTouchEnd={this.cancelAnimate}
          ></div>
        </div>
        <div className="footer">123456</div>
      </div>
    );
  }
}
