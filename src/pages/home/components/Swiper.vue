<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img  class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        data () {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true
                },
                swiperList: [
                    {
                        id: '001',
                        imgUrl: 'https://source.qunarzz.com/site/images/wns/20190827_dujia_homepage_750x192_2.jpg'
                    },
                    {
                        id: '002',
                        imgUrl: 'https://source.qunarzz.com/site/images/wns/20190826_qunar_dujia_750x192_3.jpg'
                    },
                    {
                        id: '003',
                        imgUrl: 'https://source.qunarzz.com/site/images/wns/20190801_qunar_dujia_750x192_6_V1.jpg'
                    },
                    {
                        id: '004',
                        imgUrl: 'https://source.qunarzz.com/site/images/wns/20190809_dujia_homepage_top_banner_5.jpg'
                    }
                ]
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
        padding-bottom:25%
        background:#eee
        .swiper-img
            width: 100%

</style>