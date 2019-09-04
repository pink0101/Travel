<template>
    <ul class="list">
        <li class="item" v-for="(item,index) in cities" :key="index">{{ index }}</li>
    </ul>
</template>

<script>
    export default {
        name: "CityAlphabet",
        props: {
            cities: Object
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl";
    .list
        display:flex
        flex-direction:column /* 设置主轴为垂直方向 */
        justify-content:center/* 在主轴上居中 */
        position:absolute
        top:1.58rem
        right:0
        bottom:0
        width:.4rem
        .item
            line-height:.44rem
            text-align:center
            color:$bgColor
</style>