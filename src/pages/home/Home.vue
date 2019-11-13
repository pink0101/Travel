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
        methods: { // vue中的方法定义在 methods中
            getHomeInfo() {
                // axios 返回结果是一个promise对象 所以这里使用 .then 接收
                axios.get('/api/index.json') // 这里的接口采用了 接口转发机制  配置见 config/index.js proxyTable 对象
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
        mounted() { // 生命周期函数 vue页面挂载之后 自动执行该函数
            this.getHomeInfo()
        }
    }
</script>

<style>

</style>