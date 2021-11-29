<template>
  <div class="home">
    <div class="line">
      <div class="item-container" :style="{ width: '32%', height: '40vh' }">
        <my-echarts
          id="pie1"
          :chartStyle="{ width: '50%', height: '100%' }"
          :option="option1"
        >
          <my-table :option="option1"></my-table>
        </my-echarts>
      </div>

      <map-view
        :chartContainerStyle="{ width: '32%', height: '40vh' }"
        :chartStyle="{ width: '100%', height: '100%' }"
      ></map-view>
      <div class="item-container" :style="{ width: '32%', height: '40vh' }">
        <my-echarts
          id="pie2"
          :chartStyle="{ width: '100%', height: '100%' }"
          :option="option2"
        >
        </my-echarts>
      </div>
    </div>
    <div class="line">
      <div class="item-container" :style="{ width: '32%', height: '40vh' }">
        <div class="item">
          <div>
            <p>预警记录</p>
            <my-echarts
              id="pie3"
              :chartStyle="{ width: '100%', height: '100%' }"
              :option="option3"
            >
            </my-echarts>
          </div>
        </div>
        <div class="item">
          <div>
            <p>提醒记录</p>
            <my-echarts
              id="pie4"
              :chartStyle="{ width: '100%', height: '100%' }"
              :option="option3"
            >
            </my-echarts>
          </div>
        </div>
      </div>
      <div class="item-container" :style="{ width: '65%', height: '40vh' }">
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
import MapView from '@/components/MapView.vue'
import MyTable from '@/components/MyTable.vue'

export default {
  name: 'home',
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
                name: '东北'
              },
              {
                value: 234,
                name: '西北'
              },
              {
                value: 1548,
                name: '华北'
              },
              {
                value: 1548,
                name: '西南'
              },
              {
                value: 1548,
                name: '华东'
              },
              {
                value: 1548,
                name: '中南'
              }
            ],
            radius: '50%'
          }
        ]
      },
      option2: {
        title: {
          text: '桥梁类型',
          left: 'center',
          top: 'center',
          textStyle: {
            fontWeight: 'normal', // 标题颜色
            color: '#fff'
          }
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
                name: '斜拉桥'
              },
              {
                value: 1548,
                name: '悬索桥'
              }
            ],
            radius: ['40%', '70%']
          }
        ]
      },
      option3: {
        series: [
          {
            type: 'gauge',
            startAngle: 280,
            endAngle: 0,
            min: 0,
            max: 1,
            splitNumber: 8,
            axisLine: {
              lineStyle: {
                width: 6,
                color: [
                  [0.25, '#FF6E76'],
                  [0.5, '#FDDD60'],
                  [0.75, '#58D9F9'],
                  [1, '#7CFFB2']
                ]
              }
            },
            pointer: {
              icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
              length: '12%',
              width: 20,
              offsetCenter: [0, '-60%'],
              itemStyle: {
                color: 'auto'
              }
            },
            axisTick: {
              length: 2,
              lineStyle: {
                color: 'auto',
                width: 2
              }
            },
            splitLine: {
              length: 2,
              lineStyle: {
                color: 'auto',
                width: 5
              }
            },
            axisLabel: {
              color: '#464646',
              fontSize: 20,
              distance: -60,
              formatter: function (value) {
                if (value === 0.875) {
                  return ''
                } else if (value === 0.625) {
                  return ''
                } else if (value === 0.375) {
                  return ''
                } else if (value === 0.125) {
                  return ''
                }
                return ''
              }
            },
            title: {
              offsetCenter: [0, '-20%'],
              fontSize: 20
            },
            detail: {
              fontSize: 14,
              offsetCenter: [0, '0%'],
              valueAnimation: true,
              formatter: function (value) {
                return Math.round(value * 100) + '条'
              },
              color: 'auto'
            },
            data: [
              {
                value: 0.7,
                name: ''
              }
            ]
          }
        ]
      }
    }
  },
  computed: {
    option4: function () {
      // prettier-ignore
      let dataAxis = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      // prettier-ignore
      let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149]
      let yMax = 500
      let dataShadow = []
      for (let i = 0; i < data.length; i++) {
        dataShadow.push(yMax)
      }
      let option = {
        title: {
          text: '预警统计',
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
    MyEcharts,
    MapView,
    MyTable
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
  /* background-color: rgba(25, 57, 90, 0.5); */
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
