import { useState } from "react";

export function Twoway(){
    const[username,setUserName]=useState('saichand');

    function changeuserName(e){
            setUserName(e.target.value);
    }

    return(
        <div class="container-fluid mt-2">
            <h>Twoway binding</h>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text"onChange={changeuserName} value={username}/></dd>
            </dl>
            <h3>Hello !--{username}</h3>
        </div>
    )
}