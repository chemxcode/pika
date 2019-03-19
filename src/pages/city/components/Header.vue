<template>
    <div class="header">
        <router-link to="/">
            <div class="header-left">
                <div class="iconfont header-icon">&#xe624;</div>
            </div>
        </router-link>
        <div>城市列表</div>
    </div>
</template>
<script>
export default {
    name: "CityHeader"
}
</script>
<style scoped>
.header {
    position: relative;
    background-color: rgb(84, 84, 139);
    height: 40px;
    text-align: center;
    /* border-bottom: 1px solid #000; */
    font-size: 12px;
    line-height: 40px;
    
}
.header-left {
    position: absolute;
    width: 30px;
}
.header-icon {
    color: aliceblue;
}

</style>


