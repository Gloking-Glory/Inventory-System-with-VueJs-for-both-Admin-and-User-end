<template>
    <button type="submit" @click="register" class="btn bg-info text-light regBtn">REGISTER</button>
</template>

<script>
export default {
    props: ['register']
}
</script>

<style>
.regBtn {
    font-weight: bold;
    font-size: 1.2em;
    
}
</style>