import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex h-screen justify-center items-center mb-28'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold ">Login</h2>
                    <form>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input

                                type="email" placeholder="You email"
                                className="input input-bordered input-secondary w-full max-w-xs" />
                            <label className="label">

                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input

                                type="password" placeholder="You Password"
                                className="input input-bordered input-secondary w-full max-w-xs" />

                        </div>

                        {/* <p className='pb-6'>Forgate Password? <button onClick={resetPassword} className='text-secondary'>Reset password</button></p> */}
                        <input className='btn w-full  max-w-xs btn-secondary text-white mt-8' type="submit" value="Login" />
                    </form>
                    <p>New to Expense Tracker? <Link className='text-secondary' to={"/signup"}>Create new account</Link></p>
                    {/* <div className="divider">OR</div> */}
                    {/* <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary">CONTINUE WITH GOOGLE</button> */}
                </div>
            </div>
        </div>
    );
};

export default Login;