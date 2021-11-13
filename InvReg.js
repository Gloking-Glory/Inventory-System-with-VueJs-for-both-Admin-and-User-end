import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function InvReg({allInfo, setAllInfo}) {
    let [info, setInfo] = useState({username: "", password: "", email: "", status: ""});
    let [pathUrl, setPathUrl] = useState("")
    const status =e=> {
        setInfo({...info, status: (e.target.value == "seller") ? 1:2});
        setPathUrl("./login")
    }
    return (
        <div>
            <center>
                <h1> REGISTER </h1>
                <div>
                    <h4>Username:</h4>
                    <input id="regInput" class="form-control" onChange={e => setInfo({...info, username: e.target.value})} placeholder="Username" />
                </div>
                <div>
                    <h4>Email:</h4>
                    <input id="regInput" class="form-control" onChange={e => setInfo({...info, email: e.target.value})}placeholder="Email" />
                </div>
                <div>
                    <h4>Password:</h4>
                    <input id="regInput" class="form-control" onChange={e => setInfo({...info, password: e.target.value})} placeholder="Password" />
                </div>
                <div>
                    <label for="buyer">BUYER</label>
                    <input onClick={status} type="radio" name="status" value="buyer" />
                    <label for="seller">SELLER</label>
                    <input onClick={status} type="radio" name="status" value="seller" />
                </div>
                <button class="btn bg-primary text-light" onClick={()=> setAllInfo([...allInfo, info])}>REGISTER</button>
            </center>
        </div>
    )
}
