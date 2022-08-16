


export function CollectionDataBindingKey(){

    var categories=["Eletronics", "Footware" ,"Fashion"];

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <ol>
                        {
                            categories.map(category =>
                                <li key={category}>{category}</li>)
                        }
                    </ol>

                </div>

            </div>

        </div>
    )
}