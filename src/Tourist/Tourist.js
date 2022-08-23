import axios, { Axios } from "axios";
import { useEffect, useState } from "react"

export function Tourist()
{
    const [ getData, setData ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/Spring-Rest-Project-Tourist/tourist/findall')
        .then(res => {
            setData(res.data)
        })
        .catch(err=>{console.log(err)})
      }, []);
    return(
        <div className="container-fluid">
            <h2>Tourist Data</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Id</th> 
                        <th>Name</th>
                        <th>City</th>
                        <th>package</th>
                        <th>Budget</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getData.map(item=>
                            <tr key={item.tid}>
                                <td>{item.tid}</td>
                                <td>{item.name}</td>
                                <td>{item.city}</td>
                                <td>{item.packageType}</td>
                                <td>{item.budget}</td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}

