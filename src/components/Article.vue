<template>
<div>
    <div class="ev_title">国内大事件</div>
    <!-- 没有内容 -->
    <div class="no_content hide">
        <img src="../assets/images/none_article.png" alt="">
        <p>暂无相关新闻</p>
    </div>
    <div class="articel_list">
        <div class="item item_nopic">
        <div class="content">
            <h3><a href="javascript:;">一个大杀器来了，炒房的一个也别想跑</a></h3>
            <p>夏天马上就要到了，不染个好一个大杀器来了，炒房的一个也别想跑看的发色我都对不起我自己!可是染发的颜色选择那么多，今年染发什么颜色好看呢?今天小编就告诉你染发颜色大全，其中 有一些今年超级火爆的发色供你选择，还教你如何选择正确的发色，快一起来看看先!</p>
            <div class="time"><i></i><span class="red_txt">刚刚</span></div>
        </div>
    </div>
    <div class="item item_onepic">
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
    <div class="item item_threepic">
        <div class="content">
            <h3><a href="javascript:;">一个大杀器来了</a></h3>
            <div class="three_pic_con">
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
            <div class="time"><i></i><span>2017-05-24 22:54:00</span></div>
        </div>
    </div>
    </div>
    <div class="page">
        <div class="arrow prev">&lt;</div>
        <div class="current">第1页</div>
        <div class="arrow active next">&gt;</div>
    </div>
    <FooterVue></FooterVue>

</div>

</template>
<style lang="less" scoped>
    @rem:100rem;
    @base-color:#fa9144;
    .article_title{
        margin-top: 150/@rem;
    }
    .item{
        border-bottom: 1px solid #f6e6da;
    }
    .item_threepic .content{
        padding-right: 10/@rem;
    }
    .three_pic_con{
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

    .item_onepic .content{
        padding-bottom: 30/@rem;
        .con{
            flex:1;
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
<script>
    import FooterVue from './Footer.vue'
    export default{
        components:{
            FooterVue
          }
    }
</script>