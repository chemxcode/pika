<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            <input type="text" placeholder="这是一个无用的搜索框">   
        </div>
        <!-- <input class="header-input" type="text" placeholder="这是一个假的搜索框">
        <span class="iconfont">&#xe632;</span> -->
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
    /* text-align: center; */
    background-color: #fde570;
    border-bottom: 4px solid red;
}
.header-left {
    width: 40px;
    line-height: 60px;
    text-align: center;
}
.header-input {
    flex: 1;
    /* height: 30px;
    background-color: rgb(245, 233, 233); */
    margin-top: 10px;
    margin-bottom: 10px;
    /* line-height: 30px; */
    text-align: left;
    /* padding-left: 12px; */
    position: relative;
}
.header-input input {
    /* padding-top: 4px;
    padding-bottom: 4px; */
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
}
.header-input .iconfont {
    display: inline;
    position: absolute;
    left: 4px;
    line-height: 42px;
   
}
.header-right {
    width: 80px;
    line-height: 60px;
    text-align: center;
}
.arrow-icon {
    font-size: 12px;
}


</style>


