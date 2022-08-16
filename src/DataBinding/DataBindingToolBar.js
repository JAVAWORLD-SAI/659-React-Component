
export function DataBindingToolBar(){
        var Categories =["Eletronices" ,"Footware" ,"Cloths"];
    return(
        <div>
                <h2>Tool Bar</h2>
                <div className="btn toolbar bg-danger mb-2">
                    <div className="btn-group">
                        {
                            Categories.map(category =>
                                <button className="btn btn-danger" key={category}> {category}</button>
                                )
                        }

                    </div>

                </div>
        </div>
    )
}