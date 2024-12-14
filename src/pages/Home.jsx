import React from 'react';
import '../styles/home.css';
import logo from '../assets/img/logo.png';
import background from '../assets/img/bg.jpg';

const Home = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg no-wrap">
      <img src={logo} alt="logo" ></img>
        <h2 className="text-nowrap">Smk Prakarya Internasional</h2>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent"></div>
            <button type="button" className="btn btn-dark">Log in</button>
        </div>
      </nav>
      
      <div className="container pt-5">
      <img src={background} alt="background" className="background-image"></img>
        <div className="d-flex justify-content-center align-items-center mt-5">
          <h1 class="h1-container ">ABSENSI XI PPLG 2</h1>
        </div>
      </div>
      
      <hr class="line"/>
      
      <div className="yow">
        <p>
          halo semuanya jadi disini web ini digunakan <br />
          untuk mengabsen kehadiran murid <br />
          tapi, web ini hanya digunakan khusus <br />
          untuk kelas xi pplg 2 yahh.
        </p>
      </div>
    </div>
  );
};

export default Home;
