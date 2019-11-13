<template>
    <div>
        <div class="search">
            <input type="text" class="search-input" placeholder="输入城市名或拼音" v-model="keyword">
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" v-for="item in list" :key="item.id">{{ item.name }}</li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    export default {
        name: "CitySearch",
        props: {
            cities: Object
        },
        data() {
            return {
                keyword: '',
                list: [],
                timer: null
            }
        },
        computed: {
            hasNoData() { // 判断数据是否匹配到
                return !this.list.length
            }
        },
        watch: {// 搜索的监听
            keyword() { // 当keyword 的值发生改变时触发
                if (this.timer) {
                    clearInterval(this.timer)
                }
                if (!this.keyword) {
                    this.list = []
                    return
                }
                this.timer = setTimeout(() => {
                    const result = []
                    for (let i in this.cities) {
                        this.cities[i].forEach((value) => {
                            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                                result.push(value)
                            }
                        })
                    }
                    this.list = result
                }, 100)
            }
        },
        mounted() {
            this.scroll = new Bscroll(this.$refs.search)
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl";
    .search
        height:.72rem
        background:$bgColor
        padding:0 .1rem
        .search-input
            height:.62rem
            line-height:.62rem
            text-align:center
            width:100%
            border-radius:.3rem
            color:#666
            padding:0 .2rem
            box-sizing:border-box /*添加了内边距 盒子内减模式*/
    .search-content
        position:absolute
        top:1.58rem
        left:0
        right:0
        bottom:0
        background:#eee
        z-index:1
        overflow:hidden
        .search-item
            line-height:.62rem
            padding-left: .2rem
            color:#666
            background:#fff
</style>