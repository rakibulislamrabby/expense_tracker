import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        // <div className="navbar bg-purple-700 text-center lg:flex">
        //     <a className="btn btn-ghost normal-case text-white text-xl ">Expense Tracker</a>
        //     <a className='btn btn-ghost normal-case text-white text-xl'>Login</a>
        // </div>
        <div className="navbar bg-purple-700 text-white px-14">
            <div className="navbar-start">

                <Link className="btn btn-ghost mr-10" to="/">Expense Tracker</Link>
            </div>
            <div className="navbar-end hidden lg:flex">

                <Link className="btn btn-ghost mr-10" to="/login">Login</Link>
            </div>
            <div className="navbar-end lg:hidden">


            </div>
        </div>
    );
};

export default Navbar;