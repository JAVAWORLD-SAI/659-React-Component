

export function MenubarOngroup(){

    var menu= [{
        category :"Eletonices" ,product :["Mobile","battery","Shit"]},
        {
            category :"Footware",product:["LEo","POOMA","Panda"]
        }
    ];
    return (
        <div class="container-fluid">
            <select>
                {
               menu.map(item=>
                    <optgroup key={item.category} label={item.category}>
                        {
                            item.product.map(product=>
                                <option>{product}</option>)
                        }
                    </optgroup> 
                )
                }
            </select>
        </div>
    )
}
