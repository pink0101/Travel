<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item in swiper" :key="item.id">
                <img  class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        props: {
            swiper: Array
        },
        data () {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination', // 配置轮播图的焦点
                    loop: true // 使用该轮播插件支持循环轮播
                }
            }
        },
        computed: { // 计算属性
            showSwiper () {
                return this.swiper.length
            }
        }
    }
</script>

<style lang="stylus" scoped>
    /* 这里样式我们使用了  scoped  作用  下面的样式只对本组件的样式生效   但是这里我们又需要  对 swiper 轮播的焦点颜色进行修改 所以使用  >>>  对样式进行穿透 */
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff !important
    .wrapper
        overflow:hidden
        width:100%
        height: 0
        padding-bottom:31%
        background:#eee
        .swiper-img
            width: 100%

</style>