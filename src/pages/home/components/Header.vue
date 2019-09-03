<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont back-icon">&#xe624;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题</div>
        <router-link to="/city">
        <div class="header-right">{{ city }}
        <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Header",
        props: {
            city: String
        }
    }
</script>

<style lang="stylus" scoped >
    @import "~styles/varibles.styl";
    .header
        background: $bgColor
        color: #fff
        display: flex
        height: $headerHeight
        line-height: $headerHeight
        .header-left
            width: .64rem
            float: left
            margin-left: .12rem
           .back-icon
                display: block
                text-algin: center
                font-size: .4rem
        .header-input
            flex: 1
            background: #fff
            border-radius: .1rem
            margin-top: .12rem
            margin-bottom: .12rem
            margin-left: .2rem
            color: #ccc
            line-height: .62rem
            padding-left: .2rem
        .header-right
            width: 1.24rem
            float: right
            text-align: center
            color:#fff
            .arrow-icon
                font-size: .24rem
</style>