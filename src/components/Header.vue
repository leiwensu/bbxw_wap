<template>
    <div class="header">
            <div class="hd_top">
                <a class="hd_logo" href="javascript:;"></a>
                <a class="hd_search" href="javascript:;"></a>
            </div>
            <div class="hd_nav">
                <ul class="hd_nav_list">
                     <li class="hd_nav_item active"><a href="javascript:;">首页</a></li>
                     <li class="hd_nav_item"><a href="javascript:;">最新</a></li>
                     <li class="hd_nav_item"><a href="javascript:;">24小时</a></li>
                     <li class="hd_nav_item"><a href="javascript:;">娱乐事件</a></li>
                     <li class="hd_nav_item hd_nav_item--drop"><a href="javascript:;" class="icon_down"></a></li>
                </ul>

            </div>
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
            padding: 0 25/@rem 0 50/@rem;
            justify-content:space-between;
        }
        .hd_nav_item{
            height: 70/@rem;
            line-height: 70/@rem;
            padding: 0 25/@rem;
        }
        .active{
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
        }
    }
}
</style>