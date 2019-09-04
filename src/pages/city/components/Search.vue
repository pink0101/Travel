<template>
    <div class="search">
        <input type="text" class="search-input" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
    export default {
        name: "CitySearch"
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl";
    .search
        height:.72rem
        background:$bgColor
        padding:0 .1rem
        .search-input
            height:.62rem
            line-height:.62rem
            text-align:center
            width:100%
            border-radius:.3rem
            color:#666
            padding:0 .2rem
            box-sizing:border-box /*添加了内边距 盒子内减模式*/
</style>