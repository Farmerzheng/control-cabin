<template>
  <div class="item-container">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-container {
  box-shadow: -10px 0px 15px #034c6a inset,
    /*å·¦è¾¹é˜´å½±*/ 0px -10px 15px #034c6a inset,
    /*ä¸Šè¾¹é˜´å½±*/ 10px 0px 15px #034c6a inset,
    /*å³è¾¹é˜´å½±*/ 0px 10px 15px #034c6a inset;
  border: 1px solid #034c6a;
}
</style>
