

export function CollectionDatabindingLink(){
    var Categories =["Eletronices","Fasion","Footware"]
    return(
            <div className="container-fluid">
                <div className="col-1">
                    {
                        Categories.map(category =>
                            <div key={category}>
                                <ol >
                                <button className="btn btn-link mb-2 w-100">{category}</button>
                                </ol>
                            </div>
                                )
                    }
                    </div>

                </div>
            
    )
}