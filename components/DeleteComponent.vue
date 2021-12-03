<template>
    <button @click="deleteGoods(index)" class="btn bg-danger text-light delBtn">DELETE</button>
</template>

<script>
export default {
    props: ['index', 'admin'],
    methods: {
      deleteGoods (index) {
        let {admin} = this;
        let goodStore = JSON.parse(localStorage.getItem(admin));
        goodStore = goodStore.filter((_, i)=> i !== index);
        localStorage.setItem(admin, JSON.stringify(goodStore));
        this.$emit("deleteGoods", goodStore);
      }
    }
}
</script>

<style>
.delBtn {
    font-weight: bold;
}
</style>