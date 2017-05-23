<template>
    <div class="item item_nopic">
        <h2 class="title"><a href="javascript:;"><i></i><p>炒房大杀器</p></a></h2>
        <div class="content">
            <div class="one_pic_con">
                <a href="javascript:;" class="pic">
                    <img src="../assets/images/210x140.png" height="140" width="210" alt="">
                </a>
                <div class="con">
                    <h3><a href="javascript:;">一个大杀器来了</a></h3>
                    <p>夏天马上就要到了，不染个好看的发色我都对不起我自己!可是染发的颜色选择那么多，今年染发什么颜色好看呢?今天小编就告诉你染发颜色大全，其中 有一些今年超级火爆的发色供你选择，还教你如何选择正确的发色，快一起来看看先!</p>
                </div>

            </div>

            <div class="time"><i></i><span>1小时前</span></div>
        </div>
    </div>
</template>
<style lang="less" scoped>
    @rem:100rem;
    @base-color:#fa9144;
    .title{
        height: 60/@rem;
        line-height: 60/@rem;
        background-color: #eee;
        padding-left: 20/@rem;
        font-size: 14px;
        font-weight: normal;
        margin: 0;
        a{
            display: flex;
             align-items: center;
              color: @base-color;
        }
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
        padding-bottom: 30/@rem;
        .con{
            flex:1;
        }
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
        a.pic{
            display: block;
            width: 210/@rem;
            height: 140/@rem;
            margin-right: 20/@rem;
            overflow: hidden;

            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>