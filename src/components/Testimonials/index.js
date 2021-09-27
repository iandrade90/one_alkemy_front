import React from 'react';

import Modal from './Modal';


const tableHead =()=> { 
return(
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Acciones</th>
    </tr>
  )
}



const tableBody = ()=>{
  return(
    <>
      <tr>
        <td>1</td>
        <td>Testimonio 1</td>
        <td >
          <div className='col-3 d-flex '>
            <Modal type='primary' button_name='Editar'/>
            <Modal type='danger' button_name='Eliminar' />
          </div>
        </td>
      </tr>
    </>
  )
}

// {tableHead , tableBody ,}
function Testimonials() {
  
  return (
    <>
      <section className="border-bottom">
        <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                {/* {tableHead} */}
                {tableHead()}
              </thead>
                <tbody>
                  {/* {tableBody} */}
                  {tableBody()}
                </tbody>
              </table>
          </div>
      </section>
    </>
  )
}

export default Testimonials;
