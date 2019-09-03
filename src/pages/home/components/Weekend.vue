<template>
    <div>
        <div class="recommend-title">周末推荐</div>
        <ul>
            <li class="item border-bottom" v-for="(item, index) in weekend" :key="index">
                <div class="item-img-wrapper">
                    <img :src="item.imgUrl" class="item-img" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Weekend",
        props: {
            weekend: Array
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/mixins.styl";
    .recommend-title
        line-height:.8rem
        background:#eee
        text-indent: .3rem
    .item-img-wrapper
        overflow:hidden
        height:0
        padding-bottom:36.9%
    .item-img
        width:100%
    .item-info
        flex:1
        padding:.1rem
        min-width:0
        .item-title
            line-height:.54rem
            font-size: .32rem
            ellipsis()
        .item-desc
            line-height: .4rem
            color:#ccc
            ellipsis()
</style>