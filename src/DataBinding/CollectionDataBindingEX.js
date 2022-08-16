

export function CollectionDataBindingEX(){
    var Categories =["Eletronices" ,"Fashion" ,"Footware"];
    return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                    <ol>
                        {
                            Categories.map(catrgory =>
                                <li key={catrgory}>{catrgory}</li>)
                        }
                    </ol>
                    </div>
                    <div className="col">
                        <ol>
                            {
                                Categories.map(category =>
                                    <option key={category}>{category}</option>)                 
                            }
                        </ol>
                    </div>

                    <div className="col">
                        <ol>
                            {
                                Categories.map(category =>
                                    <li key={category}>
                                        <input type="checkbox"/> {category}
                                    </li>)
                            }
                        </ol>

                    </div>

                </div>

            </div>
    )
}