<template>
    <div class="item item_onepic">
        <h2 class="title"><router-link to="/article"><i></i><p>炒房大杀器</p></router-link></h2>
        <div class="content">
            <div class="one_pic_con">
                <a href="javascript:;" class="pic">
                    <img src="../assets/images/210x140.png" height="140" width="210" alt="">
                </a>
                <div class="con">
                    <h3><router-link to="/details/1">一个大杀器来了</router-link></h3>
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