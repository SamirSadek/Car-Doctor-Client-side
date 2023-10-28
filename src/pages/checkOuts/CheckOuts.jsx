import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import CheckOutRow from "./CheckOutRow";

const CheckOuts = () => { 
    const {user} = useContext(AuthContext)
    const [checkOuts, setCheckOuts] = useState([])
    const url = `http://localhost:5000/checkouts?email=${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res =>res.json())
        .then(data => setCheckOuts(data))
    },[])

    const handleDelete = id =>{
        const proceed = confirm("Are you want to delete")
        if(proceed){
            fetch(`http://localhost:5000/checkouts/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                if(data.deletedCount>0){
                    alert('deleted Successfully')
                    const remaining = checkOuts.filter(checkOut=> checkOut._id !== id)
                    setCheckOuts(remaining)

                }
            })
        }
      }
    return (
        <div>
            <h2>total checkouts: {checkOuts.length}</h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image</th>
        <th>Customer Name</th>
        <th>Email</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {

checkOuts.map(checkout => <CheckOutRow key={checkout._id} checkout={checkout} handleDelete={handleDelete}></CheckOutRow>)
     
     }
        
    </tbody>  
  </table>
</div>
        </div>
    );
};

export default CheckOuts;