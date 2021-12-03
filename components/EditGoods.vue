<template>
    <button @click="editingGoods" class="btn bg-info text-light editBtn">EDIT GOODS</button>
</template>

<script>
export default {
    props: ['ind'],
    methods: {
       editingGoods () {
           let {ind} = this;
           this.$emit('editingGoods', ind);
       }
   }
}
</script>

<style>
.editBtn {
    font-weight: bold;
}
</style>