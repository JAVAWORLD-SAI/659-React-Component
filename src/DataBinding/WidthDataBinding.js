



export function WidthDataBinding(){
    var width =500;
    var height =200;  // height is not a property it a attribute So don't bind

    return(
        <div className="container-fluid">
            <h2>Data Binding Width </h2>
            {/* <table border="1" width={width} height={height}> */}
            <table border="1" width={width}>  
            {/* use style we can bind Height */}
                <tr>
                    <td>WELCOME TO PROPERTY BINDING</td>
                </tr>
            </table>

        </div>
    )
}