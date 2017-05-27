<template>
    <div class="tag">
        <div class="ev_title">标签列表</div>
        <div class="tag_list_wrap">
            <div class="tag_item_title bt0">
                <i class="tag_new_icon"></i>
                <p>最新标签</p>
            </div>
            <div class="tag_list">
                <a class="txt_0" href="javascript:;">连衣裙</a>
                <a class="txt_1" href="javascript:;">交流</a>
                <a class="txt_2" href="javascript:;">安迪</a>
                <a class="txt_0" href="javascript:;">修身</a>
                <a class="txt_1" href="javascript:;">有钱</a>
                <a class="txt_2" href="javascript:;">月食</a>
                <a class="txt_1" href="javascript:;">短发</a>
                <a class="txt_2" href="javascript:;">金星变性</a>
                <a class="txt_0" href="javascript:;">连衣裙</a>
                <a class="txt_2" href="javascript:;">交流</a>
                <a class="txt_0" href="javascript:;">安迪</a>
                <a class="txt_1" href="javascript:;">修身</a>
                <a class="txt_2" href="javascript:;">有钱</a>
                <a class="txt_0" href="javascript:;">月食</a>
                <a class="txt_2" href="javascript:;">短发</a>
                <a class="txt_1" href="javascript:;">金星变性</a>
            </div>
            <div class="tag_item_title">
                <i class="tag_hot_icon"></i>
                <p>当月热门标签</p>
            </div>
            <div class="tag_list">
                <a class="txt_0" href="javascript:;">连衣裙</a>
                <a class="txt_1" href="javascript:;">交流</a>
                <a class="txt_2" href="javascript:;">安迪</a>
                <a class="txt_0" href="javascript:;">修身</a>
                <a class="txt_1" href="javascript:;">有钱</a>
                <a class="txt_2" href="javascript:;">月食</a>
                <a class="txt_1" href="javascript:;">短发</a>
                <a class="txt_2" href="javascript:;">金星变性</a>
                <a class="txt_0" href="javascript:;">连衣裙</a>
                <a class="txt_2" href="javascript:;">交流</a>
                <a class="txt_0" href="javascript:;">安迪</a>
                <a class="txt_1" href="javascript:;">修身</a>
                <a class="txt_2" href="javascript:;">有钱</a>
                <a class="txt_0" href="javascript:;">月食</a>
                <a class="txt_2" href="javascript:;">短发</a>
                <a class="txt_1" href="javascript:;">金星变性</a>
            </div>
            <div class="tag_item_title">
                <i class="tag_random_icon"></i>
                <p>随机标签</p>
            </div>
            <div class="tag_list">
                <a class="txt_0" href="javascript:;">连衣裙</a>
                <a class="txt_1" href="javascript:;">交流</a>
                <a class="txt_2" href="javascript:;">安迪</a>
                <a class="txt_0" href="javascript:;">修身</a>
                <a class="txt_1" href="javascript:;">有钱</a>
                <a class="txt_2" href="javascript:;">月食</a>
                <a class="txt_1" href="javascript:;">短发</a>
                <a class="txt_2" href="javascript:;">金星变性</a>
                <a class="txt_0" href="javascript:;">连衣裙</a>
                <a class="txt_2" href="javascript:;">交流</a>
                <a class="txt_0" href="javascript:;">安迪</a>
                <a class="txt_1" href="javascript:;">修身</a>
                <a class="txt_2" href="javascript:;">有钱</a>
                <a class="txt_0" href="javascript:;">月食</a>
                <a class="txt_2" href="javascript:;">短发</a>
                <a class="txt_1" href="javascript:;">金星变性</a>
            </div>
        </div>
        <div class="page">
            <div class="arrow prev"></div>
            <div class="current">第1页</div>
            <div class="arrow active next"></div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    @rem:100rem;
    @base-color:#fa9144;
    .tag{
        .ev_title{
            margin-bottom: 0;
        }
        .bt0{
            border-top: 0;
        }
    }

    .tag_item_title{
        display: flex;
        height: 80/@rem;
        align-items:center;
        border-top: 1px solid #dedede;
        border-bottom: 1px solid #dedede;
        .tag_new_icon{
            display: block;
            width: 32/@rem;
            height: 33/@rem;
            background: url('../assets/images/tag_new.png') no-repeat;
            background-size: 32/@rem 33/@rem;
            margin-right: 15/@rem;
        }
        .tag_hot_icon{
            display: block;
            width: 28/@rem;
            height: 34/@rem;
            background: url('../assets/images/tag_hot.png') no-repeat;
            background-size: 28/@rem 34/@rem;
            margin-right: 15/@rem;
        }
        .tag_random_icon{
            display: block;
            width: 31/@rem;
            height: 31/@rem;
            background: url('../assets/images/tag_random.png') no-repeat;
            background-size: 31/@rem 31/@rem;
            margin-right: 15/@rem;
        }
    }
    .tag_list_wrap{
        padding: 0 20/@rem;
    }
    .tag_list{
        padding-bottom: 40/@rem;
        a{
            padding-right: 30/@rem;
            line-height: 60/@rem;
            word-break:keep-all;
        }
        .txt_0{
            font-size: 14px;
        }
        .txt_1{
            font-size: 20px;
        }
        .txt_2{
            font-size: 18px;
        }
    }
</style>
