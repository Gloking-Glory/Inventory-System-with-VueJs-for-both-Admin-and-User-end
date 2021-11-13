import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export default function InvLog({allInfo}) {
    let [logInfo, setLogInfo] = useState({username: "", password: ""});
    let [toPath, setToPath] = useState("");
    let userLogin = allInfo.find((val, i)=> val.username === logInfo.username);
    if (userLogin) {
}
    const login =()=> {
//        if (!userLogin) {alert("Register first"); return};
        if (userLogin) {
            if (userLogin.password !== logInfo.password) {
                alert("Incorrect Password");
                return;
            };
            setToPath((userLogin.status == 1) ? "/seller":"/buyer");
        };
    }

    return (
        <div>
            <input onChange={e => setLogInfo({...logInfo, username: e.target.value})} placeholder="Username" />
            <input onChange={e => setLogInfo({...logInfo, password: e.target.value})} placeholder="Password" />
            <Link onClick={login} to={toPath} class="btn bg-danger">LOGIN</Link>
        </div>
    )
}
