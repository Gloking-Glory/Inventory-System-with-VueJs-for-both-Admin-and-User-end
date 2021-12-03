<template id="container">
<div class="rounded bg-secondary text-light" id="regContainer">
    <form>
        <h5 class="mt-4"><strong>USERNAME:</strong></h5>
        <input v-model="username" placeholder="Username" class="form-control regInput" />

        <h5 class="mt-4"><strong>EMAIL:</strong></h5>
        <input v-model="email" placeholder="Email" class="form-control regInput" />

        <h5 class="mt-4"><strong>PASSWORD:</strong></h5>
        <input v-model="password"  type="password" placeholder="Password" class="form-control regInput" />

        <label class="p-3 h5" for="buyer">BUYER</label>
        <input name="userStatus" v-model="userStatus" type="radio" value="buyer" />
        <label class="p-3 h5" for="seller">SELLER</label>
        <input name="userStatus" v-model="userStatus" type="radio" value="seller" />
        
        <br>
        <p class="h5">{{status}}</p>
        <RegButton :register="register" />  
    </form>
</div>

</template>

<script>
import RegButton from '../components/RegButton';
export default {
    data() {
        return {
            username: "", 
            email: "", 
            password: "",
            userStatus: "",
            status: ""
        }
    },
    methods: {
        register () {
            let {username, email, password, userStatus} = this;
            let allInfo = JSON.parse(localStorage.getItem("allInfo"));
            if (username !== "" && email !== "" && password !== "") {
                if (allInfo) {
                    for (let i = 0; i < allInfo.length; i++) {
                        if (allInfo[i].email == email) {
                            this.status = "Email Already Exist";
                            return;
                        } else {
                            allInfo = [...allInfo, {username, email, password, userStatus}];
                            localStorage.setItem("allInfo", JSON.stringify(allInfo));
                            this.status = `${username}, you are successfully registered`;
                            this.$router.push("/login");
                            return;
                        }
                    }
                } else {
                    let allInfo = [{username, email, password, userStatus}];
                    localStorage.setItem("allInfo", JSON.stringify(allInfo));
                    this.status = `${username}, you are successfully registered`;
                    this.$router.push("/login");
                }
                this.username = "";
                this.email = "";
                this.password = "";
            }
        }
    },
    components: {
        RegButton
    }
}
</script>

<style>

#regContainer {
    height: 320pt;
    margin-left: 300pt;
    text-align: center;
    width: 300pt;
}
.regInput {
    font-size: 1.2em;
    margin-left: 20pt;
    width: 250pt;
}
</style>