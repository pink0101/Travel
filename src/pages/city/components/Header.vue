<template>
    <div class="header">
        城市选择
        <router-link to="/">
        <span class="iconfont header-icon">&#xe624;</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "CityHeader"
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl";
    .header
        position:relative
        overflow:hidden
        height:$headerHeight
        line-height:$headerHeight
        text-align:center
        background:$bgColor
        color:#fff
        font-size:.32rem
        .header-icon
            position:absolute
            top:0
            left:.2rem
            display:block
            text-align:center
            font-size:.4rem
            color:#fff
</style>