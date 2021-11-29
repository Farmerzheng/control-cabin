<template>
  <div id="app" class="container">
    <div class="nav">安全监控驾驶舱</div>
    <div class="nav-bar">
      <router-link to="/">首页</router-link>
      <router-link to="/query">桥梁查询</router-link>
      <router-link to="/measure">监控量测</router-link>
      <router-link to="/video">视频监控</router-link>
      <router-link to="/map">地图应用</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
.container {
  width: 100vw;
  height: 100vh;
  background-image: url(assets/img/bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.nav {
  width: 100%;
  height: 80px;
  background-image: url(assets/img/nav.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  color: #fff;
  text-align: center;
  line-height: 80px;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 5px;
}
.nav-bar {
  display: flex;
  justify-content: center;
}
.nav-bar a {
  display: inline-block;
  padding: 0 45px;
  line-height: 40px;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
}
.router-link-exact-active {
  box-shadow: -10px 0px 15px #034c6a inset, 0px -10px 15px #034c6a inset,
    10px 0px 15px #034c6a inset, 0px 10px 15px #034c6a inset;
}
</style>
