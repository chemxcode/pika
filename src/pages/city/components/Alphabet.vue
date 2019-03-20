<template>
    <ul class="list">
        <li class="item"
            v-for="(item, key) of cities" :key="key">
            {{key}}
        </li>
    </ul>
</template>
<script>
export default {
    name: "Alphabet",
    props: {
        cities: Object
    }


}
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


