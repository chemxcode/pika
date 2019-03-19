<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或拼音">    
    </div>
</template>
<script>
export default {
    name: "CitySearch"
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


</style>


