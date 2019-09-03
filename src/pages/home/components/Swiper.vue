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
                    pagination: '.swiper-pagination',
                    loop: true
                }
            }
        },
        computed: {
            showSwiper () {
                return this.swiper.length
            }
        }
    }
</script>

<style lang="stylus" scoped>
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