import React from 'react';
import { useParams } from 'react-router';

export default function Buy({allGoods, goods, num}) {
    return (
        <div>
            <p>NUM OF GOODS ADDED: {num} </p>
            <table class="table">
                <thead class="bg-primary text-light">
                    <th>S/N</th>
                    <th>NAME</th>
                    <th>QUANTITY</th>
                    <th>PRICE</th>
                    <th>ADD GOOD</th>
                </thead>

                <tbody class="bg-secondary text-light">
                    {allGoods.map((val, i)=> (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{val.name}</td>
                            <td>{val.quantity}</td>
                            <td>{val.price}</td>
                            <td><button onClick={()=> goods(i)}>ADD GOOD</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    )
}
