<template>
    <div class="hot_event">
        <div class="hot_title">热门事件</div>
        <div class="hot_content">
            <a href="javascript:;">老罗，锤科产品</a>
            <a href="javascript:;">房地产榨干中产阶级</a>
            <a href="javascript:;">老罗，锤科产品</a>
            <a href="javascript:;">房地产榨干中产阶级</a>
            <a href="javascript:;">老罗，锤科产品</a>
            <a href="javascript:;">房地产榨干中产阶级</a>
        </div>
    </div>
</template>
<style lang="less" scoped>
    @rem:100rem;
    @base-color:#fa9144;
    .hot_event{
         margin-top: 150/@rem;
    }
    .hot_title{
        height: 60/@rem;
        line-height: 60/@rem;
        text-align: center;
        background-color: #eee;
        color: #333;
        margin-top: 1px;
        border-top: 1px solid @base-color;
    }
    .hot_content{
        font-size: 0;
        box-shadow: border-box;
        padding:0 20/@rem;
        padding-bottom: 40/@rem;
        a{
            box-sizing: border-box;
            display: inline-block;
            width: 50%;
            font-size: 14px;
            margin-top: 30/@rem;
            background: url('../assets/images/icon-hot.png') no-repeat;
            background-size: 12px 14px;
            padding-left: 30/@rem;
        }
        .icon_hot{
            width: 20/@rem;
            height: 24/@rem;
        }
    }
</style>