<template>
<div class="bg-secondary">
  <div class="text-center">
    <h1 class="text-light">ADMIN STOCK</h1>
    <h3 class="text-light">{{adminUsername}}, Welcome to your Dashboard</h3>
  </div>
  
  <br>

  <span class="goodsHeader">GOOD NAME: </span>
  <input v-model="goodName" placeholder="Goods" class=" form-control goodInput" />
  <span class="goodsHeader">GOOD QUANTITY: </span>
  <input v-model="goodQty" placeholder="Quantity" class=" form-control goodInput" type="number" />
  <span class="goodsHeader">GOOD PRICE: </span>
  <input v-model="goodPrice" placeholder="Price" class="form-control goodInput" type="number" />
  <span class="mt-3 goodsHeader">PICTURE:</span>
  <input type="file" class='mt-3 form-control goodInput' @change="selectImage" />

  <br>
  
  <div class="mt-3 text-center">
    <AddGoods v-if="name == 'ADD GOODS'" :name="name" :addGoods="addGoods" />
  <AddGoods v-else :name="name" :addGoods="addGoods" />
  </div>
  
  <table class="table mt-5">
    <tr class="bg-primary text-light goodHead">
      <th>S/N</th>
      <th>GOODS</th>
      <th>QUANTITY </th>
      <th>PRICE </th>
      <th>TOTAL PRICE </th>
      <th>DELETE</th>
      <th>EDIT</th>
      <th>GOOD PICTURE</th>
    </tr>
    <tbody class="bg-secondary text-light goodList">
      <tr v-for="(goods, index) in allGoods" :key="index">
        <td>{{index + 1}}</td>
        <td>{{goods.goodName}}</td>
        <td>{{goods.goodQty}}</td>
        <td>{{goods.goodPrice}}</td>
        <td>{{goods.goodQty * goods.goodPrice}}</td>
        <td>
          <DeleteComponent :index="index" @deleteGoods="delGood" :admin="adminUsername" />
        </td>
        <td> 
          <EditGoods :ind="index" @editingGoods='goodsEdit' /> 
        </td>
        <td>
          <img id="image" :src="goods.selectedImage" />
        </td>
      </tr>
    </tbody>
  </table>
  
  <div class="text-center" id="noGoods">
    <p v-if="allGoods.length == 0">{{noGoods}}</p>
  </div>
</div>
  
</template>

<script>
import DeleteComponent from '../components//DeleteComponent.vue';
import AddGoods from '../components/AddGoods.vue';
import EditGoods from '../components/EditGoods.vue';
import Image from '../components/images/download.jpg';
import Image1 from '../components/images/macBook.jpg';
import Image2 from '../components/images/sneakers.jpg';
import Image3 from '../components/images/phone.jpg';
import Image4 from '../components/images/hp.jpg';
import Image5 from '../components/images/bag.jpg';
import Image6 from '../components/images/shoe.jpg';
import Image7 from '../components/images/lenovo.jpg';
import Image8 from '../components/images/xiamo.jpg';
export default {
  data() {
    return {
      goodName: "",
      goodQty: "",
      goodPrice: "",
      goodImage: [],
      selectedImage: "",
      allGoods: [],
      editGoods: {},
      editIndex: "",
      name: "ADD GOODS",
      noGoods: "NO GOODS ADDED",
      adminUsername: ""
    }
  },
  methods: {
    //  Add Goods Button
    addGoods() {
      let {goodName, goodQty, goodPrice, editIndex, selectedImage, adminUsername} = this;
      let goodStore = JSON.parse(localStorage.getItem(adminUsername));
      
      if (goodName != "" && goodQty != "" && goodPrice != "") {
        if (this.name == "ADD GOODS") {
          if (goodStore) {
            goodStore = [...goodStore, {goodName, goodQty, goodPrice, selectedImage}];
            this.allGoods = goodStore;
            localStorage.setItem(adminUsername, JSON.stringify(goodStore));
          } else {
            let good = [{goodName, goodQty, goodPrice, selectedImage}];
            this.allGoods = good;
            localStorage.setItem(adminUsername, JSON.stringify(good));
          }
    // show selected image for good in 'goodImage'
          this.goodImage.push(this.selectedImage);
        } 
        else {
          goodStore[editIndex] = {goodName, goodPrice, goodQty};
          this.allGoods = goodStore;
          localStorage.setItem(adminUsername, JSON.stringify(goodStore));
          this.name = "ADD GOODS";
        }
      }
      this.goodName = "";
      this.goodQty = "";
      this.goodPrice = "";
    },
    
//  Delete Goods Button
    delGood (goodStore) {
      this.allGoods = goodStore;
    },
    
//  Edit Goods Button (setting the index of edited object)
    goodsEdit (ind) {
      let {adminUsername} = this;
      let goodStore = JSON.parse(localStorage.getItem(adminUsername));
      this.goodName = goodStore[ind].goodName;
      this.goodQty = goodStore[ind].goodQty;
      this.goodPrice = goodStore[ind].goodPrice;
      this.editIndex = ind;
      this.name = "SAVE CHANGES";
    },
// Image Selection through file input
    selectImage (e) {
      let imageSlice = e.target.value.slice(12);
      let dotIndex = imageSlice.indexOf(".");
      let imageName = imageSlice.slice(0, dotIndex)
      let images = [Image, Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];
      let imageExp = new RegExp(imageName, 'g');
      for (let i = 0; i < images.length; i++) {
        if (imageExp.exec(images[i])) {
          this.selectedImage = images[i];
        }
      }
    }
  },
  mounted () {
    let adminInfo = JSON.parse(localStorage.getItem("adminInfo"));
    let goods = JSON.parse(localStorage.getItem(adminInfo.username));
    this.allGoods = goods ? goods : [];
    this.adminUsername = adminInfo.username;
  },
  components: {
    DeleteComponent,
    AddGoods,
    EditGoods,
  }
}
</script>

<style>
  .goodInput {
    display: inline;
    font-size: 1.2em;
    margin-left: 10pt !important;
    width: 200pt !important;
  }
  .goodsHeader {
    color: white;
    font-size: 1.2em;
    font-weight: bold;
    margin-left: 10pt;
  }
  #noGoods {
    font-weight: bold;
    font-size: 2em;

  }
  .goodHead {
    font-size: 1.2em;
  }
  .goodList {
    font-size: 1.2em;
  }
  #image {
    width: 70px;
    height: 70px;
  }
    
</style>