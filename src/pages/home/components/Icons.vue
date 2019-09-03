<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) in pages" :key="index">
            <div class="icon" v-for="item in page" :key="item.id">
            <div class="icon-img">
                <img class="icon-img-content" :src="item.imgUrl" alt="">
            </div>
            <p class="icon-desc">{{ item.desc }}</p>
            </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "Icons",
        props: {
          icons: Array
        },
        data(){
            return {
                swiperOption: {
                    autoplay: false
                }
            }
        },
        computed: {
            pages() {
                const pages = []
                this.icons.forEach((item, index) => {
                    let page = Math.floor(index / 8)
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/mixins.styl"
    @import "~styles/varibles.styl" /* 在使用import 进行导入文件的时候，前面需要加上 @   还有当我们给 styles 这里配置了默认的 路径后， styles 前面需要加 ~ 在 build目录下的webpack.base.conf.js */
    .icons >>> .swiper-container /*在上面标签中，我们使用了 scoped  来规定 css  只能用于 当前组件  在有的时候，我们又需要更改第三方组件的默认样式，这里我们就用到了  >>> 来进行穿透*/
        width:100%
        height:0
        padding-bottom:50%
        background:#ffffff
    .icon
        position:relative
        float:left
        width:25%
        height:0
        padding-bottom:25%
        /*background:pink*/
        .icon-img
            position:absolute
            top:0
            left:0
            right:0
            bottom:.44rem
            /*background:blue*/
            padding: .1rem
            box-sizing:border-box
            .icon-img-content
                height:100%
                display:block
                margin:0 auto
        .icon-desc
            position:absolute
            left:0
            right:0
            bottom:0
            height:.4rem
            text-align:center
            line-height:.4rem
            color:$darkTextColor
            ellipsis()

</style>