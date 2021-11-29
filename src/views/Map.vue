<template>
  <div class="map">
    <div class="map-bottom">
      <div class="map-bottom-item">
        <span class="color"></span>
        <span class="des">梁桥</span>
      </div>
      <div class="map-bottom-item">
        <span class="color"></span>
        <span class="des">拱桥</span>
      </div>
      <div class="map-bottom-item">
        <span class="color"></span>
        <span class="des">斜拉桥</span>
      </div>
      <div class="map-bottom-item">
        <span class="color"></span>
        <span class="des">悬索桥</span>
      </div>
    </div>
    <my-echarts
      id="pie1"
      :chartStyle="{
        width: '80px',
        height: '80px',
        position: 'absolute',
        left: '749px',
        top: '63px',
      }"
      :option="option1"
    >
    </my-echarts>
       <my-echarts
      id="pie2"
      :chartStyle="{
        width: '80px',
        height: '80px',
        position: 'absolute',
        left: '667px',
        top: '231px',
      }"
      :option="option1"
    >
    </my-echarts>
      <my-echarts
      id="pie3"
      :chartStyle="{
        width: '80px',
        height: '80px',
        position: 'absolute',
        left: '741px',
        top: '378px',
      }"
      :option="option1"
    >
    </my-echarts>
      <my-echarts
      id="pie4"
      :chartStyle="{
        width: '80px',
        height: '80px',
        position: 'absolute',
        left: '386px',
        top: '178px',
      }"
      :option="option1"
    >
    </my-echarts>
          <my-echarts
      id="pie5"
      :chartStyle="{
        width: '80px',
        height: '80px',
        position: 'absolute',
        left: '377px',
        top: '417px',
      }"
      :option="option1"
    >
    </my-echarts>
    <my-echarts
      id="pie6"
      :chartStyle="{
        width: '80px',
        height: '80px',
        position: 'absolute',
        left: '514px',
        top: '293px',
      }"
      :option="option1"
    >
    </my-echarts>
        <my-echarts
      id="pie7"
      :chartStyle="{
        width: '80px',
        height: '80px',
        position: 'absolute',
        left: '619px',
        top: '495px',
      }"
      :option="option1"
    >
    </my-echarts>
  </div>
</template>
<script>
import MyEcharts from '@/components/MyEcharts.vue'
export default {
  data: function () {
    return {
      option1: {
        title: {
          text: '',
          left: 'center',
          top: 'center'
        },

        series: [
          {
            type: 'pie',
            data: [
              {
                value: 335,
                name: '梁桥'
              },
              {
                value: 234,
                name: '拱桥'
              },
              {
                value: 548,
                name: '斜拉桥'
              },
              {
                value: 148,
                name: '悬索桥'
              }
            ],
            radius: '50%',
            label: {
              normal: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            }
          }
        ]
      }
    }
  },
  components: {
    MyEcharts
  }
}
</script>

<style scoped>
.map {
  position: relative;
  width:1000px;
  height: 600px;
  margin:0 auto;
  background-image: url(../assets/img/map.png);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
}
.map-bottom {
  width: 200px;
  height: 100px;
  background-color: #eee;
  position: absolute;
  left: 30px;
  bottom: 20px;
  box-shadow: 0px 0px 15px #999;
}
.map-bottom .map-bottom-item {
  line-height: 25px;
  display: flex;
  align-items: center;
}
.map-bottom .color {
  width: 39px;
  height: 20px;
  margin: 0 15px;
  border-radius: 5px;
}
.map-bottom .map-bottom-item:nth-child(1) .color {
  background-color: #4671c6;
}
.map-bottom .map-bottom-item:nth-child(2) .color {
  background-color: #7cce7a;
}
.map-bottom .map-bottom-item:nth-child(3) .color {
  background-color: #ffc655;
}
.map-bottom .map-bottom-item:nth-child(4) .color {
  background-color: #ff5c5c;
}
.map-bottom .des {
}
</style>
