<template>
    <div>
        <div class="recommend-title">周末推荐</div>
        <ul>
            <li class="item border-bottom" v-for="(item, index) in recommendList" :key="index">
                <div class="item-img-wrapper">
                    <img :src="item.imgUrl" class="item-img" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Weekend",
        data() {
            return {
                recommendList: [
                    {
                        id: '0001',
                        imgUrl: 'https://img1.qunarzz.com/p/tts0/1810/be/7d60731db9f5dd02.jpg_r_640x420x90_c2c3357b.jpg',
                        title: '北京自由行',
                        desc: '自由行 【中秋国庆】北京跟拍儿童摄影旅拍亲子情侣闺蜜个人写真摄影'
                    },
                    {
                        id: '0002',
                        imgUrl: 'https://img1.qunarzz.com/vs_ceph_vs_tts/c07950a2-9754-4ecd-8385-14fc4fabe9d7.jpg_r_640x420x90_242b9660.jpg',
                        title: '北京自由行',
                        desc: '自由行 【中秋国庆】北京跟拍儿童摄影旅拍亲子情侣闺蜜个人写真摄影'
                    },
                    {
                        id: '0003',
                        imgUrl: 'https://img1.qunarzz.com/vs_ceph_vs_tts/f5c0abe9-9315-4d0a-a67e-942db7702c64.jpg_r_640x420x90_057de7ad.jpg',
                        title: '北京自由行',
                        desc: '自由行 【中秋国庆】北京跟拍儿童摄影旅拍亲子情侣闺蜜个人写真摄影'
                    }
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/mixins.styl";
    .recommend-title
        margin-top: .2rem
        line-height:.8rem
        background:#eee
        text-indent: .3rem
    .item-img-wrapper
        overflow:hidden
        height:0
        padding-bottom:33.9%
    .item-img
        width:100%
    .item-info
        flex:1
        padding:.1rem
        min-width:0
        .item-title
            line-height:.54rem
            font-size: .32rem
            ellipsis()
        .item-desc
            line-height: .4rem
            color:#ccc
            ellipsis()
</style>