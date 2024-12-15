import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/login.css'; 
import background from '../assets/img/bg1.jpg';


const Login = () => {

  return (
    <div className="page">
       <img src={background} alt="background" className="background-login"/>
      <div className="wrapper">
        <div className="login-page">
          <form>
            <h1>Silahkan Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Masukan Email" required />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Masukan Password" required />
            </div>
              <Link to="/dashboard"> 
                        <button type="button" className="btn btn-dark">
                          Log in
                        </button>
                      </Link>
            <div className="register-link">
              <p>Don't have an account?</p>
                <Link to="/register"> 
                    Register
                </Link>
            </div>
            <h4>XI PPLG 2</h4>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;