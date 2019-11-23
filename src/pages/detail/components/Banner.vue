<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="https://img1.qunarzz.com/vs_ceph_vs_tts/beab3bf2-2869-4e48-98ce-130b2e027994.jpg_r_640x420x90_0f2072ba.jpg" />
            <div class="banner-info">
                <div class="banner-title">西安出发-跟团游 </div>
                <div class="banner-number"><span class="iconfont banner-icon">&#xe632;</span>39</div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </div>
</template>

<script>
    import CommonGallary from 'common/gallary/Gallary'
    export default {
        name: "DetailBanner",
        data() {
            return {
                imgs: ['https://img1.qunarzz.com/vs_ceph_vs_tts/3f346f87-5cfe-4196-9028-215291ea103f.png_r_640x420x90_f99cc75f.png', 'https://img1.qunarzz.com/vs_ceph_vs_tts/2b9d9bb7-141b-466d-a926-a0ee7071a4bf.jpg_r_640x420x90_ca99b9e0.jpg', 'https://img1.qunarzz.com/p/tts5/1811/f8/c456ec1b2a5b8602.jpg_r_640x420x90_eec2899f.jpg'],
                showGallary: false
            }
        },
        components: {
            CommonGallary
        },
        methods: {
            handleBannerClick() {
                this.showGallary = true
            },
            handleGallaryClose() {
                this.showGallary = false
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .banner
        overflow: hidden
        height: 0
        padding-bottom: 55%
        position:relative
        .banner-img
            width:100%
        .banner-info
            display:flex
            position:absolute
            left:0
            right:0
            bottom:0
            line-height:.6rem
            color:#fff
            background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
            .banner-title
                flex:1
                font-size:.32rem
                padding: 0 .2rem
            .banner-number
                padding:0 .4rem
                margin-top:.2rem
                line-height:.32rem
                height:.32rem
                border-radius:.2rem
                background: rgba(0,0,0,.8)
                font-size:.24rem
                .banner-icon
                    font-size:.24rem
</style>