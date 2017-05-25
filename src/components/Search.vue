<template>
    <div class="search">
        <a class="search_icon_back" onclick="window.history.go(-1)"><i></i></a>
        <input class="search_input" type="search">
        <a class="search_cancel_btn" href="javascript:;" onclick="window.history.go(-1)">取消</a>
    </div>
</template>
<style lang="less" scoped>
    @rem:100rem;
    @base-color:#fa9144;
    .search{
        display: flex;
        background-color: @base-color;
        height: 80/@rem;
        .search_input{
            flex:1;
            height: 52/@rem;
            margin-top: 16/@rem;
            border: 0;
            border-radius:4px;
            padding-left: 15/@rem;
            background: url('../assets/images/nav_search_2.png') no-repeat 410/@rem 14/@rem;
            background-size: 28/@rem 28/@rem;
            background-color: #fff;
        }
        .search_cancel_btn{
            padding: 0 30/@rem;
            line-height: 80/@rem;
            color: #fff;
        }
    }
    .search_icon_back{
        padding-left: 30/@rem;
        padding-right: 30/@rem;
        padding-top: 24/@rem;
        i{
            display: block;
            width: 16/@rem;
            height: 30/@rem;
            background:url('../assets/images/nav_return.png') no-repeat;
            background-size: 16/@rem 30/@rem;
        }

    }
</style>