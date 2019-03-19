<template>
<div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
        <!-- slides -->
        <swiper-slide v-for="item of list" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</div>

</template>
<script>
export default {
    name: 'HomeSwiper',
    props: {
        list: Array
    },
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            }


            // swiperList: [{
            //     id: '0001',
            //     imgUrl: 'https://i.loli.net/2019/03/17/5c8e1b4ec946f.jpg'
            // }, {
            //     id: '002',
            //     imgUrl: 'https://i.loli.net/2019/03/17/5c8e1bfa99039.jpg'
            // }
            // ]

        }
    },
    computed: {
        showSwiper () {
            return this.list.length
        }

    }
}
</script>
<style lang="stylus" scoped>
// >>> 穿透 
.wrapper >>> .swiper-pagination-bullet-active
    background-color #fff !important
.wrapper
    width 100%
    height 120px
    // overflow hidden
    // padding-bottom 20%
    background-color #eee
    
    .swiper-img
        width 100%
        height 120px

</style>


