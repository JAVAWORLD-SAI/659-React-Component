import { useState } from "react";

export function Demo3(){

        const[username]=useState('john');
        const[data]=useState({name :"Sai", des :"Developer"});
        const[foot]=useState(["Eletronics", "footware"]);

        return (
            <div>
                <div class="container-fluid">
                    <dl>
                        <dt>Name</dt>
                        <dd>{data.name}</dd>
                        <dt>Des</dt>
                        <dd>{data.des}</dd>
                    </dl>
                    <ol>
                        {
                            foot.map(item=>
                                <li>{item}</li>)
                        }
                    </ol>
                </div>
            </div>
        )
}