import { useState } from "react";

export function Oneway(){
    const[username]=useState('saichand');

    return(
        <div class="container-fluid mt-2">
            <h>OneWay binding</h>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" value={username}/></dd>
            </dl>
            <h3>Hello !--{username}</h3>
        </div>
    )
}