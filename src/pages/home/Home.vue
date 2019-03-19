<template>
    <div>
<<<<<<< HEAD
        <!-- 嗯，这个优化好啦 -->
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
=======
        <home-header :city="city"></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
>>>>>>> index-ajax
        <home-recommend></home-recommend>
        <home-weekend></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
// 局部组件

import axios from 'axios'
export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data () {
        return {
            city: '',
            swiperList: [],
            iconList: [],
            recommendList: []
        }
    },
    methods: {
        getHomeInfo () {
            axios.get('/mock/index.json')
            /* 先不配置代理 */
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            res = res.data
            // console.log(res.ret)
            if( res.ret && res.data ) {
                // console.log(1)
                const data = res.data
                this.city = data.city
                this.swiperList = data.swiperList
                this.iconList = data.iconList
                
                // console.log(this.city)
            }
            // console.log(res)

        }

    },
    mounted () {
        this.getHomeInfo()

    }
}
</script>

<style lang="stylus" scoped>


</style>




