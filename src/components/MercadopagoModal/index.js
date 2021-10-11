import React, { useState }  from "react"
import { postService } from "../../services"

const MercadopagoModal =()=> {

  const [ amount , setAmount ] = useState()

  const handleDonation =async (e)=> {
    e.preventDefault()
       const response = await postService("donations" , {amount})
       console.log(response)
  }

  return(
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Doná
      </button>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
           <form onSubmit={(e)=>handleDonation(e)}>
           <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Ayudá Donando</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className='row'>
                <div className='col d-flex justify-content-center'>
                  <img height='100px' fluid src='./assets/mercadopago.svg' alt="Mercadopago" />
                </div>
              </div>
              <div className='row'>
                <div className='col p-2 '>
                  <p className='text-center'>Con tu donación estas ayudando a muchas familias</p>
                </div>
              </div>
              <div className='row'>
                <div className='col p-2 '>
                <select class="form-select" aria-label="Default select example"onChange={(e)=> setAmount(e.target.value)}>
                  <option selected >Seleccioná el monto a donar</option>
                  <option></option>
                  <option value="1000">1000</option>
                  <option value="2000">2000</option>
                  <option value="3000">3000</option>
                  <option value="4000">4000</option>
                  <option value="5000">5000</option>
                </select>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type='submit' className="btn btn-primary">Doná</button>
            </div>
           </form>
          </div>
        </div>
      </div>
  </>
  )
}


export default MercadopagoModal