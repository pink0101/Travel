<template>
    <div>
        <div class="item" v-for="(item, index) in categoryList" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{ item.title }}
            </div>
            <div v-if="item.children" class="item-children"><!-- 这里判断一级标题里面是否还有数据  -->
                <detail-list :categoryList="item.children"></detail-list> <!-- 这里是递归组件 调用自己  -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailList",
        props: {
            categoryList: Array
        }
    }
</script>

<style scoped lang="stylus">
    .item-title
        line-height:.8rem
        font-size:.32rem
        padding:0 .2rem
        .item-title-icon
            display: inline-block
            position: relative
            width: .36rem
            height: .36rem
            top: .06rem
            left: .2rem
            background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
            margin-right: .1rem
            background-size: .4rem 3rem
    .item-children
        padding:0 .2rem

</style>