<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <!-- Detail将不再被keepalive -->
      <router-view />
      <!-- <router-view />当前路由地址对应的内容 -->
    </keep-alive>
  </div>
</template>
<style lang="stylus">
</style>


