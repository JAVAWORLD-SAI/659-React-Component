

export function DataBindingNestedList(){

    var menu =[
        {list : "Eletronices " ,products :["Mobile","watches","earphones"]},
        { list : "Footware ",products:["NIKE ","GIOM","LOP"]}
    ];

    return (
          <div class="container-fluid">
            <ol>
                {
                menu.map(items =>
                    <li key={items.list}>{items.list}
                    <ul>
                        {items.products.map(product=>
                            <li key={items.products}>{product}</li>
                        )}
                    </ul>
                    
                    </li>)
                    
                }
            </ol>

          </div>
    )
}