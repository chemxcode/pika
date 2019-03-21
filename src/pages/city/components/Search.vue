<template>
<div>
    <div class="search">
        <input v-model="keyword"
        class="search-input" type="text" placeholder="输入城市名或拼音">    
    </div>
    <div 
    class="search-content" 
    ref="search"
    v-show="keyword">
        <ul>
            <li class="search-item" v-for="item of list" 
            :key="item.name">{{item.name}}</li>
            <li v-show="hasNoData" class="search-item">无结果</li>
        </ul>
    </div>
</div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
    name: "CitySearch",
    props: {
        cities: Object

    },
    data () {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    watch: {
        /* 搜索功能 函数节流 */
        keyword () {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyword) {
                this.list = []
                return
            }
            this.timer = setTimeout(() => {
                const result = []
                for (let i in this.cities) {
                    this.cities[i].forEach((value) => {
                        if (value.spell.indexOf(this.keyword) > -1 ||
                        value.name.indexOf(this.keyword) > -1) {
                            result.push(value)
                        }
                    })
                    this.list = result
                    console.log(this.list)
                }
            }, 100)

        }
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.search)
    },
    computed : {
        hasNoData () {
            return !this.list.length
        }
    }
}
</script>
<style scoped>
.search {
    /* height: 40px; */
    /* border: 1px solid #000; */
    padding: 12px;
    background-color: rgb(84, 84, 139);
    /* position: relative; */
}
.search-input {
    box-sizing: border-box;
    /* position: absolute; */
    text-align: center;
    height: 25px;
    width: 100%;
    color: rgb(8, 8, 8);
    border-radius: 6px;
    
}
.search-content {
    position: absolute;
    overflow: hidden;
    background-color: rgb(221, 205, 199);
    z-index: 233;
    top: 89px;
    left: 0;
    right: 0;
    bottom: 0;
}
.search-item {
    line-height: 20px;
    padding-left: 12px;
    
}


</style>


