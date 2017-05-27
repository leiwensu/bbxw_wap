<template>
<div>
    <div class="header">
        <div class="hd_top">
            <a class="hd_logo" href="javascript:;"></a>
            <router-link class="hd_search" to="/search"></router-link>
        </div>
        <div class="hd_nav">
            <ul class="hd_nav_list" :class="active">
                 <router-link class="hd_nav_item home" tag="li" to="/home" @click.native="makeActive('home')">
                    <a href="javascript:;">首页</a>
                 </router-link>
                 <router-link class="hd_nav_item new" tag="li" to="/event" @click.native="makeActive('new')">
                    <a href="javascript:;">最新</a>
                 </router-link>
                 <router-link class="hd_nav_item hours" tag="li" to="/event" @click.native="makeActive('hours')">
                    <a href="javascript:;">24小时</a>
                 </router-link>
                 <router-link class="hd_nav_item fun" tag="li" to="/event" @click.native="makeActive('fun')">
                    <a href="javascript:;">娱乐事件</a>
                </router-link>

                 <li class="hd_nav_item hd_nav_item--drop" @click="toggleMenu">
                    <a href="javascript:;" :class="isIconDown?'icon_down':'icon_up'"></a>
                 </li>
            </ul>
        </div>
    </div>
    <transition name="fade">
        <div class="hd_menu_wrap" v-show="showMenu">
            <div class="hd_mask"></div>
            <div class="hd_menu">
                <a href="javascript:;">首页</a>
                <a href="javascript:;">最新</a>
                <a href="javascript:;">24小时</a>
                <a href="javascript:;">娱乐事件</a>
                <a href="javascript:;">国内外事件</a>
                <a href="javascript:;">全部事件</a>
            </div>
        </div>
    </transition>

</div>

</template>
<style lang="less" scoped>
    @rem:100rem;
    @base-color:#fa9144;
    .header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 150/@rem;
        .hd_top{
            display: flex;
            align-items:center;
            justify-content:space-between;
            box-sizing: border-box;
            height: 80/@rem;
            background-color: @base-color;
            padding: 0 25/@rem;

        }
        .hd_logo{
            width: 490/@rem;
            height: 32/@rem;
            background: url("../assets/images/logo.png") no-repeat;
            background-size: 490/@rem 32/@rem;

            img{
                width: 100%;
            }
        }
        .hd_search{
            width: 28/@rem;
            height: 28/@rem;
            background: url("../assets/images/nav_search_1.png") no-repeat;
            background-size: 28/@rem 28/@rem;
        }
        .hd_nav{
            position: relative;
            background-color: #fff;
            z-index: 9;
            .hd_nav_list{
                display: flex;
                padding: 0 20/@rem 0 40/@rem;
                justify-content:space-between;
                border-bottom: 1px solid @base-color;
            }
            .hd_nav_item{
                height: 70/@rem;
                line-height: 70/@rem;
                padding: 0 20/@rem;
            }
            .home .home,
            .new .new,
            .hours .hours,
            .fun .fun{
                border-bottom: 2px solid @base-color;
            }
            .hd_nav_item--drop{
                display: flex;
                justify-content:center;
                align-items:center;
                .icon_down{
                    width: 30/@rem;
                    height: 16/@rem;
                    background: url("../assets/images/nav_arrow_down.png") no-repeat;
                    background-size: 30/@rem 16/@rem;
                }
                .icon_up{
                    width: 30/@rem;
                    height: 16/@rem;
                    background: url("../assets/images/nav_arrow_up.png") no-repeat;
                    background-size: 30/@rem 16/@rem;
                }
            }
        }
    }
    .hd_menu_wrap{
        position: fixed;
        left: 0;
        top: 150/@rem;
        width: 100%;
        height: 100%;
        .hd_mask{
            position: absolute;
            top: 0;
            left: 0;
            background: #000;
            opacity: 0.8;
            width: 100%;
            height: 100%;
            z-index: 10;
        }
        .hd_menu{
            position: absolute;
            top: 0;
            left: 0;
            box-sizing: border-box;
            padding: 0 60/@rem;
             opacity: 1;
             z-index: 12;

            a{
                float: left;
                margin-right: 60/@rem;
                margin-top: 40/@rem;
                opacity: 1;
                color: #fff;
            }
        }
    }
    .fade-enter-active,.fade-leave {
      transition: all .3s ease;
    }
    .fade-enter, .slide-fade-leave-active {
      transform: translateX(10px);
      opacity: 0;
    }
</style>
<script>
    export default {
        data () {
            return {
                showMenu:false,
                isIconDown:true,
                home:true,
                active:'home'
            }
        },
        methods:{
            toggleMenu(){
                if(this.showMenu === false){
                    this.showMenu = true;
                    this.isIconDown = false;
                }else{
                    this.showMenu = false;
                    this.isIconDown = true;
                }

            },
            makeActive (str) {
                this.active = str;
            }
        }
    }
</script>