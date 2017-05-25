<template>
<div class="map">
    <div class="ev_title">网站地图</div>
    <div class="cate_title">- 全部分类 -</div>
    <CategoryVue></CategoryVue>
    <CategoryVue></CategoryVue>
    <div class="cate_title cate-title--nav">- 资讯导航 -</div>
    <div class="cate_nav_list">
        <a href="javascript:;">流行前线</a>
        <a href="javascript:;">信息资讯</a>
        <a href="javascript:;">财富故事一点通</a>
        <a href="javascript:;">公司资讯</a>
    </div>
    <CategoryVue></CategoryVue>
    <FooterVue></FooterVue>
</div>

</template>
<style lang="less" scoped>
    @rem:100rem;
    @base-color:#fa9144;
    .cate_title{
        text-align: center;
        padding: 0 0 30/@rem;
        color: @base-color;
    }
    .cate-title--nav{
        padding-bottom: 10/@rem;
    }
    .cate_nav_list{
        overflow: hidden;
        padding: 0 20/@rem 30/@rem;
        a{
            display: block;
            float: left;
            background-color: #f0f3f5;
            padding: 10/@rem 18/@rem;
            height: 56/@rem;
            line-height: 56/@rem;
            margin-right: 20/@rem;
            margin-top: 20/@rem;
            border-radius: 4px;
        }
    }
</style>
<script>
    import CategoryVue from './CategoryVue.vue'
    import FooterVue from './Footer.vue'
    export default{
        components:{
            CategoryVue,
            FooterVue
        }
    }
</script>