<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入皮卡的小心情
        </div>
        <router-link to="/city">
        <div class="header-right">
            <!-- {{this.city}}  -->
            {{this.$store.state.city}}
            <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
        </router-link>
    </div>
    
</template>
<script>

export default {
    name: 'HomeHeader',
    props: {
        city: String
    }
}
</script>

<style scoped>
.header {
    display: flex;
    height: 60px;
    font-size: 12px;
    text-align: center;
    background-color: #fde570;
}
.header-left {
    width: 40px;
    line-height: 60px;
}
.header-input {
    flex: 1;
    height: 40px;
    background-color: rgb(245, 233, 233);
    margin-top: 10px;
    line-height: 40px;
    text-align: left;
    padding-left: 12px;
}
.header-right {
    width: 60px;
    line-height: 60px;
}
.arrow-icon {
    font-size: 12px;
}


</style>


