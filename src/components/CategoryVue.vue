<template>
    <div class="category">
        <div class="cate_item_title">
            <i class="cate_title_icon"></i>
            <p>分类名称一</p>
        </div>
        <div class="cate_list">
            <a href="javascript:;">连衣裙</a>
            <a href="javascript:;">交流</a>
            <a href="javascript:;">安迪</a>
            <a href="javascript:;">修身</a>
            <a href="javascript:;">有钱</a>
            <a href="javascript:;">月食</a>
            <a href="javascript:;">短发</a>
            <a href="javascript:;">金星变性</a>
            <a href="javascript:;">连衣裙</a>
            <a href="javascript:;">交流</a>
            <a href="javascript:;">安迪</a>
            <a href="javascript:;">修身</a>
            <a href="javascript:;">有钱</a>
            <a href="javascript:;">月食</a>
            <a href="javascript:;">短发</a>
            <a href="javascript:;">金星变性</a>
        </div>
    </div>
</template>
<style lang="less" scoped>
    @rem:100rem;
    @base-color:#fa9144;
    .category{
        padding: 0 20/@rem;
    }
    .cate_item_title{
        display: flex;
        height: 80/@rem;
        align-items:center;
        border-top: 1px solid #dedede;
        border-bottom: 1px solid #dedede;
        .cate_title_icon{
            display: block;
            width: 30/@rem;
            height: 30/@rem;
            background: url('../assets/images/map_icon.png') no-repeat;
            background-size: 30/@rem 30/@rem;
            margin-right: 15/@rem;
        }
    }
    .cate_list{
        padding-top: 40/@rem;
        padding-bottom: 40/@rem;
        a{
            padding-right: 30/@rem;
            line-height: 60/@rem;
            font-size: 16px;
            word-break:keep-all;
        }
    }
</style>
