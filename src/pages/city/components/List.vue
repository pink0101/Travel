<template>
    <div class="list" ref="wrapper">
        <div>
            <!-- 当前城市 -->
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="buttom">{{ this.city }}</div> <!--  vuex传递过来的数据 -->
                    </div>
                </div>
            </div>
            <!-- 热门城市 -->
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item in hotCities" :key="item.id" @touchstart="handleCityClick(item.name)">
                        <div class="buttom">{{ item.name }}</div>
                    </div>
                </div>
            </div>
            <!-- 所有的城市列表 -->
            <div class="area" v-for="(item,index) in cities" :key="index" :ref="index">  <!-- 如果通过v-for 遍历想加不同的ref时记得加 :号，即 :ref =某变量 ; -->
                <div class="title border-topbottom">{{ index }}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem in item" :key="innerItem.id" @touchstart="handleCityClick(innerItem.name)">{{ innerItem.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // 引入 Bscroll
    import Bscroll from 'better-scroll'
    import { mapState, mapMutations } from 'vuex'
    export default {
        name: "CityList",
        props: {
            cities: Object,
            hotCities: Array,
            letter: String
        },
        computed: {
            ...mapState(['city']) // 这里使用vuex 提供的mapState api vuex的数据映射到city上
        },
        methods: {
            handleCityClick (city) { // 当用户点击搜索出来的城市时，当前城市的数据就被修改了
                this.changeCity(city)
                this.$router.push('/') // vue-router 提供的编程式导航级  跳转首页
            },
            ...mapMutations(['changeCity']) // 高级写法
        },
        mounted() { // mounted() 生命周期函数，在页面DOM挂载完毕之后执行
            // 创建一个Bscroll 的实例
            this.scroll = new Bscroll(this.$refs.wrapper) // Bscroll 的配置  this.$refs.wrapper 获取到 list 这个容器
        },
        watch: {
            letter () {
                if (this.letter) {
                    const element = this.$refs[this.letter][0]
                    this.scroll.scrollToElement(element) // Bscroll 提供了让点右侧某个元素，自动跳的方法
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    /* 字符 & 指向父选择器 */
    .border-topbottom
        &:before
            border-color:#ccc
        &:after
            border-color:#ccc
    .border-bottom
    &:before
            border-color:#ccc
    .list
        overflow:hidden
        position:absolute
        top:1.58rem
        left:0
        right:0
        bottom:0
        .title
            line-height:.54rem
            background:#eee
            padding-left:.2rem
            color:#666
            font-size:.26rem
        .button-list
            padding:.1rem .6rem .1rem .1rem
            overflow:hidden
            .button-wrapper
                width:33.33%
                float:left
                .buttom
                    margin:.1rem
                    text-align:center
                    border:.02rem solid #ccc
                    padding:.1rem 0
                    border-radius:.06rem
        .item-list
            .item
                line-height:.76rem
                color:#666
                padding-left:.2rem

</style>