<template lang="html">
    <ul class="nav">
        <router-link to="/home/" class="navItems" @click.native="hide">
          <!-- <Icon type="ios-home" size="30"></Icon> --><!--
          <img src="../assets/imgs/bottom_nav/home_icon.png" height="22" width="22" alt=""> -->
          <div class="bottom_nav_icon icon_1"></div>
          <div class="bottom_nav_text">首页</div>
        </router-link>
        <router-link to="/collect/my" class="navItems">
          <!-- <Icon type="cube" size="22"></Icon> -->
          <div class="bottom_nav_icon icon_2"></div>
          <div class="bottom_nav_text">视频</div>
        </router-link>
        <router-link to="/care" class="navItems">
          <!-- <Icon type="ios-heart" size="22"></Icon> -->
          <div class="bottom_nav_icon icon_3"></div>
          <div class="bottom_nav_text">共青团</div>
        </router-link>
        <router-link to="/video" class="navItems">
          <!-- <Icon type="person" size="22"></Icon> -->
          <div class="bottom_nav_icon icon_4"></div>
          <div class="bottom_nav_text">青订阅</div>
        </router-link>
        <router-link to="/my" class="navItems">
          <!-- <Icon type="person" size="22"></Icon> -->
          <div class="bottom_nav_icon icon_5"></div>
          <div class="bottom_nav_text">我的</div>
        </router-link>
    </ul>
</template>

<script>
import * as type from '../store/mutation-types.js'
export default {
  methods:{
    hide(){
      this.$store.commit(type.PULLDOWNBTN, false);
    }
  }
}
</script>

<style lang="less">
@import '../assets/css/border.less';
.nav {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    text-align: center;
    font-size: 10px;
    overflow: hidden;
    z-index: 1000;
    opacity: 1;
    background: #fff;
    box-shadow: 0 0 5px #ccc;
    height: 1.2rem;
    .navItems {
        display: block;
        float: left;
        width: 20%;
        height: 100%;
        color: #626262
;
        padding-top: 5px;
        .bottom_nav_icon{
          height: 57%;
          margin: 0 auto;
        }
        .icon_1{
          background: url("../images/icon-home.png") no-repeat center center;
          background-size: contain;
        }
        .icon_2{
          background: url(../images/icon-video.png) no-repeat center center;
          background-size: contain;
        }
        .icon_3{
          background: url(../images/icon-gqt.png) no-repeat center center;
          background-size: contain;
        }
        .icon_4{
          background: url(../images/icon-gqdy.png) no-repeat center center;
          background-size: contain;
        }
        .icon_5{
          background: url(../images/icon-my.png) no-repeat center center;
          background-size: contain;
        }
        .bottom_nav_text{
          height: 43%;
        }
    }
    .router-link-active {
        color: #55d8a1;
         .icon_1{
          background: url("../images/icon-home-active.png") no-repeat center center;
          background-size: contain;
        }
        .icon_2{
          background: url(../images/icon-video-active.png) no-repeat center center;
          background-size: contain;
        }
        .icon_3{
          background: url(../images/icon-gqt-active.png) no-repeat center center;
          background-size: contain;
        }
        .icon_4{
          background: url(../images/icon-gqdy-active.png) no-repeat center center;
          background-size: contain;
        }
        .icon_5{
          background: url(../images/icon-my-active.png) no-repeat center center;
          background-size: contain;
        }
    }
}
</style>
