import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let navigate = useNavigate();
    let fname = localStorage.getItem('fname');
    let lname = localStorage.getItem('lname')
    function cleardata() {
        localStorage.clear();
        navigate('/');
    }
    return (
        <div className='mt-5' style={{ height: "60vh" }}>
            <h1 className='text-uppercase mb-2'> WELCOME {fname} {lname} </h1>
            <button className='btn btn-primary' onClick={cleardata}>clear</button>
        </div>

    )

}

export default Home;
