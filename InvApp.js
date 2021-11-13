import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import InvReg from './InvReg';
import InvLog from './InvLog';
import View from './View';
import Buy from './Buy';
import Seller from './Seller';

export default function App() {
  let [num, setNum] = useState("0");
  let [qtySold, setQtySold] = useState("")
  let [allGoods, setAllGoods] = useState([]);
  let [goodsBought, setGoodsBought] = useState([]);
  let [allInfo, setAllInfo] = useState([]);
  let [qtyBought, setQtyBought] = useState([]);
  let [goodSold, setGoodSold] = useState([]);
  const goods =i=> {
    setGoodsBought([...goodsBought, allGoods[i]]);
    setNum(+num + 1);
  }
  const delGoods =ind=> {
    let goods = goodsBought.filter((_, i)=> i !== ind);
    setGoodsBought(goods);
    setNum(+num - 1);
  }
  const admDelete =ind=> {
    let del = allGoods.filter((_, i)=> i !== ind);
    setAllGoods(del);
  }
  const buyGoods =()=> {
    for (let i = 0; i < qtyBought.length; i++) {
      for (let o = 0; o < allGoods.length; o++) {
        if (allGoods[o].name == qtyBought[i].qtyName) {
          allGoods[o].quantity = qtyBought[i].qtyNew;
          setAllGoods(allGoods);
        };
      };
    };
  }
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <InvReg allInfo={allInfo} setAllInfo={setAllInfo}></InvReg>
        </Route>
        <Route exact path="/login">
          <InvLog allInfo={allInfo}></InvLog>
        </Route>
        <Route exact path="/seller">
          <Seller allGoods={allGoods} setAllGoods={setAllGoods} admDelete={admDelete} goodSold={goodSold}></Seller>
        </Route>
        <Route exact path="/buyer">
          <Buy allGoods={allGoods} goods={goods} num={num}></Buy>
        </Route>
        <Route exact path="/view">
          <View goodsBought={goodsBought} delGoods={delGoods} qtyBought={qtyBought} setQtyBought={setQtyBought} buyGoods={buyGoods} goodSold={goodSold} setGoodSold={setGoodSold}></View>
        </Route>
        
      </Switch>
        
    </div>
  )
}
