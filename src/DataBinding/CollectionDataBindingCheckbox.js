

export function CollectionDataBindingCheckbox(){
    var Categories=["Eletronices" ,"Fashion" ,"Footware"];

    return(
            <div className="container-fluid">
                    <div className="row">
                    <div className="col">
                        <ol>
                            {
                                Categories.map(category =>
                                    <li key={category}>
                                    <input type="checkbox" />{category}   
                                    </li>
                                    )
                            }
                        </ol>

                    </div>
                    </div>
            </div>
    )
}