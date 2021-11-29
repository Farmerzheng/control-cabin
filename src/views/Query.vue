<template>
  <div class="query">
    <div class="select">
      <div class="select-item" v-for="(item, index) in selectArr" :key="index">
        <div class="select-item-type">{{ item.type }}</div>
        <div
          class="select-item-data"
          v-for="(item2, index) in item.data"
          :key="index"
        >
          <input type="checkbox" />
          {{ item2 }}
        </div>
        <div class="item-input" v-if="item.data.length === 0">
          <input type="text" />
        </div>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <td>桥梁编号</td>
          <td>项目名称</td>
          <td>桥梁名称</td>
          <td>所属单位</td>
          <td>省份</td>
          <td>隧道类型</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <tr
          :class="index % 2 == 0 ? 'high-light' : 'light'"
          v-for="(item, index) in msg"
          :key="index"
        >
          <td>{{ item.num }}</td>
          <td>{{ item.projectName }}</td>
          <td>{{ item.bridgeName }}</td>
          <td>{{ item.unit }}</td>
          <td>{{ item.province }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.edit ? "取消操作" : "操作" }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'Query',
  data: function () {
    return {
      selectArr: [
        {
          type: '区域选择',
          data: ['华东', '华北', '东北', '中南', '西北', '西南']
        },
        {
          type: '桥梁长度',
          data: [
            '500米以下',
            '500-1000米',
            '1000-3000米',
            '3000-5000米',
            '5000-10000米',
            '10公里以上'
          ]
        },
        {
          type: '桥梁状态',
          data: ['在建桥梁', '完工桥梁', '停工桥梁']
        },
        {
          type: '项目名称',
          data: []
        },
        {
          type: '桥梁名称',
          data: []
        }
      ],
      msg: [
        {
          num: 'DTSD00013',
          projectName: '中交第二航务工程局重庆市嘉陵江大桥项目',
          bridgeName: '轨道10号线西红门站至公主坟站桥梁项目',
          unit: '中交二航局第二工程有限公司',
          province: '重庆市',
          type: '轨道交通',
          edit: true
        },
        {
          num: 'DTSD00013',
          projectName: '中交第二航务工程局重庆市嘉陵江大桥项目',
          bridgeName: '轨道10号线西红门站至公主坟站桥梁项目',
          unit: '中交二航局第二工程有限公司',
          province: '重庆市',
          type: '轨道交通',
          edit: true
        },
        {
          num: 'DTSD00013',
          projectName: '中交第二航务工程局重庆市嘉陵江大桥项目',
          bridgeName: '轨道10号线西红门站至公主坟站桥梁项目',
          unit: '中交二航局第二工程有限公司',
          province: '重庆市',
          type: '轨道交通',
          edit: true
        },
        {
          num: 'DTSD00013',
          projectName: '中交第二航务工程局重庆市嘉陵江大桥项目',
          bridgeName: '轨道10号线西红门站至公主坟站桥梁项目',
          unit: '中交二航局第二工程有限公司',
          province: '重庆市',
          type: '轨道交通',
          edit: true
        },
        {
          num: 'DTSD00013',
          projectName: '中交第二航务工程局重庆市嘉陵江大桥项目',
          bridgeName: '轨道10号线西红门站至公主坟站桥梁项目',
          unit: '中交二航局第二工程有限公司',
          province: '重庆市',
          type: '轨道交通',
          edit: true
        },
        {
          num: 'DTSD00013',
          projectName: '中交第二航务工程局重庆市嘉陵江大桥项目',
          bridgeName: '轨道10号线西红门站至公主坟站桥梁项目',
          unit: '中交二航局第二工程有限公司',
          province: '重庆市',
          type: '轨道交通',
          edit: true
        },
        {
          num: 'DTSD00013',
          projectName: '中交第二航务工程局重庆市嘉陵江大桥项目',
          bridgeName: '轨道10号线西红门站至公主坟站桥梁项目',
          unit: '中交二航局第二工程有限公司',
          province: '重庆市',
          type: '轨道交通',
          edit: true
        }
      ]
    }
  }
}
</script>

<style scoped>
.select {
  margin-top: 20px;
}
.select-item {
  border-bottom: 1px solid #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  color: #000;
  padding: 10px 0;
  padding: 7px 0;
}
.select-item-type {
  background-color: #fff;
  padding: 2px 10px;
  margin: 0 10px;
  border-radius: 3px;
  cursor: pointer;
}
.select-item-arr {
}
.select-item-data {
  color: #fff;
  margin: 0 10px;
}
.item-input {
  margin: 0 10px;
}
table {
  color: #ffffff;
  width: 100%;
  border-collapse: collapse;
  position: absolute;
  text-align: center;
  line-height: 40px;
  margin-top: 20px;
}
table thead {
  font-weight: bold;
}
table tbody {
  font-size: 13px;
}
.high-light {
  background-color: #072951;
  box-shadow: -10px 0px 15px #034c6a inset, 10px 0px 15px #034c6a inset;
}
.light {
  background-color: #081832;
}
</style>
