<template>
  <div class="friends">
    <div class="title">皮卡小伙伴</div>
    <ul>
      <router-link class="item" tag="li"
      v-for="item of list" 
      :key="item.id"
      :to="'/detail/' + item.id"
      >
        <div class="item-img-wrapper">
          <img :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-name">{{item.name}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <!-- <button class="item-button">查看详情</button> -->
        </div>
      </router-link>
     
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeFriend",
  props: {
    list: Array
  },
  data() {
    return {

     
    };
  }
};
</script>

<style scoped>
.friends {
  background-color: #fde570;
}
.title {
  font-size: 14px;
  padding: 6px;
  /* border-bottom: 1px solid #000; */
}
.item {
  height: 80px;
  width: 98%;
  margin: 0 auto;
  background-color: #fde570;
  position: relative;
  border-bottom: 1px solid rgb(197, 250, 7);
}
.item-img-wrapper {
  position: absolute;
  margin-left: 5px;
  height: 70px;
  width: 70px;
  /* background-color: blue; */
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
.item-info .item-name {
  padding: 4px;
  color: rgb(255, 72, 0);
}
.item-info .item-desc {
  color: rgb(0, 0, 0);
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
