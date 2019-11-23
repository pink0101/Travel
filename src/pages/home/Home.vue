<template>
    <div>
        <home-header></home-header>
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
    import { mapState } from 'vuex'

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
                lastCity: '',
                swiper: [],
                icons: [],
                recommend: [],
                weekend: []
            }
        },
        computed: {
            ...mapState(['city'])
        },
        methods: { // vue中的方法定义在 methods中
            getHomeInfo() {
                // axios 返回结果是一个promise对象 所以这里使用 .then 接收
                axios.get('/api/index.json?city=' + this.city) // 这里的接口采用了 接口转发机制  配置见 config/index.js proxyTable 对象
                    .then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc(res) {
                res = res.data
                if (res.ret && res.data) {
                    this.swiper = res.data.swiperList
                    this.icons = res.data.iconList
                    this.recommend = res.data.recommendList
                    this.weekend = res.data.weekendList
                    console.log(res.data);
                }
            }
        },
        mounted() { // 生命周期函数 vue页面挂载之后 自动执行该函数
            this.lastCity = this.city // 将获取到的数据城市数据进行一个保存
            this.getHomeInfo()
        },
        activated () { // 当vue使用了keep-alive 后 加载过的路由会放到内存中，当我们重新选择城市时，需要重新获取数据 此时使用 activated 生命周期钩子
            if (this.lastCity !== this.city) {
                this.lastCity = this.city
                this.getHomeInfo() // 发送 axios 请求
            }
        }
    }
</script>

<style>
</style>