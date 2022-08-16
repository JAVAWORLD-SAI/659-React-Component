import { useState } from "react"

export function Demo(){

    var [username ,setusername]=useState('Saichand');

    return (
        <div class="container-fluid">
            {username}
        </div>
    )
}