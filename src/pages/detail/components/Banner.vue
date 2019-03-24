<template>
<div>
    <div class="banner"
    @click="handleBannerClick">
        <img class="banner-img" 
        src="https://i.loli.net/2019/03/23/5c95c3459a02d.jpg">
        <div class="banner-info">
            <div class="banner-title">4a景区aaaaaaaaaaaaaaa</div>
            <div class="banner-number">
                <!-- <span class="iconfont back-icon">&#xe624;</span> -->
                33</div>
        </div>
    </div>
    <common-gallary 
    :imgs="imgs"
    v-show="showGallary"
    @close="handleGallaryClose">
    </common-gallary>
</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary.vue'
export default {
    name: 'Banner',
    data () {
        return {
            showGallary: false,
            imgs: ['http://img2.imgtn.bdimg.com/it/u=2313427157,1892994939&fm=26&gp=0.jpg',
            'http://img4.imgtn.bdimg.com/it/u=3107979165,3503926577&fm=26&gp=0.jpg']

        }
        
    },
    methods: {
        handleBannerClick () {
            this.showGallary = true
        },
        handleGallaryClose () {
            this.showGallary = false
        }
    },
    components: {
        CommonGallary
    }
}
</script>

<style scoped>
.banner {
    overflow: hidden;
    height: 0;
    position: relative;
    padding-bottom: 55%;
    color: rgb(250, 250, 250);  
    font-size: 12px;
    
}
.banner-img {
    width: 100%;

}
.banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 4px;
    line-height: 20px;
    /* color: #f40; */
    /* background-color: #fff; */
    color: #fff;
}
.banner-title {
    flex: 1;
    /* padding: 0 4px 0; */
    padding-left: 4px;
    line-height: 28px;

}
.banner-number {
    /* color: #000; */
    padding: 4px 16px;
    line-height: 20px;
    height: 20px;
    background-color: #f40;
    border-radius: 4px;
    opacity: .6;
    font-size: 12px;
    /* margin-right: 4px;
    margin-bottom: 4px; */


}

</style>


