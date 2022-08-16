

export function CollectDataBindingTable(){
    var Categories=["Eletronics","Fashion" ,"Shoes"];
    return(
        <div>
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th>
                            Categories
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Categories.map(category=>
                            <tr key={category}>
                                <td>{category}</td>
                            </tr>
                         )
                    }
                </tbody>
            </table>
        </div>
    )
}