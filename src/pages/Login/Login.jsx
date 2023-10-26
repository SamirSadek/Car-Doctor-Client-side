import { Link } from 'react-router-dom';
import img from './../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
const Login = () => {
const { signIn} = useContext(AuthContext)

const handleLogin = e =>{

    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    console.log(email, password)
    signIn(email, password)
    .then(res => console.log(res.user))
    .catch(err => console.error(err.message))

}
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col gap-20 lg:flex-row">
        <div className=" w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card w-1/2 flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
        
        <h1 className="text-3xl text-center font-bold pt-2">Login!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name='password'
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type='submit' className="btn btn-primary" value='login' />
            </div>
          </form>
          <p className='text-center mb-2'>New to Car Doctor? <Link to='/signup'>Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
