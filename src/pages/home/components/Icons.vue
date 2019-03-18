<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" 
        v-for="item of page"
        :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <!-- <swiper-slide>
        <div class="icon">
          <div class="icon-img">
            <img class="icon-img-content" src="https://i.loli.net/2019/03/17/5c8e4a2686697.png">
          </div>
          <p class="icon-desc">废卡在吃</p>
        </div>
      </swiper-slide> -->
    </swiper>
    
    

  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'https://i.loli.net/2019/03/17/5c8e4a2686697.png',
        desc: '皮卡kakakakakakak'

      }, {
        id: '0002',
        imgUrl: 'https://i.loli.net/2019/03/17/5c8e4a2686697.png',
        desc: '皮卡'
      }, {
        id: '0003',
        imgUrl: 'https://i.loli.net/2019/03/17/5c8e4a2686697.png',
        desc: '皮卡'
      }, {
        id: '0004',
        imgUrl: 'https://i.loli.net/2019/03/17/5c8e4a2686697.png',
        desc: '皮卡'
        }, {
        id: '0005',
        imgUrl: 'https://i.loli.net/2019/03/17/5c8e4a2686697.png',
        desc: '皮卡'
      }, {
        id: '0006',
        imgUrl: 'https://i.loli.net/2019/03/17/5c8e4a2686697.png',
        desc: '皮卡'
      }, {
        id: '0007',
        imgUrl: 'https://i.loli.net/2019/03/17/5c8e4a2686697.png',
        desc: '皮卡'
        }, {
        id: '0008',
        imgUrl: 'https://i.loli.net/2019/03/17/5c8e4a2686697.png',
        desc: '皮卡'
      }, {
        id: '0009',
        imgUrl: 'https://i.loli.net/2019/03/17/5c8e4a2686697.png',
        desc: '皮卡'
      }, {
        id: '0010',
        imgUrl: 'https://i.loli.net/2019/03/17/5c8e4a2686697.png',
        desc: '皮卡'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
};
</script>

<style lang="stylus" scoped>
.icons >>> .swiper-container
  // overflow hidden
  height 0
  padding-bottom 50%
  border-bottom 1px solid #000
.icons 
  margin-top .1rem
  .icon
    position relative
    float left
    height 0
    width 25%
    padding-bottom 25%
    // background-color #333
    // overflow hidden
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom .44rem
      box-sizing border-box
      padding .1rem
      // background-color blue
      .icon-img-content
        display block
        margin 0 auto
        height 100%
    .icon-desc
      position absolute
      left 0
      right 0
      bottom 0
      line-height .44rem
      height .44rem
      color #333
      font-size 12px
      text-align center
      // 单行文本截断
      overflow hidden
      white-space nowrap
      text-overflow ellipsis



</style>
