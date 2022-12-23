import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const onSubmit = async data => {
        console.log('update one');
        console.log();
    }
    return (
        <div className='flex h-screen justify-center items-center pt-10 mb-20'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold ">Sign Up</h2>
                    <form>
                        {/* email with validation */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input

                                type="name" placeholder="You Name"
                                className="input input-bordered input-secondary w-full max-w-xs" />
                            <label className="label">

                            </label>
                        </div>
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
                        {/* password with validation */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input

                                type="password" placeholder="You Password"
                                className="input input-bordered input-secondary w-full max-w-xs" />
                            <label className="label">

                            </label>
                        </div>

                        <input className='btn w-full btn-primary  max-w-xs text-white' type="submit" value="Sign Up" />
                    </form>
                    <p>Already have account? <Link className='text-secondary' to={"/login"}>Please Login</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Signup;