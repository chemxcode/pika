<template>
    <div>
        <div class="item"
        v-for="(item, index) of list" :key="index">
        

        <div class="item-title">
            <span class="item-title-icon">
                icon
            </span>
            {{item.title}}
        </div>
        <!-- 递归组件 -->
        <div v-if="item.children"
        class="item-children">
            <detail-list :list="item.children"></detail-list>
        </div>

        </div>
    </div>
</template>
<script>
 export default {
    name: "DetailList",
    props: {
        list: Array
    }
}
</script>
<style scoped>
.item-title {
    line-height: 30px;
    font-size: 14px;
    padding: 6px 24px;
    border-bottom: 1px solid #000;

}
.item-children {
    padding: 0 12px;
}

</style>


