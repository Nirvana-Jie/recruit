export default function slide(instance,domNode,routeAddress){
    domNode.addEventListener('touchstart',(event) => {
        instance.setState({
           startY:event.targetTouches[0].pageY
       })
    });
    //移动手指 touchmove：计算手指的滑动距离，并且移动盒子
    domNode.addEventListener('touchmove',(event) => {
       const {startY} =instance.state
       //计算移动距离
       instance.setState({
           moveY:event.targetTouches[0].pageY - startY,
       })
    });
    domNode.addEventListener('touchend',() => {
       const {moveY} =instance.state
       if(Math.abs(moveY)>75){
           //moveY是正值时，路由跳转
           if(moveY<0){
            instance.props.history.push(routeAddress);
           }
       }
    })
}
