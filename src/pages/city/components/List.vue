<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="buttom">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item in hotCities" :key="item.id">
                        <div class="buttom">{{ item.name }}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item,index) in cities" :key="index" :ref="index">  <!-- 如果通过v-for 遍历想加不同的ref时记得加 :号，即 :ref =某变量 ; -->
                <div class="title border-topbottom">{{ index }}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="innerItem in item" :key="innerItem.id">{{ innerItem.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    export default {
        name: "List",
        props: {
            cities: Object,
            hotCities: Array,
            letter: String
        },
        mounted() {
            this.scroll = new Bscroll(this.$refs.wrapper) // Bscroll 的配置初始化
        },
        watch: { // 监听器 当监听的数据发生变化，进行调用
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