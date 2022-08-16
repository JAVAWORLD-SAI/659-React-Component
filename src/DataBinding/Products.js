

export function Products(){
var products =[
    {Name :"Speaker", price:4000, photo:"speaker.jpg"},
    {Name :"Shoe",  price:5000,photo:"Shoes.jpg"},
    {Name :"Bag",  price:1200 ,photo:"bag.jpg"},
    {Name :"Shirt", price:800,photo:"shirt.jpg"},
    
]
    return(
        <div className="container-fluid mt-2">
            
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Photo</th>
                        <th colSpan="3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr key={product.key}>
                                <td>{product.Name}</td>
                                <td>{product.price}</td>
                                <td>
                                    <img src={product.photo} width="100" height="100"/>
                                </td>
                                <td>
                                    <button className="btn btn-outline-info">
                                    <span className="bi bi-pen-fill"></span>
                                    </button>
                                </td>
                                <td>
                                    <button className=" btn btn-danger">
                                    <span className="bi bi-trash-fill"></span>
                                    </button>
                                </td>
                            </tr>)
                    }
                </tbody>

            </table>

        </div>
    )
}