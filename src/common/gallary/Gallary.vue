<template>
    <div class="container"
    @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="(item, index) in imgs" :key="index">
                <img class="gallary-img" 
                :src="item" />
            </swiper-slide>
            <!-- <swiper-slide>
                <img class="gallary-img" 
                src="http://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/d788d43f8794a4c25a29726704f41bd5ad6e3977.jpg" />
            </swiper-slide>
            <swiper-slide>
                <img class="gallary-img" 
                src="http://img2.imgtn.bdimg.com/it/u=2313427157,1892994939&fm=26&gp=0.jpg" />
            </swiper-slide> -->
            
            
            <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
    name: "CommonGallary",
    props: {
        imgs: {
            type: Array,
            default () {
                // return ['http://img2.imgtn.bdimg.com/it/u=2313427157,1892994939&fm=26&gp=0.jpg',
                // 'http://img4.imgtn.bdimg.com/it/u=3107979165,3503926577&fm=26&gp=0.jpg']
                return []
            }
        }

    },
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                /* 00 */
                observeParents: true,
                observer: true

                /* 显示数字 */

            }
        }
    },
    methods: {
        handleGallaryClick () {
            this.$emit('close')
        }
    }
}
</script>
<style scoped>
.container {
    z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;

}
.wrapper {
    background-color: #f40;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    overflow: hidden;

}
.gallary-img {
    width: 100%;
    height: 100%;
}

</style>


