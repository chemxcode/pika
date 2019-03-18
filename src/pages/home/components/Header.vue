<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入网站穿梭主题
        </div>
        <div class="header-right">类别
            <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
    </div>
</template>
<script>

export default {
    name: 'HomeHeader'
}
</script>


<style scoped>
/* 我想，我先不要用stylus */

.header {
    height: 40px;
    display: flex;
    font-size: 12px;
    background-color: #00bcd4;
    color: #fff;
    
}
.header .header-left {
    width: 30px;
    float: left;
    line-height: 40px;
    text-align: center;

}
.header .header-input {
    flex: 1;
    height: 20px;
    margin-top: 6px;
    line-height: 20px;
    background-color: #ccc;
    padding: 4px;

}

.header .header-right {
    width: 60px;
    line-height: 40px;
    float: right;
    text-align: center;
}
.header .header-right .arrow-icon {
    font-size: 12px;
}
</style>


