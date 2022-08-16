

export function DataBindingButtons(){

        var Categories=["Eletronices","Footware","Fashion"];
    return(
            <div className=" container-fluid">
                <div className="row">
                <div className="col">
                    {
                        Categories.map(category =>
                            <li key={category}>
                            <button className="btn btn-primary" >{category}</button>
                            </li>
                            
                            
                        )
                    }
                </div>
                </div>

            </div>
    )
}