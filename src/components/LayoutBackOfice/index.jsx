import React from 'react';

import {
    ImTree ,
    FiUsers ,
    FcMenu ,
    BiMessageSquareDetail ,
    BsNewspaper ,
    TiThListOutline ,
    IoMdPeople ,
    VscChecklist ,
    ImImages
}  from "../../icons";


const BackOfice=()=>{

    return(
        <>
            <div 
                className='text-reset p-2 d-md-none'
                data-bs-toggle="offcanvas" 
                data-bs-target="#offcanvasScrolling" 
                aria-controls="offcanvasScrolling"
            >
                <FcMenu style={{fontSize:"2rem"}}/>
            </div>
            <div 
                style={{fontFamily:"sans-serif",backgroundColor:"rgb(79,70,229)", zIndex:"3",color:"rgb(249,250,251,.8)"}}
                className="offcanvas offcanvas-start"  
                data-bs-scroll="true" 
                data-bs-backdrop="false" 
                tabIndex="-1" 
                id="offcanvasScrolling" 
                aria-labelledby="offcanvasScrollingLabel"
            >
                <div className="offcanvas-header d-flex flex-row-reverse">
                    <button 
                        type="button" 
                        className="btn-close text-reset" 
                        data-bs-dismiss="offcanvas" 
                        aria-label="Close"
                    >
                    </button>
                    <h4 className='fw-bolder ps-3 pt-2 text-start text-white fs-1'> Somos más</h4>
                </div>
                    <div className="offcanvas-body ">
                        <NavBackOfice/>
                    </div>
            </div>
        </>
    )
}


export const NavBackOfice =()=>{

    return(
        <div className='d-grid gap-3'>
            <div
                className="p-2 ps-2 ms-2 pulse">
                <BsNewspaper/>  Novedades
            </div>
            <div className="p-2 ps-2 ms-2 pulse">
                <VscChecklist/>  Actividades
            </div>
            <div className="p-2 ps-2 ms-2 pulse">
                <TiThListOutline/> Categorias
            </div>
            <div className="p-2 ps-2 ms-2 pulse">
                <BiMessageSquareDetail/>  Testimonios
            </div>
            <div className="p-2 ps-2 ms-2 pulse">
                <ImTree/>  Organización
            </div>
            <div className="p-2 ps-2 ms-2 pulse">
                <ImImages/>  Slides
            </div>
            <div className="p-2 ps-2 ms-2 pulse">
                <FiUsers/>  Usuarios
            </div>
            <div className="p-2 ps-2 ms-2 pulse">
                <IoMdPeople/>  Miembros
            </div>
        </div>
    )
}

export default BackOfice;