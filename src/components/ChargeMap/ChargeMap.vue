<template>
  <div id="container">
  </div>
</template>

<script>

export default {
  mounted() {
    // 百度
    /*  // 1. 创建地图实例
     var map = new BMap.Map("map-container");
     // 2. 创建点坐标
     var point = new BMap.Point(116.404, 39.915);
     // 3. 地图初始化
     map.centerAndZoom(point, 15); */

    // 高德
    // 1.初始化
    var map = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 12,
      center: [116.480983, 40.0958]
    });
    // 2.遮盖物
    var marker = new AMap.Marker({
      position: [113.907419, 22.498795], //marker所在的位置
      offset: new AMap.Pixel(-17, -42), //相对于基点的偏移位置
      icon: new AMap.Icon({
        size: new AMap.Size(40, 50),  //图标大小
        image: "http://webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png",
        imageOffset: new AMap.Pixel(0, -60)
      }),
      content: '<div class="marker-route marker-marker-bus-from"></div>',  //自定义点标记覆盖物内容
      map: map//创建时直接赋予map属性
    });
    //也可以在创建完成后通过setMap方法执行地图对象
    marker.setMap(map);


    // 3.插件-控件
    AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.Geolocation'], function () {

      var toolBar = new AMap.ToolBar(); //创建并添加工具条控件
      var scale = new AMap.Scale(); //缩放控件
      var geolocation = new AMap.Geolocation({
        buttonPosition: 'RB',
        zoomToAccuracy: true,
        buttonOffset: new AMap.Pixel(14, 135)
      }); //定位控件

      map.addControl(toolBar);
      map.addControl(scale);
      map.addControl(geolocation);
      geolocation.getCurrentPosition(); // 获取当前定位
      AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
    })
  },
  data() {

  }
}
</script>
<style lang="less" >
#map-container {
  // margin-top: 46px;
  // height: 100%;
  // width: 100%;
  // overflow:hidden;
}

.amap-marker .marker-route {
  position: absolute;
  width: 40px;
  height: 44px;
  color: #e90000;
  background: url('zhiliu.png') no-repeat;
  cursor: pointer;
}

.amap-marker .marker-marker-bus-from {
  background-position: -334px -180px;
}
</style>

