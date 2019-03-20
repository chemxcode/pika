<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >{{item}}</li>
  </ul>
</template>
<script>
export default {
  name: "Alphabet",
  props: {
    cities: Object
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    }
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  updated () {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handleLetterClick(e) {
      // if (this.time) {
      //   clearTimeout(this.timer)
      // }
      // this.timer = setTimeout(() => {

      
      this.$emit("change", e.target.innerText);
      console.log(e.target.innerText);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus === true) {
        // const startY = this.$refs["A"][0].offsetTop;
        // console.log(startY);
        if(this.timer) {
          clearTimeout(this.timer)

        }
        // 函数节流
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 89;
          const index = Math.floor((touchY - this.startY) / 20);
          console.log(touchY);
          console.log("index: " + index);
          if (index >= 0 && index < this.letters.length) {
              this.$emit('change', this.letters[index]);
          }
        }, 16)
        
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  }
};
</script>
<style scoped>
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 90px;
  right: 0;
  width: 16px;
  bottom: 0;
  text-align: center;
  background-color: rgb(225, 223, 233);
  line-height: 20px;
}
</style>


