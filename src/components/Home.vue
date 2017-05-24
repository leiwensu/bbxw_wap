<template>
    <div>
        <hotVue></hotVue>
        <ItemNoPicVue></ItemNoPicVue>
        <ItemOnePicVue></ItemOnePicVue>
        <ItemThreePicVue></ItemThreePicVue>
        <div class="more_btn"><a href="javascript:;">点击加载更多</a></div>
        <FooterVue></FooterVue>
    </div>
</template>
<style lang="less" scoped>
    @rem:100rem;
    @base-color:#fa9144;
    .more_btn{
        padding: 40/@rem 20/@rem 100/@rem;
        a{
            display: block;
            width: 100%;
            background-color: #e9eaf2;
            line-height: 70/@rem;
            text-align: center;
            color: #333;
        }
    }
</style>
<script>
import hotVue from './Hot.vue'
import ItemNoPicVue from './ItemNoPic.vue'
import ItemOnePicVue from './ItemOnePic.vue'
import ItemThreePicVue from './ItemThreePic.vue'
import FooterVue from './Footer.vue'
    export default{
        components:{
            hotVue,
            ItemNoPicVue,
            ItemOnePicVue,
            ItemThreePicVue,
            FooterVue
          }
    }
</script>