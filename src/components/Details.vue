<template>
<div>
    <div class="details">
        <div class="dt_header">
            <h2 class="dt_title">手游+直播的模式或将成为一种新的娱乐风向标</h2>
             <div class="dt_info">
                <div class="dt_source_see">
                    <p class="dt_source">
                        <span>来源：腾讯新闻</span>
                        <span>2017-05-17 16:00</span>
                    </p>
                    <p class="dt_see">
                        <span>阅读</span>
                        <span class="see_num">230</span>
                    </p>
                </div>
                <div class="dt_cate">
                    <span>分类：互联网</span>
                </div>
            </div>
        </div>
         <div class="dt_keyword">
            <a href="javascript:;">怎么开网店</a>
            <a href="javascript:;">斗玩网</a>
            <a href="javascript:;">美女</a>
            <a href="javascript:;">主播排行榜</a>
            <a href="javascript:;">怎么做微商</a>
            <a href="javascript:;">最新LOL活动</a>
        </div>
         <div class="dt_abstract">
            平台的爆发，平台的爆发，平台的爆发，平台的爆发，平台的爆发，平台的爆发，平台的爆发，平台的爆发，平台的爆发，
        </div>
        <div class="dt_content"><p>文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</p></div>
         <a class="dt_pic" href="javascript:;"><img src="../assets/images/gg.jpg" alt=""></a>
        <div class="dt_others">
            <a href="javascript:;">上一篇：付费搜索效应被夸大了，其中一半费用被这么浪费掉了</a>
            <a href="javascript:;">下一篇：同是利润增长：英伟达与英特尔股价表现迥异背后</a>
        </div>
         <div class="dt_tag_box">
            <p class="dt_tag">
                标签：<span>手机</span><span>直播</span><span>娱乐</span><span>游戏</span>
            </p>
             <div class="dt_share clearfix">
                <span>分享:</span>
                <a class="icon_share"></a>
            </div>
         </div>
    </div>
    <div class="dt_recommend">
        <h2>相关推荐：</h2>
        <ul class="dt_rec_list">
            <li><a href="javascript:;">富士康真要去美国建厂了</a></li>
            <li><a href="javascript:;">Apple Helmet商标在英国险落</a></li>
            <li><a href="javascript:;">扎克伯格的三千「超管」</a></li>
            <li><a href="javascript:;">小米再次遭遇品牌信任危机</a></li>
            <li><a href="javascript:;">日本富士台台长“被下课”</a></li>
            <li><a href="javascript:;">特朗普时代美国亚太战略的变与不变</a></li>
        </ul>
    </div>
</div>

</template>
<style lang="less" scoped>
    @rem:100rem;
    @base-color:#fa9144;
    .details{
        padding: 20/@rem;
        padding-top: 150/@rem;
        .dt_header{
            padding-bottom: 30/@rem;
            border-bottom: 1px solid #dedede;
        }
        .dt_title{
            color: #000;
            font-weight: normal;
            margin-top: 30/@rem;
            margin-bottom: 0;
        }
        .dt_info{
            display: flex;
            flex-direction:column;
            padding-top: 30/@rem;
            font-size: 12px;
            .dt_source_see{
                display: flex;
                justify-content:space-between;
            }
            .dt_cate{
                padding-top: 14/@rem;
            }
        }
        .dt_keyword{
            text-align: center;
            padding-top: 30/@rem;
            line-height: 40/@rem;
            a{
                margin-right: 30/@rem;
                word-break:keep-all;
                font-size: 12px;
                border-bottom: 1px solid @base-color;
                padding-bottom: 2px;
            }
        }
        .dt_abstract{
            padding: 26/@rem 20/@rem;
            background-color: #f0f3f5;
            margin-top: 30/@rem;
            color: #666;
        }
        .dt_content{
            color: #000;
            padding-top: 30/@rem;
            p{
                text-indent: 2em;
            }
        }
        .dt_pic{
            display: block;
            width: 100%;
            margin-top: 40/@rem;
            img{
                width: 100%;
            }
        }
        .dt_others{
            display: flex;
            flex-direction: column;
            a{
                color: #666;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                padding-top: 20/@rem;
            }
        }
        .dt_tag_box{
            display: flex;
            padding-top: 46/@rem;
            line-height: 64/@rem;
            justify-content:space-between;
            .dt_tag{
                span{
                    margin-right: 30/@rem;
                }
            }
            .dt_share{
                display: flex;
                .icon_share{
                    display: block;
                    width: 64/@rem;
                    height: 64/@rem;
                    background: url('../assets/images/share.png') no-repeat;
                    background-size: 64/@rem 64/@rem;
                    margin-left: 15/@rem;
                }
            }
        }
    }
    .dt_recommend{
        border-top: 26px solid #eee;
        padding: 20/@rem;
        h2{
            font-weight: normal;
            color: #999;
            margin-bottom: 10/@rem;
            margin-top: 10/@rem;
            font-size: 16px;
        }
        .dt_rec_list{
            li{
                border-bottom: 1px solid #dedede;
                padding: 20/@rem 0;
            }
        }
    }
</style>
