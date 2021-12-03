<template>
<div class="flex-row flex-wrap p-3 d-flex justify-content-start">
    <div v-for="(goods, index) in cartGoods" :key="index">
        <div class="flex-row p-3 d-flex">
            <div class="p-2">
                <img :src="goods.selectedImage" class="goodImage" />
            </div>
            <div class="p-2">
                <h3>{{cartGoods[index].goodName}}</h3>
                <h3>{{cartGoods[index].goodQty}}</h3>
                <h3>{{cartGoods[index].goodPrice}}</h3>
                <input @change="buy" :value="inputValue" placeholder="Quantity to buy" class="form-control buyInput" type="number" />
                <span class="mt-3">
                    <button @click="buyGoods(index)" class="btn bg-primary text-light">BUY</button>
                    <button @click="deleteGood(index)" class="btn bg-danger text-light" style="margin-left: 10pt">DELETE GOOD</button>
                </span>
            </div>
        </div>
    </div>
    <h5>{{outOfStock}}</h5>
</div>
</template>

<script>
export default {
    data() {
        return {
            inputValue: "",
            qtyBuy: "",
            outOfStock: "",
            cartGoods: []
        }
    },
    methods: {
        buy (e) {
            this.qtyBuy = e.target.value;
        },
        buyGoods (index) {
            let {qtyBuy, buySelect} = this;
            if (qtyBuy <= buySelect[index].goodQty) {
                let buyGood = {...buySelect[index], qtyBuy};
                this.outOfStock = "";
                this.inputValue = ""
                this.$emit("buyGoods", {index, buyGood});
                return;
            } else {
                this.outOfStock = `Out of Stock, there is only ${buySelect[index].goodQty} of ${buySelect[index].goodName} available now`;
                return;
            }
        },
        deleteGood (index) {
            this.$emit("deleteGood", index)
        }
    },
    mounted () {
        let goods = JSON.parse(localStorage.getItem("cartGoods"));
        this.cartGoods = goods ? goods : [];
    }
}
</script>

<style >
.buyInput {
    width: 100pt !important;
}
.buyList {
    margin-left: 15pt;
}
.goodImage {
    width: 80pt;
    height: 80pt;
}
</style>
