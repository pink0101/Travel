<template>
    <ul class="list">
        <li class="item" v-for="item in letters" :key="item"
            @click="handleLetterClick"
            @touchstart.prevent="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            :ref="item">{{ item }}</li>
    </ul>
</template>

<script>
    export default {
        name: "CityAlphabet",
        props: {
            cities: Object
        },
        data() {
            return {
                touchStatus: false, // 触摸节流阀
                startY: 0, // 初始化A字母距离顶部的值
                timer: null // 节流阀
            }
        },
        computed: {
          letters() {
              const letters = []
              for (let i in this.cities) {
                  letters.push(i)
              }
              return letters
          }
        },
        updated() { // 只有事先设置好的data变量如下arrData改变并且要在页面重新渲染{{ arrData }}完成之后,才会进updated方法
            this.startY = this.$refs['A'][0].offsetTop // A 位置距离顶部的高度
        },
        methods: {
            handleLetterClick(e) {
                this.$emit('change', e.target.innerHTML) /* 向外触发一个change 事件，并传值 */
            },
            handleTouchStart() {
                this.touchStatus = true
            },
            handleTouchMove(e) {
                if (this.touchStatus) {
                    if (this.timer) {
                        clearInterval(this.timer)
                    }
                    setTimeout(() => {
                        const touchY = e.touches[0].clientY - 79 // 手指距离顶部高度
                        const index = Math.floor((touchY - this.startY) / 21.6)
                        if (index >= 0 && index < this.letters.length) {
                            this.$emit('change', this.letters[index]) /* 向外触发一个change 事件，并传值 */
                        }
                    }, 16)
                }
            },
            handleTouchEnd() {
                this.touchStatus = false
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl";
    .list
        display:flex
        flex-direction:column /* 设置主轴为垂直方向 */
        justify-content:center/* 在主轴上居中 */
        position:absolute
        top:1.58rem
        right:0
        bottom:0
        width:.4rem
        .item
            line-height:.44rem
            text-align:center
            color:$bgColor
</style>