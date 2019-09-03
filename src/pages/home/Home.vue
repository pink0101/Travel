<template>
    <div>
        <home-header :city="city"></home-header>
        <home-swiper :swiper="swiper"></home-swiper>
        <home-icons :icons="icons"></home-icons>
        <home-recommend :recommend="recommend"></home-recommend>
        <home-weekend :weekend="weekend"></home-weekend>
    </div>
</template>

<script>
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    import HomeIcons from './components/Icons'
    import HomeRecommend from './components/Recommend'
    import HomeWeekend from './components/Weekend'
    import axios from 'axios'

    export default {
        name: 'Home',
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekend
        },
        data() {
            return {
                city: '',
                swiper: [],
                icons: [],
                recommend: [],
                weekend: []
            }
        },
        methods: {
            getHomeInfo() {
                axios.get('/api/index.json')
                    .then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc(res) {
                res = res.data
                if (res.ret && res.data) {
                    this.city = res.data.city
                    this.swiper = res.data.swiperList
                    this.icons = res.data.iconList
                    this.recommend = res.data.recommendList
                    this.weekend = res.data.weekendList
                    console.log(res.data);
                }
            }
        },
        mounted() {
            this.getHomeInfo()
        }
    }
</script>

<style>

</style>