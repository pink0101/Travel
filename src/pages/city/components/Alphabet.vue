<template>
    <ul class="list">
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
    </ul>
</template>

<script>
    export default {
        name: "CityAlphabet"
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl";
    .list
        display:flex
        flex-direction:column /* 设置主轴为垂直方向 */
        justify-content:center/* 在主轴上居中 */
        position:absolute
        top:0
        right:0
        bottom:0
        width:.4rem
        .item
            line-height:.44rem
            text-align:center
            color:$bgColor
</style>