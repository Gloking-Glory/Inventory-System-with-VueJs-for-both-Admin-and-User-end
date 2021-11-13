import React from 'react'
import { useState } from 'react';
export default function View({goodsBought, delGoods, qtyBought, setQtyBought, buyGoods, goodSold, setGoodSold}) {
    let [a, setA] = useState("");
    const click=(e)=> {
        setA(e.target.value);
    }
    console.log(goodSold);
    return (
        <div>
            <table class="table">
                <thead class="bg-danger text-light">
                    <th>S/N</th>
                    <th>NAME</th>
                    <th>QUANTITY</th>
                    <th>PRICE</th>
                    <th>QUANTITY TO BUY </th>
                    <th>DELETE</th>
                </thead>

                <tbody class="bg-secondary text-light">
                    {goodsBought.map((val, i)=> (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{val.name}</td>
                            <td>{val.quantity}</td>
                            <td>{val.price}</td>
                            <td>
                                <input placeholder="Quantity to buy" onChange=
                                    {e => setQtyBought(
                                        [...qtyBought, {qtyName: val.name, qtyNew: Number(val.quantity) - Number(e.target.value)}]
                                    )
                                }
                                />
                            </td>
                            <td>
                                <button class="btn bg-danger text-light" onClick={()=> delGoods(i)}>DELETE</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={buyGoods}>BUY</button>
        </div>
    )
}