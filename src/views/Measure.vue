<template>
  <div class="home">
    <div class="line">
      <div class="item-container" :style="{ width: '32%', height: '40vh' }">
        <my-echarts
          id="pie1"
          :chartStyle="{ width: '90%', height: '80%' }"
          :option="option1"
        >
        </my-echarts>
      </div>

      <div class="item-container" :style="{ width: '32%', height: '40vh' }">
        <my-echarts
          id="pie2"
          :chartStyle="{ width: '100%', height: '100%' }"
          :option="option2"
        >
        </my-echarts>
      </div>
      <div class="item-container" :style="{ width: '32%', height: '40vh' }">
        <my-echarts
          id="pie3"
          :chartStyle="{ width: '100%', height: '100%' }"
          :option="option3"
        >
        </my-echarts>
      </div>
    </div>
    <div class="line">
      <div class="item-container" :style="{ width: '100%', height: '40vh' }">
        <my-echarts
          id="pie5"
          :chartStyle="{ width: '100%', height: '100%' }"
          :option="option4"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MyEcharts from '@/components/MyEcharts.vue'
// import MapView from '@/components/MapView.vue'
// import MyTable from '@/components/MyTable.vue'

export default {
  name: 'home',
  data: function () {
    return {
      option1: {
        title: {
          text: '预警次数统计图——按测点类型',
          subtext: '',
          left: 'center',
          textStyle: {
            fontWeight: 'normal', // 标题颜色
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          textStyle: {
            fontWeight: 'normal', // 标题颜色
            color: '#fff'
          }
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 10, name: '周边环境' },
              { value: 73, name: '地表沉降' },
              { value: 58, name: '拱顶下沉' },
              { value: 48, name: '其他' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: '#999'
              }
            }
          }
        ]
      },
      option2: {
        xAxis: {
          type: 'category',
          data: ['华东', '东北', '中南', '华北', '西北', '西南'],
          axisLabel: {
            show: true,
            textStyle: {
              color: '#ffffff',
              fontSize: '16px'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#ffffff'
            }
          }
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
            itemStyle: {
              normal: {
                color: '#fc8a0f', // 折点颜色
                lineStyle: {
                  color: '#e96665' // 折线颜色
                }
              }
            }
          }
        ]
      },
      option3: {
        xAxis: {
          type: 'category',
          data: ['一航局', '二航局', '三航局', '一公局', '二公局', '三公局'],
          axisLabel: {
            show: true,
            textStyle: {
              color: '#ffffff',
              fontSize: '16px'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#ffffff'
            }
          }
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
            itemStyle: {
              normal: {
                color: '#fc8a0f', // 折点颜色
                lineStyle: {
                  color: '#e96665' // 折线颜色
                }
              }
            }
          }
        ]
      }
    }
  },
  computed: {
    option4: function () {
      // prettier-ignore
      // eslint-disable-next-line standard/array-bracket-even-spacing
      let dataAxis = ['一航局', '二航局', '三航局', '一公局', '二公局', '三公局', '中交路桥', '中交建投', '四航局', '隧道局', '桥梁局', '长大桥', '三航局', '一公局', '二公局', '三公局', '中交路桥' ]
      // prettier-ignore
      // eslint-disable-next-line standard/array-bracket-even-spacing
      let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 191, 234, 290, 330, 310 ]
      let yMax = 500
      let dataShadow = []
      for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax)
      }
      let option = {
        title: {
          text: '本月预警情况统计',
          subtext: '',
          textStyle: {
            fontWeight: 'normal', // 标题颜色
            color: '#fff'
          }
        },
        xAxis: {
          data: dataAxis,
          axisLabel: {
            inside: true,
            color: '#fff'
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#fff'
          }
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        series: [
          {
            type: 'bar',
            showBackground: true,
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#83bff6' },
                { offset: 0.5, color: '#188df0' },
                { offset: 1, color: '#188df0' }
              ])
            },
            emphasis: {
              itemStyle: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#2378f7' },
                  { offset: 0.7, color: '#2378f7' },
                  { offset: 1, color: '#83bff6' }
                ])
              }
            },
            data: data
          }
        ]
      }
      return option
    }
  },
  components: {
    MyEcharts
  }
}
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
}
.item-container {
  display: flex;
  justify-content: space-around;
  box-shadow: -10px 0px 15px #034c6a inset, 0px -10px 15px #034c6a inset,
    10px 0px 15px #034c6a inset, 0px 10px 15px #034c6a inset;
  border: 1px solid #034c6a;
  border-radius: 10px;
  background-color: rgba(25, 57, 90, 0.5);
}
.item-container .item {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-container .item > div {
  width: 100%;
}
.item-container .item p {
  text-align: center;
  color: #fff;
  margin: 0;
}
.line {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 5px auto;
}
</style>
