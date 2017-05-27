<template>
    <div class="event">
        <div class="ev_title">最新</div>
        <ItemNoPicVue></ItemNoPicVue>
        <ItemNoNewsVue></ItemNoNewsVue>
        <ItemThreePicVue></ItemThreePicVue>
        <ItemThreePicVue></ItemThreePicVue>
        <div class="page">
            <div class="arrow prev"></div>
            <div class="current">第1页</div>
            <div class="arrow next active"></div>
        </div>
    </div>
</template>

<script>
    import ItemNoNewsVue from './ItemNoNews.vue'
    import ItemNoPicVue from './ItemNoPic.vue'
    import ItemOnePicVue from './ItemOnePic.vue'
    import ItemThreePicVue from './ItemThreePic.vue'
    export default{
        components:{
            ItemNoPicVue,
            ItemOnePicVue,
            ItemThreePicVue,
            ItemNoNewsVue
          }
    }
</script>