<template>
    <div class="item item_nopic">
        <h2 class="title"><i></i><p>炒房大杀器</p></h2>
        <div class="content">
            <h3>一个大杀器来了</h3>
            <div class="one_pic_con">
                <a href="javascript:;" class="pic">
                    <img src="../assets/images/210x140.png" height="140" width="210" alt="">
                </a>
                <a href="javascript:;" class="pic">
                    <img src="../assets/images/210x140.png" height="140" width="210" alt="">
                </a>
                <a href="javascript:;" class="pic">
                    <img src="../assets/images/210x140.png" height="140" width="210" alt="">
                </a>
            </div>
            <div class="time"><i></i><span>1小时前</span></div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    @rem:100rem;
    @base-color:#fa9144;
    .title{
        display: flex;
        align-items: center;
        height: 60/@rem;
        line-height: 60/@rem;
        color: @base-color;
        background-color: #eee;
        padding-left: 20/@rem;
        font-size: 14px;
        font-weight: normal;
        margin: 0;
        i{
            display: block;
            width: 20px;
            height: 14px;
            background: url('../assets/images/icon-news.png') no-repeat;
            background-size: 20px 14px;
            margin-right: 10/@rem;
        }
    }
    .content{
        padding:20/@rem;
        padding-right: 10/@rem;
        h3{
            font-weight: normal;
            font-size: 16px;
            margin: 0 0 10/@rem;
            color: #333;
        }
        p{
            line-height: 20px;
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }
    .time{
        display: flex;
        font-size: 12px;
        padding-top: 14/@rem;
        align-items:center;
        i{
            display: block;
            width: 14px;
            height: 14px;
            background: url('../assets/images/icon-time.png') no-repeat;
            background-size: 14px;
            margin-right: 10/@rem;

        }
    }
    .one_pic_con{
        display: flex;
        justify-content: space-between;
        a.pic{
            display: block;
            width: 210/@rem;
            height: 140/@rem;
            margin-right: 10/@rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>