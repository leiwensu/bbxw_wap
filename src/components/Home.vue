<template>
    <div>
         <hotVue></hotVue>
        <ItemNoPicVue></ItemNoPicVue>
        <ItemOnePicVue></ItemOnePicVue>
        <ItemThreePicVue></ItemThreePicVue>
    </div>
</template>
<script>
import hotVue from './Hot.vue'
import ItemNoPicVue from './ItemNoPic.vue'
import ItemOnePicVue from './ItemOnePic.vue'
import ItemThreePicVue from './ItemThreePic.vue'
    export default{
        components:{
            hotVue,
            ItemNoPicVue,
            ItemOnePicVue,
            ItemThreePicVue
          }
    }
</script>