<template>
<div id="home" class="clearfix">
    <headerBar>
        <div slot="home" class="home-header-bar">
            <Icon type="ios-email" size="30" color="#fff" class="fl homeEmail"></Icon>
            <span class="logo">
                中国青年
                <Icon type="ios-refresh-empty" size="30"></Icon>
            </span>
            <router-link to="/search" class="search fr">
                <Icon type="ios-search" size="30" color="#fff" class="homeSearch"></Icon>
            </router-link>
            
        </div>
    </headerBar>
   
    <ul class="homeNav">
        <li v-for="(item,index) in navbar" :key="index" class="navBarLi">
            <router-link :to="{name:item.name,query:{type:item.type}}">{{item.text}}</router-link>
        </li>
    </ul>
    <router-view>


    </router-view>
    
    <!-- <div v-show="loading" v-loading="loading" element-loading-text="拼命加载中" style="width: 100%" class="loading"></div>
    <el-alert v-show="!ifReturnMsg" class="newsLoadError" title="暂无更新..." type="error" description="此频道暂无更新，请先休息一下！" show-icon></el-alert>
    <transition enter-active-class="bounceInLeft" leave-active-class="bounceOutRight">
       
    </transition> -->
    <!-- <div class="pulldownload" v-show="downLoadMore" @click="pulldownloadmore({kind:first || $router.query.type,flag:downLoadMore})">
        点击加载更多
    </div> -->
    <!-- <transition name="bounce" enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
        <Back-top v-show="top" class="animated bounce">
            <div class="top">
                <Icon type="android-arrow-up"></Icon>
            </div>
        </Back-top>
    </transition> -->
    <bottom-nav></bottom-nav>
</div>
</template>

<script>
import moment from 'moment'
import headerBar from '../components/Header-bar.vue'
import bottomNav from '../components/Bottom-nav.vue'
import toTop from '../components/To-top.vue'
import * as type from '../store/mutation-types.js'
import {
    mapActions,
    mapState,
    mapGetters
} from 'vuex'
import axios from 'axios'
export default {
    components: {
        headerBar,
        bottomNav,
        toTop
    },
  
    data() {
        return {
            navbar: [{
                    text: '推荐',
                    name:"All"
                  
                },
                {
                    text: '热点',
                    name:"All"
                },
                {
                    text: '社会',
                   name:"All"
                    
                },
                {
                    text: '娱乐',
                  
                },
                {
                    text: '科技',
                   
                },
                {
                    text: '汽车',
               
                },
                {
                    text: '体育',
                  
                },
                {
                    text: '财经',
                  
                },
                {
                    text: '军事',
                   
                },
                {
                    text: '国际',
                   
                },
                {
                    text: '时尚',
                    
                },
            ],
            top: false,
            first: window.location.search.substring(6),
        }
    },
}
</script>

<style lang="less" scoped rel="styleheet/less">@import "../assets/css/transtion.less";
@import '../assets/css/border.less';
.home-header-bar {
    & > i {
        margin-top: 0.2rem;
    }
    .logo {
        color: #fff;
        font-size: 18px;
        vertical-align: middle;
        i {
            vertical-align: middle;
        }
    }
    .homeEmail {
        margin-left: 0.22rem;
    }
    .search{
        display: inline-block;
       .homeSearch {
            margin-right: 0.22rem;
            margin-top: 0.2rem;
        } 
    }
    
}
.homeNav {
    width: 100%;
    overflow: hidden;
    overflow-x: auto;
    text-align: center;
    position: fixed;
    left: 0;
    font-size: 0;
    top: 1.2rem;
    background: #f4f5f6;
    font-family: '微软雅黑';
    white-space: nowrap;
    z-index: 999;
    .navBarLi {
        display: inline-block;
        height: 1rem;
        line-height: 1rem;
        width: 1.4rem;
        font-size: 16px;
        a {
            color: #000;
        }
        .router-link-active {
            color: #27a53e;
            font-size: 17px;
            font-weight: bold;
        }
    }
}
::-webkit-scrollbar {
    display: none;
}
.newsContent {
    margin-top: 2.3rem;
    width: 100%;
    li {
        width: 100%;
        display: flex;
    }
    .newsDetaile {
    
        padding-bottom: 0.15rem;
        .borderBottom(1px,#ccc);
        .title {
            font-size: 16px;
            font-weight: bold;
            color: #000;
            padding-top: 0.2rem;
            padding-bottom: 0.15rem;
        }
        img {
            width: 31.1%;
            margin-right: 0.21rem;
            height: 2.3rem;
        }
        .bottomInfo {
            font-size: 10px;
            margin-top: 0.15rem;
            .writer {
                color: #000;
            }
            .comment_count {
                color: #000;
            }
            .datetime {
                float: right;
                color: #000;
            }
            .avIcon {
                display: inline-block;
                height: 0.4rem;
                width: 0.9rem;
                text-align: center;
                line-height: 0.4rem;
                border-radius: 4px;
                border: 1px solid #39f;
                font-size: 10px;
                margin-right: 0.1rem;
            }
        }
    }
}
.loading {
    margin-top: 3.4rem;
}
.newsLoadError {
    margin: 2.3rem auto;
    font-size: 25px;
    width: 90%;
}
.pulldownload {
    margin-bottom: 1.3rem;
    width: 100%;
    height: 1.5rem;
    line-height: 1.5rem;
    color: #000;
    font-size: 18px;
    text-align: center;
}
.top {
    position: absolute;
    bottom: 2rem;
    right: 0.15rem;
    background: #d43d3d;
    color: #fff;
    text-align: center;
    border-radius: 50%;
}
.pulldownbtn {
    position: absolute;
    margin: 0 auto;
    left: 50%;
    top: 0.5rem;
    z-index: 1000000;
}

</style>
