<template>
  <div class="item-echart ">
    <slot></slot>
    <div :id="id" :style="chartStyle"></div>
  </div>
</template>

<script>
export default {
  name: 'MyChart',
  data: function () {
    return {}
  },
  props: {
    id: {
      // 图表 标签id 标识图标唯一性
      type: String,
      required: true
    },
    chartContainerStyle: {
      type: Object,
      default: null
    },
    chartStyle: {
      type: Object,
      default: null
    },
    option: {
      type: Object,
      default: null
    }
  },
  components: {},
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      // setTimeout(function () {
      // console.log(this.id, this.option, document.getElementById(this.id))
      // }, 1000)

      let myChart = this.$echarts.init(document.getElementById(this.id))
      // //   响应窗口的宽度变化
      window.onresize = function () {
        myChart.resize()
      }
      // // 绘制图表
      myChart.setOption(this.option, true)
    }
  },
  render: function () {
    // eslint-disable-next-line no-undef
    return h(
      'transition',
      {
        name: 'slideInUp'
      },
      [
        // eslint-disable-next-line no-undef
        h('div', {
          id: this.id
        })
      ]
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-echart {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width:100%;
}
</style>
