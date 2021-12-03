<template>
<div class="bg-warning">
    <h3 class="text-center text-light">{{userInfo.username}} Dashboard</h3>
    <router-link :to="{name: 'cart'}" class="text-danger">GO TO CART</router-link>

    <br>
    <div v-for="(goods, index) in allGoods" :key="index" class="flex-wrap p-3 d-inline-flex justify-content-start ">
        <div class="flex-row d-flex">
            <div class="p-2">
                <img id="goodImage" :src="goods.selectedImage"/>
            </div>
            <div class="p-2">
                <h3>{{goods.goodName}}</h3>
                <h5>Quantity Available: {{goods.goodQty}}</h5>
                <h5>Price: {{goods.goodPrice}}</h5>
                <button @click="addToCart(index)" class="btn bg-success text-light buyBtn">ADD TO CART</button>
                <!-- <button class="btn bg-success text-light buyBtn" @click="buyGood(index)">BUY</button> -->
            </div>
        </div>
    </div>
    
    <!-- <GoodsBuy :cartGoods="cartGoods" @buyGoods="goodBought" @deleteGood="goodDelete" /> -->
</div>

</template>

<script>
export default {
    data () {
        return {
            buySelect: [],
            boughtGoods: "",
            soldGoods: [],
            userInfo: JSON.parse(localStorage.getItem("userInfo")),
            allGoods: [],
            cartGoods: []
        }
    },
    methods: {
        addToCart (index) {
            let {allGoods, cartGoods} = this;
            cartGoods.push(allGoods[index]);
            localStorage.setItem("cartGoods", JSON.stringify(cartGoods));
        },
        // buyGood (index) {
        //     let {allGoods, buySelect} = this;
        //     buySelect.push(allGoods[index]);
        // },
        goodBought ({index, buyGood}) {
            let {buySelect} = this;
            this.buySelect = buySelect.filter((_, i)=> i != index);
            this.soldGoods.push(buyGood);
        },
        goodDelete (index) {
            let {buySelect} = this;
            this.buySelect = buySelect.filter((_, i) => i != index);
        }
    },
    mounted () {
      let allAdmin = JSON.parse(localStorage.getItem("allInfo"));
      for (let i = 0; i < allAdmin.length; i++) {
        if (allAdmin[i].userStatus == "seller") {
            let goods = JSON.parse(localStorage.getItem(allAdmin[i].username));
            this.allGoods = goods;
        }          
      }
      
    }
}
</script>

<style>
.goodList {
    font-size: 1.2em;
}
.buyBtn {
    font-weight: bold;
}
#goodImage {
    height: 120px;
    width: 120px;
}
</style>