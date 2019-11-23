<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <!-- router-link 会被解析为一个 a 标签  这里我们将 li 标签直接换成 router-link 然后 使用 tag 属性 解析为 li -->
            <router-link tag="li" :to="'/detail/' + item.id"
                 class="item border-bottom" v-for="(item, index) in recommend" :key="index">
                    <img :src="item.imgUrl" class="item-img" alt="">
                    <div class="item-info">
                        <p class="item-title">{{ item.title }}</p>
                        <p class="item-desc">{{ item.desc }}</p>
                        <button class="item-button">查看详情</button>
                    </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Recommend",
        props: {
            recommend: Array
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/mixins.styl";
    .recommend-title
        margin-top: .2rem
        line-height:.8rem
        background:#eee
        text-indent: .3rem
    .item
        display:flex
        height:1.9rem
        /*background:pink*/
        overflow:hidden
        .item-img
            width:2.4rem
            height:1.7rem
            padding: .1rem
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
            .item-button
                background:#ff9300
                padding:0 .3rem
                border-radius:.09rem
                margin-top:.2rem
                color: #fff
                line-height:.44rem

</style>