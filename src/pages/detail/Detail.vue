<template>
<div>
    
    <detail-banner
    :signtName="signtName"
    :bannerImg="bannerImg"
    :bannerImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    
    <div class="content">
        <detail-list :list="list"></detail-list>
    </div>

</div>

</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'
export default {
    name: 'Detail',
    /* 组件name作用：
    1.递归组件
    2.no keep-alive
    3.便于查找*/
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data () {
        return {
            signtName: '',
            bannerImg: '',
            gallaryImgs: [],
            list: []
            // list: [{
            //     title: '成人票',
            //     children: [{
            //         title: "成人三联票",
            //         children: [{
            //             title: "再递归"
            //         }]
            //     }]
            // }, {
            //     title: '学生票'
            // }, {
            //     title: '儿童票'
            // }, {
            //     title: '特惠票'
            // }]
        }
    },
    methods: {
        getDetailInfo () {
            // axios.get('/api/detail.json?id=' + this.$route.params.id)
            axios.get('./api/detail.json', {
                params: {
                    id: this.$route.params.id
                }
            }).then(this.handleGetDataSucc)

        },
        handleGetDataSucc (res) {
            res = res.data
            if(res.ret && res.data) {
                const data = res.data
                console.log(data)
                this.signtName = data.signtName
                this.bannerImg = data.bannerImg
                this.gallaryImgs = data.gallaryImgs
                console.log(this.gallaryImgs)
                this.list = data.categoryList
            }

        }
    },
    mounted () {
        this.getDetailInfo() 

    }
}
</script>

<style scoped>
.content {
    height: 1200px;
}

</style>


