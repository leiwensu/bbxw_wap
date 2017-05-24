<template>
    <div class="footer">
        <div class="ft_links">
            <div class="ft_links_title">友情链接</div>
            <ul class="ft_list">
                <li class="ft_item">
                    <a href="javascript:;">DR钻戒</a>
                </li>
                <li class="ft_item">
                    <a href="javascript:;">手表网</a>
                </li>
                <li class="ft_item">
                    <a href="javascript:;">缅甸翡翠</a>
                </li>
                <li class="ft_item">
                    <a href="javascript:;">加盟创业</a>
                </li>
                <li class="ft_item">
                    <a href="javascript:;">结婚礼物</a>
                </li>
            </ul>
            <div class="ft_more"><a href="javascript:;">点此展开</a></div>
        </div>
        <div class="ft_about">
            <div class="ft_about_list">
               <a href="javascript:;" class="ft_about_item">最近更新</a>
               <a href="javascript:;" class="ft_about_item">关于我们</a>
               <a href="javascript:;" class="ft_about_item">广告服务</a>
               <a href="javascript:;" class="ft_about_item">友情链接</a>
               <a href="javascript:;" class="ft_about_item">网站地图</a>
            </div>
            <p class="ft_copyright">Copyrights ©2011-2017 www.bbxw.com</p>
        </div>
    </div>
</template>
<style lang="less" scoped>
    @rem:100rem;
    @base-color:#fa9144;
    .footer{
        background-color: #eee;
        padding: 40/@rem 0;
        font-size: 12px;
        color: #b3b3b3;
        a{
            color: #b3b3b3;
            font-size: 12px;
        }
        .ft_links{
            border-bottom: 1px solid #dedede;
            padding: 0 20/@rem;
        }
        .ft_list{
            overflow: hidden;
            padding-top: 20/@rem;
            .ft_item{
                float: left;
                border-right: 1px solid #b3b3b3;
                padding: 0 20/@rem;
            }
        }
        .ft_more{
            text-align: center;
            padding: 30/@rem 0 40/@rem;
            text-decoration: underline;
        }
        .ft_about{
            padding: 40/@rem 0 0;
            .ft_about_list{
                text-align: center;
                .ft_about_item{
                    padding-right: 32/@rem;
                }
            }
        }
        .ft_copyright{
            text-align: center;
            padding-top: 30/@rem;
        }

    }
    
</style>