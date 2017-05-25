<template>
    <div class="item item_threepic">
        <h2 class="title"><a href="javascript:;"><i></i><p>炒房大杀器</p></a></h2>
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
</template>
<style lang="less" scoped>
    @rem:100rem;
    @base-color:#fa9144;
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
</style>