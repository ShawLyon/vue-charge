<template>
  <div id="map-container">
  </div>
</template>
<script>
// import AMap from 'AMap'
// console.log(AMap)
export default {
  mounted: function () {
    this.init()
  },
  methods: {
    init: function () {
      var map = new AMap.Map('map-container', {
        center: [113.814549, 22.63336],
        resizeEnable: true,
        zoom: 10
      })

      AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.Geolocation'], function () {
        map.addControl(new AMap.ToolBar())
        map.addControl(new AMap.Scale())
        map.addControl(new AMap.Geolocation())
      })
      /* 覆盖物 */
      //添加点标记，并使用自己的icon
      new AMap.Marker({
        map: map,
        position: [113.814549, 22.63336],
        icon: new AMap.Icon({
          size: new AMap.Size(40, 50),  //图标大小
          image: "./zhiliu.png",
          imageOffset: new AMap.Pixel(0, -60)
        })
      });

      //也可以在创建完成后通过setMap方法执行地图对象
      // marker.setMap(map);



    }
  }
}
</script>
<style lang="less" scoped>
#map-container {
  // margin-top: 46px;
  height: 100%;
  width: 100%;
}
</style>

