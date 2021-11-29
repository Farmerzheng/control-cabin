<template>
  <div class="item-container" :style="chartContainerStyle">
    <div id="myMap" :style="chartStyle">map</div>
  </div>
</template>

<script>
import data from '../assets/json/china.json'
export default {
  name: 'MapView',
  props: {
    chartContainerStyle: {
      type: Object,
      default: null
    },
    chartStyle: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      // this.$echarts.registerMap('mymap', data)
      this.$echarts.registerMap('china', data)
      var chart = this.$echarts.init(document.getElementById('myMap'))
      chart.setOption({ geo: {
        map: 'china',
        itemStyle: {
          normal: {
            areaColor: 'rgba(0,153,255,0.6)',
            borderColor: '#09F'
          },
          emphasis: {
            areaColor: 'rgba(0,153,1,0.6)',
            borderColor: '#09F'
          }
        }
      } })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-container {
  box-shadow: -10px 0px 15px #034c6a inset, 0px -10px 15px #034c6a inset,
    10px 0px 15px #034c6a inset, 0px 10px 15px #034c6a inset;
  border: 1px solid #034c6a;
  border-radius: 10px;
}
</style>
