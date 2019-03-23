<template>
    <div class="banner">
        <img class="banner-img" 
        src="https://i.loli.net/2019/03/23/5c95c3459a02d.jpg">
        <div class="banner-info">
            <div class="banner-title">4a景区aaaaaaaaaaaaaaa</div>
            <div class="banner-number">
                <!-- <span class="iconfont back-icon">&#xe624;</span> -->
                33</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner'
}
</script>

<style scoped>
.banner {
    overflow: hidden;
    height: 0;
    position: relative;
    padding-bottom: 55%;
    color: rgb(250, 250, 250);  
    font-size: 12px;
    
}
.banner-img {
    width: 100%;

}
.banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 4px;
    line-height: 20px;
    /* color: #f40; */
    /* background-color: #fff; */
    color: #fff;
}
.banner-title {
    flex: 1;
    /* padding: 0 4px 0; */
    padding-left: 4px;
    line-height: 28px;

}
.banner-number {
    /* color: #000; */
    padding: 4px 16px;
    line-height: 20px;
    height: 20px;
    background-color: #f40;
    border-radius: 4px;
    opacity: .6;
    font-size: 12px;
    /* margin-right: 4px;
    margin-bottom: 4px; */


}

</style>


