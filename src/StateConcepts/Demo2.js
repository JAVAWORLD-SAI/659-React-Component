import { useState } from "react";

export function Demo2(){
    const [username]=useState('john');
    const[product]=useState({name:"Sai" , price:455.5});
    return (
        <div class="container-fluid">
            <dl>
                <dt>Name</dt>
                <dd>{product.name}</dd>
                <dt>Price</dt>
                <dd>{product.price}</dd>
            </dl>
        </div>
    )
}