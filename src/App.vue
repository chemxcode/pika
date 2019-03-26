<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <!-- Detail将不再被keepalive -->
      <router-view />
    </keep-alive>
  </div>
</template>
<style lang="stylus">

</style>
