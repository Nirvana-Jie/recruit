# weclome-2021

## 项目简介

多个小游戏共同组成的新生迎新H5

## 整体结构

为了方便只展示src目录下的文件

```$xslt

├─assets
│  ├─api
│  ├─font
│  │  └─.font-spider
│  ├─img
│  │  ├─create
│  │  │  ├─body
│  │  │  ├─build
│  │  │  │  └─img
│  │  │  │      └─create
│  │  │  │          ├─body
│  │  │  │          ├─foot
│  │  │  │          └─head
│  │  │  ├─foot
│  │  │  ├─head
│  │  │  ├─persons
│  │  │  └─submit
│  │  ├─Home
│  │  ├─Invite
│  │  ├─room
│  │  │  ├─cover
│  │  │  ├─diarypop
│  │  │  ├─foodpop
│  │  │  ├─letterpop
│  │  │  │  └─profile
│  │  │  ├─Map
│  │  │  └─mapopo
│  │  │      ├─信科大楼
│  │  │      ├─数字图书馆
│  │  │      ├─猫猫
│  │  │      ├─第八教学楼
│  │  │      ├─老图书馆
│  │  │      └─运动场
│  │  └─Waiting
│  └─styles
├─componets
│  ├─Cover
│  ├─Create
│  │  └─Submit
│  ├─Roomfirst
│  │  └─footer
│  │      ├─Diary
│  │      ├─Food
│  │      ├─Letter
│  │      └─Map
│  │          ├─MapPop
│  │          └─Popup
│  ├─Swip
│  └─Test
└─pages
    ├─components
    │  └─Music
    ├─home
    ├─Invite
    └─Waiting
```
## 技术栈
+ React
+ swiper
+ scss
+ React Router
+ React Trastion Group
+ antd-mobile
+ postcss

## 项目运行方式

```bash
# 运行
npm (run) start  

# 打包
npm run build
# 测试
npm run test
```

## 项目亮点/难点

### 亮点
1. swiper的多动画封装
2. React-Trasition-Group的动画封装
3. 采用策略模式的设计思想多端适配卷卷的位置和移动
4. 将卷卷上移改为地图下移动，修改卷卷为固定定位，使得窗口一直可以和卷卷同步移动。

### 难点
1. 地图移动端的多机型适配
2. 地图动画的性能优化（微信内置浏览器）
3. 房间内物品实现移动到固定底部栏的动画效果
4. 用原生库实现许多复杂的动画操作

## 项目上线时间
2021.8.23

## 代码的 GitHub/GitLab 地址

+ Gitlab: https://gitlab.redrock.team/web/fe/welcome-2021.git
+ Github: https://github.com/RedRock-double/recruit.git

## 项目线上地址
https://fe-prod.redrock.cqupt.edu.cn/cqupt-welcome-2021/#/

