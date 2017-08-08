<template>
  <div id="map-container">
    <el-amap vid="amapDemo" :zoom="zoom" :center="center" :plugin="plugins">
      <el-amap-marker v-for="marker in markers" :position="marker.position"></el-amap-marker>
      <el-amap-ground-image v-for="groundimage in groundimages" :url="groundimage.url" :bounds="groundimage.bounds" :events="groundimage.events"></el-amap-ground-image>
    </el-amap>
  </div>
</template>
<script>
export default {
  data() {
    let self = this;
    return {
      zoom: 10,
      center: [113.814549, 22.63336],
      lng: 0,
      lat: 0,
      plugins: ['ToolBar', {
        pName: 'Geolocation',
        events: {
          init(o) {
            // o 是高德地图定位插件实例
            o.getCurrentPosition((status, result) => {
              if (result && result.position) {
                self.lng = result.position.lng;
                self.lat = result.position.lat;
                self.center = [self.lng, self.lat];
                self.$nextTick();
              }
            });
          }
        }
      }],
      markers: [{
        position: [113.879037, 22.548737]
      }, {
        position: [113.942788, 22.547231]
      }],
      groundimages: [
        {
          url: '/jiaoliu.png',
          bounds: [[121.5273285, 31.21515044], [122.9273285, 32.31515044]],
          events: {
            click() {
              alert('click groundimage');
            }
          }
        }
      ]
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

