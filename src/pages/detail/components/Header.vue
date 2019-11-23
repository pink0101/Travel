<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <span class="iconfont back-icon">&#xe624;</span>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            景点详情
            <router-link to="/">
                <span class="iconfont header-icon">&#xe624;</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailHeader",
        data() {
            return {
                showAbs: true,
                opacityStyle: {
                    opacity: 0
                }
            }
        },
        methods: {
            handleScroll() {
                const top = document.documentElement.scrollTop
                if (top > 60 ) {
                    let opacity = top / 140
                    opacity = opacity > 1 ? 1 : opacity
                    this.opacityStyle = { opacity }
                    this.showAbs = false
                } else {
                    this.showAbs = true
                }
            }
        },
        activated() { // 因为我们在App.vue 使用keep-alive 所以这里 activated 钩子 页面一展示，机会执行
            window.addEventListener('scroll', this.handleScroll) // 一旦scroll 事件被执行，handleScroll 方法会被执行
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl";
    .header-abs
        position:absolute
        left:.2rem
        top:.2rem
        width:.8rem
        height:.8rem
        border-radius:.4rem
        background:rgba(0,0,0,.8)
        color:#fff
        line-height:.8rem
        text-align:center
        font-size:.4rem
    .header-fixed
        position:fixed
        top:0
        left:0
        right:0
        height:$headerHeight
        line-height:$headerHeight
        text-align:center
        background:$bgColor
        color:#fff
        font-size:.32rem
        .header-icon
            position:absolute
            top:0
            left:.2rem
            display:block
            text-align:center
            font-size:.4rem
            color:#fff
</style>