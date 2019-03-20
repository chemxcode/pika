<template>
<div>
    <div class="title">皮卡建议</div>
    <ul>
        <li class="item" 
        v-for="item of recommendList" :key="item.id">
            <div class="item-img-wrapper">
                <img :src="item.imgUrl">
            </div>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}} </p>
                <!-- <button class="item-button">查看详情</button> -->
            </div>     
        </li>
    </ul>

</div>

    
</template>
<script>
export default {
    name: 'HomeRecommend',
    data () {
        return{
            recommendList:[{
                id: '0001',
                imgUrl: 'https://i.loli.net/2019/03/17/5c8e4a2686697.png',
                title: '标题',
                desc: '描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡'

            }, {
                id: '0002',
                imgUrl: 'https://i.loli.net/2019/03/17/5c8e4a2686697.png',
                title: '标题',
                desc: '描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡'

            }, {
                id: '0003',
                imgUrl: 'https://i.loli.net/2019/03/17/5c8e4a2686697.png',
                title: '标题',
                desc: '描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡'

            }]
        }
    }
    
}
</script>

<style scoped>
.title {
    font-size: 14px;
    padding: 6px;
    /* border-bottom: 1px solid #000; */
}
.item {
    height: 80px;
    width: 98%;
    margin: 0 auto;
    background-color: rgb(247, 242, 241);
    position: relative;
}
.item-img-wrapper {
    position: absolute;
    margin-left: 5px;
    height: 70px;
    width: 70px;
    background-color: blue;
    margin-top: 5px;
    
}
.item-img-wrapper img {
    width: 100%;
    height: 100%;
}
.item-info {
    position: relative;
    margin-left: 80px;
    margin-top: 4px;
    font-size: 12px;
}
.item-info .item-title {
    color: aqua;

}
.item-info .item-desc {
    color: #ccc;
    padding: 4px;
}
.item-button {
    position: absolute;
    right: 0;
    background-color: blue;
    color: #fff;
    padding: 2px;
}
</style>
