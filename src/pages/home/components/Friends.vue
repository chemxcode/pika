<template>
  <div class="friends">
    <div class="title">皮卡小伙伴</div>
    <ul>
      <router-link class="item" tag="li"
      v-for="item of recommendList" 
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
  name: "HomeRecommend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2588244565,3365893339&fm=26&gp=0.jpg",
          name: "柯南",
          desc: "死神小学生"
        },
        {
          id: "0002",
          imgUrl: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1222101153,1877956273&fm=26&gp=0.jpg",
          name: "标题",
          desc: "描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡"
        },
        {
          id: "0003",
          imgUrl: "http://img1.imgtn.bdimg.com/it/u=2874328332,686638447&fm=26&gp=0.jpg",
          name: "小黄人",
          desc: "描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡"
        },
        {
          id: "0005",
          imgUrl: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1556432944,2080824896&fm=11&gp=0.jpg",
          name: "步美",
          desc: "描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡"
        },
        {
          id: "0006",
          imgUrl: "https://i.loli.net/2019/03/17/5c8e4a2686697.png",
          name: "标题",
          desc: "描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡"
        },
        {
          id: "0007",
          imgUrl: "https://i.loli.net/2019/03/17/5c8e4a2686697.png",
          name: "标题",
          desc: "描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡"
        },
        {
          id: "0008",
          imgUrl: "https://i.loli.net/2019/03/17/5c8e4a2686697.png",
          name: "标题",
          desc: "描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡描述皮卡"
        }
      ]
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
