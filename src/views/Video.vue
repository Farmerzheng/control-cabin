<template>
  <div class="video">
    <div class="video-left">
      <ul class="list">
        <li class="list-item">
          <span class="icon">+</span>
          <span>一公局</span>
          <ul>
            <li class="list-item"><span class="icon">+</span>一公局一公司</li>
            <li class="list-item"><span class="icon">+</span>一公局二公司</li>
            <li class="list-item"><span class="icon">+</span>一公局三公司</li>
            <li class="list-item"><span class="icon">+</span>一公局四公司</li>
            <li class="list-item"><span class="icon">+</span>一公局五公司</li>
            <li class="list-item"><span class="icon">+</span>一公司六公司</li>
            <li class="list-item"><span class="icon">+</span>一公局厦门公司</li>
            <li class="list-item"><span class="icon">+</span>一公局桥梁公司</li>
            <li class="list-item"><span class="icon">+</span>一公局轨道公司</li>
          </ul>
        </li>
        <li class="list-item"><span class="icon">+</span>二公局</li>
        <li class="list-item"><span class="icon">+</span>三公局</li>
        <li class="list-item"><span class="icon">+</span>一航局</li>
        <li class="list-item"><span class="icon">+</span>二航局</li>
        <li class="list-item"><span class="icon">+</span>三航局</li>
      </ul>
    </div>
    <div class="video-right">
      <div class="video-item"></div>
      <div class="video-item"></div>
      <div class="video-item"></div>
      <div class="video-item"></div>
    </div>
  </div>
</template>
<style scoped>
ul {
  list-style: none;
}
.video {
  margin-top:10px;
  display: flex;
  color: #fff;
  line-height: 38px;
}
.video-left {
  width: 18%;
  border: 1px solid #fff;
  box-shadow: -10px 0px 15px #034c6a inset, 0px -10px 15px #034c6a inset,
    10px 0px 15px #034c6a inset, 0px 10px 15px #034c6a inset;
  border: 1px solid #034c6a;
  border-radius: 10px;
  background-color: rgba(25, 57, 90, 0.5);
}
.video-left .list > .list-item {
}
.video-right {
  width: 82%;
  border: 1px solid #fff;
  display: flex;
  flex-wrap: wrap;
}
.video-right .video-item {
  width: 49.6%;
  background-color: pink;
  height: 49%;
  border: 1px solid #fff;
}
.video-right .video-item:nth-child(1) {
  background-image: url(../assets/img/video-01.png);
}
.video-right .video-item:nth-child(2) {
  background-image: url(../assets/img/video-02.png);
}
.video-right .video-item:nth-child(3) {
  background-image: url(../assets/img/video-03.png);
}
.video-right .video-item:nth-child(4) {
  background-image: url(../assets/img/video-04.png);
}
.icon {
  display: inline-block;
  background-color: #fff;
  color: #000;
  width: 15px;
  height: 15px;
  line-height: 15px;
  text-align: center;
  margin-right: 6px;
}
</style>
