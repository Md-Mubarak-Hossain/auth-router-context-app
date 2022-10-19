import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/UserContext';

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <p>Welcome from home... {user?.email}</p>
        </div>
    );
};

export default Home;