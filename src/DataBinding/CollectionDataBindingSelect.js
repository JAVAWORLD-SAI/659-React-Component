

export function CollectionDataBindingSelect(){

    var Categories=["Eletronics","Footware","Fashion"];

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <ol>
                        {
                            Categories.map(category =>
                            <option key={category}> {category}
                            </option>
                            )
                             }
                    </ol>

                </div>

            </div>

        </div>
    )

}