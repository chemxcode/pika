<template>
<div>
    <div class="header">
        
        <router-link  
        tag="div" to="/" 
        class="header-abs"
        v-show="showAbs">
            <div class="iconfont back-icon">&#xe624;</div>
           
        </router-link>

        <div class="header-fixed"
        v-show="!showAbs"
        :style="opacityStyle">
            <router-link to="/">
                <div class="iconfont back-icon">&#xe624;

                </div>
                经典详情
            </router-link>
            
        </div>
        
    </div>
   
</div>
</template>

<script>

export default {
    name: 'DetailHeader',
    data () {
        return {
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
        }

    },
    methods: {
        /* 渐隐渐现效果 */
        handleScroll () {
            const top = document.documentElement.scrollTop
            if ( top > 60 ) {
                let opacity = top / 140
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = {
                    opacity
                }
                
                this.showAbs = false
            } else {
                this.showAbs = true
            }
            // console.log(document.documentElement.scrollTop)

        }
    },
    activated () {
        window.addEventListener('scroll', this.handleScroll)
    }
    
}
</script>

<style scoped>
.header-abs {
    position: absolute;
    left: 12px;
    top: 12px;
    width: 30px;
    height: 30px;
    background-color: rgba(12, 12, 12, 0.6);
    border-radius: 50%;
    line-height: 30px;
    text-align: center;

}
.back-icon {
    color: aliceblue;
}
.header-fixed {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgb(4, 8, 240);
    height: 40px;
    text-align: center;
    /* border-bottom: 1px solid #000; */
    font-size: 12px;
    line-height: 40px;
    width: 100%;
    
}
.header-fixed .back-icon {
    position: absolute;
    top: 0;
    left: 12px;
}



</style>


