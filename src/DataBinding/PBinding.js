

export function PBinding(){

    var product={
        Name :"SAMSUNG_TV",
        Price: 45066,
        Stock :true
    };
    return(
        <div className="container-fluid">
            <h2>Product Details</h2>
            <dl>
                <dt>Name</dt>
                <dd>{product.Name}</dd>
                <dd> <input type="text" value={product.Name} /></dd>
                <dt>Price</dt>
                <dd>{product.Price}</dd>
                <dd> <input type="text" value={product.Price} /></dd>
                <dt>Stock</dt>
                <dd>{(product.Stock== true)? "Avalible" : "Not Avalible"}</dd>

            </dl>
        </div>
    )
}