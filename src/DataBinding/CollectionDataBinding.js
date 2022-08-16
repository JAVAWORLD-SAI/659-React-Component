
// Warning: Each child in a list should have 
//a unique "key" prop.
// here we are not define key val 
// see nect example

export function CollectionDataBinding(){

    var Categories=["Eletronices" , "FootWare" , "Fashion"];

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <ol>
                        {
                            Categories.map(category =>
                                <li>{category}</li>)
                        }
                    </ol>
                </div>

            </div>
        </div>


    )
}