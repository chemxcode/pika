<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-friends></home-friends>
        <!-- <home-weekend></home-weekend> -->
        <home-footer></home-footer>
    </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeFriends from './components/Friends.vue'
import HomeWeekend from './components/Weekend.vue'
import HomeFooter from './components/Footer.vue'
// 局部组件

import axios from 'axios'
export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeFriends,
        HomeWeekend,
        HomeFooter
    },
    data () {
        return {
            // city: '',
            swiperList: [],
            iconList: [],
            recommendList: []
        }
    },
    methods: {
        getHomeInfo () {
            axios.get('/api/index.json')
            /* 配置代理 */
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            res = res.data
            // console.log(res.ret)
            if( res.ret && res.data ) {
                // console.log(1)
                const data = res.data
                // this.city = data.city
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

<style scoped>



</style>




