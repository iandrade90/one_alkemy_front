import React from 'react';
import '../index.css';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

const Information = () => {
    const { isLogged , user } = useSelector((state) => state.user_auth)
    return(
        
        <div className="d-flex justify-content-center align-items-center" style={{height:'100%'}}>
            <div className="d-flex flex-column w50vw screen750px">
                <div className="d-flex flex-wrap flex-column justify-content-around bg-primary rounded p-5 m-1">
                   <div className="d-flex justify-content-center mb-3">
                        <img className="rounded-circle align-self-center img-thumbnail w150 h150 picItemResp" src={user?.image} alt="profile" />
                    </div>
                    <div className="d-flex flex-column flex-wrap">
                        <div className="d-flex flex-column align-items-center">
                            <p className="smokeWhite">Nombre:</p>
                            <p className="fontSize-1 brightWhite fontResp">{user?.firstName}</p>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <p className="smokeWhite">Apellido:</p>
                            <p className="fontSize-1 brightWhite fontResp">{user?.lastName}</p>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <p className="smokeWhite">Email:</p>
                            <p className="fontSize-1 brightWhite fontResp">{user?.email}</p>
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