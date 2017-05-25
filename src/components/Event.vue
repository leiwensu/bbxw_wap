<template>
    <div class="event">
        <div class="ev_title">最新</div>
        <ItemNoPicVue></ItemNoPicVue>
        <ItemNoNewsVue></ItemNoNewsVue>
        <ItemThreePicVue></ItemThreePicVue>
        <ItemThreePicVue></ItemThreePicVue>
        <div class="page">
            <div class="arrow prev">&lt;</div>
            <div class="current">第1页</div>
            <div class="arrow active next">&gt;</div>
        </div>
        <FooterVue></FooterVue>
    </div>
</template>

<script>
    import ItemNoNewsVue from './ItemNoNews.vue'
    import ItemNoPicVue from './ItemNoPic.vue'
    import ItemOnePicVue from './ItemOnePic.vue'
    import ItemThreePicVue from './ItemThreePic.vue'
    import FooterVue from './Footer.vue'
    export default{
        components:{
            ItemNoPicVue,
            ItemOnePicVue,
            ItemThreePicVue,
            ItemNoNewsVue,
            FooterVue
          }
    }
</script>