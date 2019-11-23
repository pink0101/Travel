<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper  :options="swiperOption">
                <!-- slides -->
                <swiper-slide v-for="(item, index) in imgs" :key="index">
                    <img  class="gallary-img" :src="item" alt="">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Gallary",
        props: {
            imgs: {
                type: Array,
                default() { // 如果没有数据，默认使用default 返回的数据
                    return []
                }
            }
        },
        data () {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination', // 配置轮播图的焦点初始化
                    paginationType: 'fraction', // 配置轮播图焦点的样式  vue-awesome-swiper 轮播功能是基于 swiper3 开发 所以配置查swiper 文档即可 https://3.swiper.com.cn/api/pagination/2016/0126/299.html
                    observeParents: true, // 将observe应用于Swiper的父元素。当Swiper的父元素变化时
                    observer: true // 启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
                }
            }
        },
        methods: {
            handleGallaryClick() {
                this.$emit('close') // 向父组件 发出一个 close 事件
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow:inherit
    .container
        display:flex
        flex-direction:column /* 垂直显示 */
        justify-content:center /* 位于容器中心 */
        position:fixed
        left:0
        right:0
        top:0
        bottom:0
        background:#000
        z-index:99
        .wrapper
            width:100%
            height:0
            padding-bottom:100%
            .gallary-img
                width:100%
            .swiper-pagination
                color:#fff
                bottom:-1rem

</style>