<template>
<div class="footer">
    <router-link :to="'/about/'">
        footer
    </router-link>
</div>
</template>
<script>
export default {
    name: 'HomeFooter'
}
</script>
<style scoped>
.footer {
    text-align: center;
    height: 60px;
    background-color: #000;
    color: #fff;
}
.footer a {
    color: #fde570;
    line-height: 60px;
}

</style>
