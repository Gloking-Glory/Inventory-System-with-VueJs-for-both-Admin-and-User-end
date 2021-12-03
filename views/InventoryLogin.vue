<template>
    <form>
        <center class="mt-5 bg-warning logContainer">
            <h5><strong>EMAIL:</strong></h5>
            <input v-model="logEmail" placeholder="Email" class="mt-3 form-control logInput" />

            <h5 class="mt-4"><strong>PASSWORD:</strong></h5>
            <input v-model="logPassword" type="password" placeholder="Password" class="mt-3 form-control logInput" />

            <LogButton :logEmail="logEmail" :logPassword="logPassword" @login="setLogInfo" />
        </center>
    </form>
</template>

<script>
import LogButton from '../components/LogButton';
export default {
    data () {
        return {
            logEmail: "",
            logPassword: "",
            logInfo: ""
        }
    },
    methods: {
// set login info
      setLogInfo (info) {
          this.logInfo = info;
          if (info.userStatus == "buyer") {
              localStorage.setItem("userInfo", JSON.stringify(info));
              this.$router.push("/user");
          } else {
              localStorage.setItem("adminInfo", JSON.stringify(info));
              this.$router.push("/admin")
          }
      }  
    },
    components: {
        LogButton,
    }
}
</script>

<style>
.logInput {
    font-size: 1.2em;
    width: 250pt;
}
.logContainer {
    height: 240pt;
    margin-left: 300pt;
    width: 400pt;
}
</style>