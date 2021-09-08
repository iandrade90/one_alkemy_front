import React from 'react';
import { NavBackOfice } from "../../components";

const BackOfice=()=>{
    return (
        <div className='row justify-content-between' style={{borderTop:"1px solid rgb(249,250,251)",marginTop:"3.5rem"}}>
            <div className='d-none d-md-block col-md-4 col-lg-3 col-xl-2 p-4 vh-100' style={{fontFamily:"sans-serif", marginTop:"-3.6rem",backgroundColor:"rgb(79,70,229)", zIndex:"3",color:"rgb(249,250,251,.8)"}}>
                <h4 className='fw-bolder mb-5 text-start ps-3 text-white'> Somos +</h4>
                <NavBackOfice/>
            </div>
          <div className='col-md-8  col-lg-9 col-xl-10 bg-light'>
                <div  className='row shadow-sm bg-white'>
                    <div className='col-xs-12 col-md-6 d-flex justify-content-center justify-content-md-start pt-3'>
                        <img height='40' width='40' className='rounded-circle ms-2 mt-1' src='https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' alt=' '></img>
                        <div>
                            <h6 className=' ps-3' style={{fontWeight:"700"}}>Bienvenido Isaac figueroa</h6>
                            <p className='text-secondary ps-3'>isaac@gmail.com | Registrado</p>
                        </div>
                    </div>
                    <div className='col tex-center text-md-end pb-3 pb-md-0 pe-4 d-flex justify-content-center justify-content-md-end' style={{alignSelf:"center"}}>
                        <button className='btn btn-light btn-lg me-2'>boton 1</button>
                        <button className='btn btn-primary btn-lg'>boton 2</button>
                    </div>
                </div>
                <h1>BackOfice!</h1>
            </div>
        </div>
    );
};


export default BackOfice;