<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont back-icon">&#xe624;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题</div>
        <router-link to="/city">
        <div class="header-right">{{ this.city }} <!-- this.$store.state.city  这里的数据是 vuex 的 -->
        <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
        </router-link>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "Header",
        computed: {
            ...mapState(['city']) // 这里使用vuex 提供的mapState api vuex的数据映射到city上
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
            min-width: 1.04rem
            padding: 0.1rem
            float: right
            text-align: center
            color:#fff
            .arrow-icon
                font-size: .24rem
</style>