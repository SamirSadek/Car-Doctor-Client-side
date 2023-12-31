import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const CheckOut = () => {
  const services = useLoaderData();
  const {user} = useContext(AuthContext)
  const { title, _id, price,img } = services;
  const handleCheckout = e =>{
    e.preventDefault()
    console.log("confirmed")

    const form = e.target
    const name = form.name.value
    const date = form.date.value
    const email = user?.email
    const checkOut = {
        customerName: name,
        img,
        email,
        date,
        service: title,
        service_id: _id,
        price: price
    }
    console.log(checkOut)
    fetch('http://localhost:5000/checkouts',{
        method: 'POST',
        headers:{
           'content-type': 'application/json'
        },
        body: JSON.stringify(checkOut)
    })
    .then(res => res.json())
    .then(data=>{
        console.log(data)
    })

  }
  return (
    <div >
      <h2 className="text-center text-2xl font-bold my-5">Book Services: {title}</h2>
      <form onSubmit={handleCheckout} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            defaultValue={user?.displayName}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            type="date"
            name="date"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            defaultValue={user?.email}

            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input
            type="text"
            defaultValue={'$'+price}
            className="input input-bordered"
            required
          />
        </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#FF3811] text-white">Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
