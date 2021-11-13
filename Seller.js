import React, { useState } from 'react';

export default function Seller({allGoods, setAllGoods, admDelete, goodSold}) {
    let [goods, setGoods] = useState({name: "", quantity: "", price: ""});
    return (
        <div>
            <center>
                <h1>ADMIN STOCK</h1>
            </center>
            <input id="sellInput" class="form-control" onChange={e => setGoods({...goods, name: e.target.value})} placeholder="Name" />
            <input id="sellInput" class="form-control" onChange={e => setGoods({...goods, quantity: e.target.value})} placeholder="Quantity" type="number" />
            <input id="sellInput" class="form-control" onChange={e => setGoods({...goods, price: e.target.value})} placeholder="Price" type="number" />
            <button class="btn bg-info text-light" onClick={()=> setAllGoods([...allGoods, goods])}>ADD GOODS</button>

            <table class="table">
                <thead class="bg-primary text-light">
                    <th>S/N</th>
                    <th>NAME</th>
                    <th>QUANTITY</th>
                    <th>PRICE</th>
                    <th>TOTAL PRICE </th>
                    <th>GOODS BOUGHT </th>
                    <th>DELETE</th>
                </thead>
                <tbody class="bg-secondary text-light" >
                    {allGoods.map((val, i)=> (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{val.name}</td>
                            <td>{val.quantity}</td>
                            <td>{val.price}</td>
                            <td>{+val.price * +val.quantity}</td>
                            <td>{}</td>
                            <td><button onClick={()=> admDelete(i)}>DELETE</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3>GOODS BOUGHT </h3>
            {/* <table class="table">
                <thead class="bg-primary text-light">
                    <th>S/N</th>
                    <th>NAME</th>
                    <th>QUANTITY BOUGHT</th>
                    <th>PRICE SOLD</th>
                </thead>
                <tbody>
                    {goodSold.map((val, i)=> (
                        <tr>
                            <td>{i + 1}</td>
                            <td>{val.qtyName}</td>
                            <td>{val.qtyBuy}</td>
                            <td>{val.qtyPrice}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </div>
    )
}
