import React from 'react';
import '../index.css';
import {Link} from 'react-router-dom'

const Information = () => {
    
    return(
        
        <div className="d-flex justify-content-center align-items-center" style={{height:'100%'}}>
            <div className="d-flex flex-column w50vw screen750px">
                {/* <div className="d-flex flex-wrap justify-content-center p-2 m-1 bg-primary rounded">
                    <h1 className="fontSize-1 text-white">Perfil de Iván</h1>
                </div> */}
                <div className="d-flex flex-wrap flex-column justify-content-around bg-primary rounded p-5 m-1">
                   <div className="d-flex justify-content-center mb-3">
                        <img className="rounded-circle align-self-center img-thumbnail w150 h150 picItemResp" src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="profile" />
                    </div>
                    <div className="d-flex flex-column flex-wrap">
                        <div className="d-flex flex-column align-items-center">
                            <p className="smokeWhite">Nombre:</p>
                            <p className="fontSize-1 brightWhite fontResp">Ivan David</p>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <p className="smokeWhite">Apellido:</p>
                            <p className="fontSize-1 brightWhite fontResp">Andrade Martínez</p>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <p className="smokeWhite">Email:</p>
                            <p className="fontSize-1 brightWhite fontResp">ivan@mail.com</p>
                        </div>
                        <div className="d-flex flex-wrap justify-content-around">
                            <div className="margin365px">
                                <Link to="/backoffice/profile/edit" className="btn btn-warning">Modificar Perfil</Link>
                            </div>
                            <div className="">
                                <button className="btn btn-danger">Eliminar Cuenta</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Information;