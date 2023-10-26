import { Link } from 'react-router-dom';
import img from './../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignUp = e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        console.log(name,email, password)
        createUser(email, password)
        .then(res => console.log(res.user))
        .catch(error => console.error(error.message))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col gap-20 lg:flex-row">
          <div className=" w-1/2">
            <img src={img} alt="" />
          </div>
          <div className="card w-1/2 flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
          
          <h1 className="text-3xl text-center font-bold pt-2">SignUp</h1>
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
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
                  name="email"
                  placeholder="Your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your password"
                  name='password'
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control mt-6">
                <input type='submit' className="btn btn-primary" value='sign up' />
              </div>
            </form>
            <p className='text-center mb-2'>Already Have an account? <Link to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;