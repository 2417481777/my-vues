<template>
<div id="my">
    <div class="my-header" v-if="logined">
        <router-link to="/selfpage" class="my-info">
            <img src="../assets/imgs/head.jpg" alt="" class="my-head-portrait fl">
            <span class="my-name fl">{{userName}}</span>
            <Icon type="ios-arrow-right" size="26" color="#fff" class="fr toMyself"></Icon>
        </router-link>
        <ul class="info-bar clearfix">
            <router-link to="/selfpage" class="info-bar-item">
                <p>1</p>动态</router-link>
            <router-link to="/care" class="info-bar-item">
                <p>{{vitality.follow}}</p>关注</router-link>
            <router-link to="/care" class="info-bar-item">
                <p>{{vitality.fans}}</p>粉丝</router-link>
            <router-link to="/care" class="info-bar-item">
                <p>{{vitality.visitor}}</p>7天访量</router-link>
        </ul>
    </div>
    <div v-else class="loginBox">
        <router-link to="/selfpage" class="info-bar-item">
               <div class="iconfont icon-shouji"></div>
        </router-link>
         <router-link to="/selfpage" class="info-bar-item">
               <div class="iconfont icon-weibo"></div>
        </router-link>
         <router-link to="/selfpage" class="info-bar-item">
               <div class="iconfont icon-weixin"></div>
        </router-link>
         <router-link to="/selfpage" class="info-bar-item">
               <div class="iconfont icon-QQ"></div>
        </router-link>
        
           
       
    </div>
    <ul class="midBar">

        <li is="router-link" class="collect" to="/collect/my">
           <div class="iconfont icon-shoucang"></div>  
           <span>收藏</span> 
        </li>
        <li is="router-link" class="" to="/collect/readhistory">
           <div class="iconfont icon-lishi"></div>  
           <span>历史</span> 
        </li>
         <li is="router-link" class="" to="/collect/my">
            <div class="iconfont icon-42dingyue"></div>  
           <span>订阅</span> 
        </li>
        <li is="router-link" class="" to="/collect/readhistory">
            <div class="iconfont icon-xiaoxi"></div>  
           <span>消息</span> 
        </li>
    </ul>
    <div class="tipItems">
        我的评论
    </div>
    <router-link to="/setup" class="tipItems">
        用户反馈
        <Icon type="ios-arrow-right" size="26" color="#ccc" class="fr toSetup"></Icon>
    </router-link>
    <a class="tipItems" href="https://github.com/hcy1996/vue-toutiao" target=_blank>
    	消息举报
        <Icon type="ios-arrow-right" size="26" color="#ccc" class="fr toSetup"></Icon>
    </a>
    <bottom-nav></bottom-nav>
</div>
</template>

<script>
import * as type from '../store/mutation-types.js'
import {
    mapGetters,
    mapActions
} from 'vuex'
import bottomNav from '../components/Bottom-nav.vue'
export default {

    components: {
        bottomNav
    },
    computed: {
        ...mapGetters([
            'userName',
            'vitality',
            'logined'
        ])
    },
    methods: {
        ...mapActions([
            'setUserInfo',
        ]),
        login() {
            if (this.admin === 'admin' && this.password === 'admin') {
                // this.$store.commit(type.LOGINING, {
                //     username: this.admin,
                //     sign: true
                // });
                // this.$store.dispatch(setUserInfo,this.admin);
                this.setUserInfo(this.admin);
                this.$store.commit(type.LOGOFF, true);
                this.admin = '';
                this.password = '';
            } else if (this.admin === '') {
                this.open('1')
            } else if (this.password === '') {
                this.open('2')
            } else {
                this.open('3')
            }
        },
        open(nodesc) {
            if (nodesc === '1') {
                this.$Notice.open({
                    title: '账号不能为空',
                    duration: 2
                });
            } else if (nodesc === '2') {
                this.$Notice.open({
                    title: '密码不能为空',
                    duration: 2
                });
            } else {
                this.$Notice.open({
                    title: '账号或密码错误',
                    duration: 2
                });
            }
        }
    },
    data() {
        return {
            admin: '',
            password: ''
        }
    },
    // beforeRouteLeave (to, from, next) {
    //     if(to.path == '/setup'){
    //         console.log(this.logined)
    //         if(this.logined == true){
    //             next();
    //         }else{
    //             next({path:'/my'});
    //         }
    //     }
    // }
}
</script>

<style lang="less">
@import '../assets/css/border.less';
@import '../icon-font/iconfont.css';


.my-header {
    height: 5.5rem;
    width: 100%;
    background: rgba(51,51,51,1);
    .my-info {
        height: 4rem;
        display: block;
        .my-head-portrait {
            height: 1.6rem;
            width: 1.6rem;
            border-radius: 50%;
            margin-top: 1.2rem;
            margin-left: 1rem;
        }
        .my-name {
            font-size: 18px;
            font-weight: bold;
            color: #ffd;
            margin-top: 1.6rem;
            margin-left: 0.7rem;
        }
        .toMyself {
            margin-top: 1.6rem;
            margin-right: 0.5rem;
        }
    }
    .info-bar {
        height: 1.5rem;
        .info-bar-item {
            float: left;
            width: 25%;
            height: 1.2rem;
            box-sizing: border-box;
            border-left: 1px solid #666;
            text-align: center;
            font-size: 13px;
            color: #777;
            &:first-child {
                border: 0;
            }
            p {
                font-size: 16px;
                color: #ffd;
            }
        }
    }
}
.loginBox {
    height: 4rem;
    width: 100%;
    display: flex;
    color: #fff;
    
    a {
        flex:1;
        display: flex;
        justify-content: center;
        align-items: center;
        div {
            font-size: 50px;
        }
        .icon-weibo {
            color: #f1686c;
        }
        .icon-weixin {
            color: #6cc322;
        }
        .icon-QQ {
            color: #68a9ff;
        }
    }
    .loginTitl {
        font-size: 20px;
        color: #fff;
        padding-top: 0.7rem;
        margin-bottom: 0.4rem;
    }
    .loginInfo {
        width: 70%;
        font-size: 18px;
        height: 1.2rem;
    }
    .submit {
        color: #fff;
        width: 70%;
    }
}   
.midBar {

    position: relative;
    .borderBottom(1px,#ccc);
    display: flex;
    a {
        flex:1;
        text-align: center;
        margin-top: 0.2rem;
        box-sizing: border-box;
        color: #000;
        div {
           font-size: 30px;
        }
        span {
            font-size:16px;
        }
    }
    .collect {
        position: relative;
        display: block;
    
    }
}
.tipItems {
    display: block;
    height: 1.1rem;
    width: 100%;
    margin-top: 0.3rem;
    color: #000;
    font-size: 16px;
    line-height: 1.1rem;
    font-weight: bold;
    position: relative;
    padding-left: 0.3rem;
    .verticalBorder(1px,#ccc);
    .toSetup{
        margin-right: .3rem;
        margin-top: .2rem;
    }
}
</style>
