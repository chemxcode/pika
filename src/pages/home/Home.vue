<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
    </div>
</template>


<script>
import HomeHeader from './components/header/Header.vue'
import HomeSwiper from './components/Swiper.vue'
// 局部组件

export default {
    name: 'Home',

    components: {
        HomeHeader,
        HomeSwiper
    } 
}
</script>

<style lang="stylus" scoped>


</style>



