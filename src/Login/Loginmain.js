
export function Loginmain() {
        var title= "User Login";
    return(
        <div className="container-fluid d-flex justify-content-center">
        <div  className="mt-xl-5">
        <h2> <span className="bi bi-person-fill"></span>{title}</h2>
        <dl>
            <dt> User Name </dt>
            <dd> <input type="text"/></dd>
            <dt> Password </dt>
            <dd><input type="Password"/></dd> 
        </dl>
        <button className="btn btn-primary w-50">Login</button>
        </div>
        </div>
    
  )
}