<template>
    <button class="btn bg-danger text-light goodBtn mt-3" @click="addGoods">{{name}} </button>
</template>

<script>
export default {
    props: ['addGoods', 'name', 'saveChanges']
}
</script>

<style>
.goodBtn {
    margin-left: 10pt;
    font-size: 1.2em;
    font-weight: bold;
}
</style>