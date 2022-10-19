import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content flex justify-between">
                <div>
                    <Link className="btn btn-ghost normal-case text-xl" to='/'>Fantastic Auth</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/order'>Order</Link>
                </div>

                <div>
                    <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                    {
                        user?.email ?
                            <button onClick={handleSignOut} className="btn btn-sm">Sign out</button>
                            :
                            <Link className="btn btn-ghost normal-case text-xl" to='/login'><button className="btn btn-sm">Login</button></Link>
                    }
                    <p className="btn btn-ghost normal-case text-xl">Welcome {user?.email}</p>
                    <p className="btn btn-ghost normal-case text-xl">{user?.photoUrl}</p>
                </div>
            </div>
        </div>
    );
};

export default Header;