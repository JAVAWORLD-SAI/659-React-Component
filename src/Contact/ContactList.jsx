import axios, { Axios } from "axios";
import { useEffect, useState } from "react"

export function ContactList()
{
    const [ getData, setData ] = useState([]);
    const[details, setUpdatedDetails]=useState([]);

    function detailsClick(){
            setUpdatedDetails(getData);
        }
    useEffect(() => {
        axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
        .then(res => {
            setData(res.data)
        })
        .catch(err=>{console.log(err)})
      }, []);
    return(
        <div className="container-fluid ">
                <main className="row">
                <div className="col-6">
                    <h2>Contact List</h2>
            <table className="table table-hover  mt-5 p-2 m-2">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>UUID</th> 
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                         getData.map((item,index)=>
                         <tr key={item.index}>
                             <td >{index+1}</td>
                             <td>{item.login.uuid.slice(-4)}</td>
                             <td>{item.name.first.toUpperCase()}</td>
                             <td>{item.email}</td>
                             <button onClick={detailsClick}  class="btn btn-primary text-bg-info">Details</button>                                
                         </tr>
                         )       
                    }                 
                </tbody>
            </table>
           </div>  
           <div className="col-3">
    <h1>Details</h1>
     <div className="container">
        {
            details.map((data, index)=>
                    
             <div className="card mt-5 m-3 p-1">
                <div className="card-header">
                    <div className="card-body m-0 p-1">
                        <dl key={index}>
                            <dd>NAME :<b>{data.name.first}</b></dd>
                            <dd>LOC: <b>{data.location.city}</b></dd>
                            <dd>STREET:<b>{data.location.street.name}</b> </dd>
                    
                        </dl>
                    </div>
                </div>
             </div>    
            )
            
        }
     </div>
</div>     
<div className="col-3">
    <h1>Images</h1>
     <div className="container">
        {
            details.map((data, index)=>      
             <div className="card mt-5 m-3 p-1">
                <div className="card-header">
                    
                    <div className="card-body p-0">
                        <dl key={index}>
                            <img src={data.picture.medium} height="130" />
                    
                        </dl>
                    </div>
                </div>
             </div>   
            
            )
            
        }
     </div>
</div> 
</main>
 </div>
    )

}
