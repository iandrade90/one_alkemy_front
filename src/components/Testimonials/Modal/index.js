import React from 'react';


const ModalAction = {
    modal_id:"testimonials",
    button_name:"Crear",
    modal_title:"Creat acción",
    children:<h1>Formulario</h1>,
    payload:"data whith forms"
}


function Modal({
  type,
  button_name}) {
  return (
    <>
      <button type="button" className={`btn btn-${type} me-2`} data-bs-toggle="modal" data-bs-target={`#${"aca-el-id"}`}>
          {button_name}
      </button>

      <div className="modal fade "id={`${"aca-el-id"}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" >
            <div className="modal-content">
            <div className="modal-header" style={{zIndex:"initial"}}>
                <h5 className="modal-title" id="exampleModalLabel">{`${"Testimonials"}`}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            {/* <div className="modal-body">
                {data.formComponent}
            </div> */}
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Modal
