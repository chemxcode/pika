<template>
<div>
    <div class="title">热热热热热</div>
    <ul>
        <li class="item" 
        v-for="item of recommendList" :key="item.id">
            <div class="item-img-wrapper">
                <img :src="item.imgUrl">
            </div>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}} </p>
                <button class="item-button">查看详情</button>
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
                desc: '描述'

            }, {
                id: '0002',
                imgUrl: 'https://i.loli.net/2019/03/17/5c8e4a2686697.png',
                title: '标题',
                desc: '描述'

            }, {
                id: '0003',
                imgUrl: 'https://i.loli.net/2019/03/17/5c8e4a2686697.png',
                title: '标题',
                desc: '描述'

            }]
        }
    }
    
}
</script>

<style lang="stylus" scoped>
.title
    line-height .8rem
    font-size .28rem
    background-color #eee
    text-indent .2rem
    margin-top .2rem
.item
    display flex
    overflow hidden
    height 1.9rem
    margin-bottom 4px
    // background-color #f40
    .item-img
        width 1.7rem
        height 1.7rem
        padding .1rem
    .item-info
        flex 1
        min-width 0
        // padding .1rem
        .item-title
            // line-height .54rem
            font-size 12px
            // 单行文本截断
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
        .item-desc 
            font-size 12px
            color #ccc
            // 单行文本截断
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
            
        .item-button
            background-color #ff9300
            padding 0 .2rem
            color #000




</style>
