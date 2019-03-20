<template>
  <div class="icons">
    <swiper :options="swiperOption">
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
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
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

<style scoped>
.icons {
  /* display: flex; */
  /* height: 60px; */
  height: 220px;
  background-color: blue;

}
.icons .icon {
  position: relative;
  float: left;
  background-color: #fff;
  width: 25%;
  height: 110px;
}
.icon-img {
  width: 60px;
  height: 60px;
  /* background-color: blue; */
  margin: 10px auto;
}
.icon-img-content {
  height: 60px;
}
.icon-desc {
  text-align: center;
}

/* .icons >>> .swiper-container
  // overflow hidden
  height 0
  padding-bottom 50%
  // border-bottom 1px solid #000
.icons 
  margin-top .1rem
  background-color #eee
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
      text-overflow ellipsis */



</style>
