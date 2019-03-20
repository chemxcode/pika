<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">
                            beijing
                        </div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper"
                    v-for="item of hot" 
                    :key="item.id">
                        <div class="button">
                            {{item.name}}
                        </div>
                    </div>
                    <!-- <div class="button-wrapper">
                        <div class="button">
                            beijing
                        </div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">
                            beijing
                        </div>
                    </div>
                    <div class="button-wrapper">
                        <div class="button">
                            beijing
                        </div>
                    </div> -->
                </div>
            </div>
            <!-- <div class="area">
                <div class="title">热门城市</div>
            </div> -->
            <div class="area" 
            v-for="(item, key) of cities"
            :key="key"
            :ref="key">
                <div class="title">{{key}}</div>
                <div class="item-list">
                    <ul>
                        <li class="item"
                        v-for="innerItem of item"
                        :key="innerItem.id">{{innerItem.name}}</li>
                        <!-- <li class="item">afajdg</li>
                        <li class="item">fadfag</li>
                        <li class="item">fafad</li>
                        <li class="item">fad</li>
                        <li class="item">ada</li>
                        <li class="item">ana</li>
                        <li class="item">afajdg</li>
                        <li class="item">fadfag</li>
                        <li class="item">fafad</li>
                        <li class="item">fad</li>
                        <li class="item">ada</li>
                        <li class="item">ana</li>
                        <li class="item">afajdg</li>
                        <li class="item">fadfag</li>
                        <li class="item">fafad</li>
                        <li class="item">fad</li>
                        <li class="item">ada</li>
                        <li class="item">ana</li>
                        <li class="item">afajdg</li>
                        <li class="item">fadfag</li>
                        <li class="item">fafad</li>
                        <li class="item">fad</li>
                        <li class="item">ada</li>
                        <li class="item">ana</li>
                        <li class="item">afajdg</li>
                        <li class="item">fadfag</li>
                        <li class="item">fafad</li>
                        <li class="item">fad</li>
                        <li class="item">ada</li> -->
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
    name: "CityList",
    props: {
        hot: Array,
        cities: Object,
        letter: String
        
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    watch: {
        letter () {
            if (this.letter) {
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
                

            }
            console.log("我来watch一下" + this.letter)

        }
    }
}
</script>
<style scoped>
.list {
    position: absolute;
    top: 90px;
    right: 0;
    bottom: 0;
    left: 0;
    /* background-color: blue; */
    overflow: hidden;
}

.title {
    line-height: 20px;
    background-color: #eee;
    padding-left: 4px;
    color: #666;
}
.button-list {
    padding: 12px 20px 12px 4px;
    overflow: hidden
}
.button-wrapper {
    float: left;
    width: 33.33%;
}
.button {
    padding: 4px;
    text-align: center;
    margin: 4px;
    border: 1px solid #000;

}
.item-list .item {
    line-height: 30px;
    color: 666;
    padding-left: 12px;
    border-bottom: 1px solid #000;
}



</style>


