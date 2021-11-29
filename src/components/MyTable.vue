<template>
  <div class="table-container">
    <ul>
      <li class="item-title">
        <span>桥梁总数</span>
        <span>{{ sum }}</span>
      </li>
      <li
        class="item"
        v-for="(item, index) in option.series[0].data"
        :key="index"
      >
        <span class="item-title">{{ item.name }}</span>
        <span class="item-value">{{ item.value }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyTable',
  data: function () {
    return {}
  },
  props: {
    option: {
      type: Object,
      default: null
    }
  },
  components: {},
  mounted () {
    console.log(this.option.series)
  },
  computed: {
    sum: function () {
      let sum = 0
      for (let i = 0; i < this.option.series[0].data.length; i++) {
        sum += this.option.series[0].data[i].value
      }
      return sum
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table-container {
  width: 50%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size:14px;
}
.table-container ul {
  width: 50%;
  list-style: none;
  margin: 0;
  padding: 0;
}

.table-container>ul>.item-title {
  background-color: #fb6e52;
  border-radius: 5px;
  text-align: center;
  padding: 10px 0;
  margin-bottom:10px;
}

.table-container .item {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #fff;
  margin-bottom: 5px;
}
.table-container .item-title {
}
.table-container .item-value {
}
</style>
