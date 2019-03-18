<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
    </div>
</template>


<script>
import HomeHeader from './components/header/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
// 局部组件

export default {
    name: 'Home',

    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons
    } 
}
</script>

<style lang="stylus" scoped>


</style>



