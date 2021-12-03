<template>
    <h4 class="mt-3">{{success}}</h4>
    <button @click="login()" class="mt-3 btn bg-success text-light logBtn">LOGIN</button>
</template>

<script>
export default {
    props: ['logEmail', 'logPassword'],
    data () {
        return {
            success: ""
        }
    },
    methods: {
        login () {
            let {logEmail, logPassword} = this;
            let allInfo = JSON.parse(localStorage.getItem("allInfo"));
            for (let i = 0; i < allInfo.length; i++) {
                if (allInfo[i].email == logEmail) {
                    if (allInfo[i].password !== logPassword) {
                        this.success = "Incorrect Password";
                        return;
                    } else {
                        this.success = `${allInfo[i].username}, welcome to your dashboard`;
                        this.$emit("login", allInfo[i]);
                        return;
                    }
                } else {
                    this.success = "Please register first";
                }
            }
        }
    }
}
</script>

<style>
.logBtn {
    font-size: 1.2em;
    font-weight: bold;
}
</style>