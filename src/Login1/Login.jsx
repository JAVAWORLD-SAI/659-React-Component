
import { useState } from "react"

export  function Login(){

    const[login ,setLongin]=useState({Name : '',Role :'', Age :''});
    const [update, setUpdateddetails] = useState({Name :'',Role :'',Age :''});


    function nameChange(e){
        setLongin({
           
            Name: e.target.value,
            Role : e.target.Role,
            Age : e.target.Age
        })
    }
    function ageChange(e){
        setLongin({
            
            Name:e.target.Name,
            Role:e.target.Role,
            Age: e.target.value
        })
    }
    function roleChange(e){
        setLongin({
           
            Name:e.target.Name,
            Role:e.target.value,
            Age :e.target.Age
        })
    }

     function RegisterClick() {
         setUpdateddetails(login);
     }


    return(
        <div className="container-fluid m-2">
            <div className="col-2">
                <h2>Developers</h2>
                <dl>
                    
                    <dt>Name</dt>
                    <dd><input type="text" onChange={nameChange}  value={login.Name} className="form-control" /> </dd>
                    <dt>Role</dt>
                    <dd><input type="text" onChange={roleChange} value={login.Role} className="form-control" /> </dd>
                    <dt>Age</dt>
                    <dd><input type="text" onChange={ageChange} value={login.Age} className="form-control" /> </dd>
                </dl>
                <button onClick={RegisterClick} className="btn btn-primary w-100">Submit</button>
            </div>
            <div className="container mt-5">
                    <h2>Details</h2>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Age</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>                           
                        <tr key={update.Id}>
                            <td>{update.Name}</td>
                            <td>{update.Role}</td>
                            <td>{update.Age}</td>
                            <td>{update.Edit}<span><i class="bi bi-pen"></i></span></td>
                            <td>{update.Delete}<span><i class="bi bi-trash-fill"></i></span></td>
                            
                        </tr>
                        </tbody>


                    </table>
                    
                </div>


        </div>
    )
}