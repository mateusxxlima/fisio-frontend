import React, {useEffect} from "react";

import './modalPatientStyles.scss'
import { FaPen, FaRegEye, FaRegTrashAlt,FaTimes } from 'react-icons/fa'

function ModalPatient(props) {

  const closeEscapeKeyDown = (e)=> {
    if( (e.charCode || e.keyCode) === 27 ){
      props.onClose()
    }
  } 
  
  useEffect(()=>{
    document.body.addEventListener('keydown',closeEscapeKeyDown)
    return function cleanup(){
      document.body.removeEventListener('keydown',closeEscapeKeyDown)
    }
  })
  
  // if(!props.show){
  //   return null
  // }

  return (
    <div className={`modal-wrapper ${props.show ? 'show' : 'out'}`} onClick={props.onClose}>
      <div className="modal-patient" onClick={e => e.stopPropagation()}>
        <FaTimes onClick={props.onClose}/>
        <div className="modal-body">
          <ul className="actions-list">
            <li className="actions-item">
              <a href="#">
                <span>Visualizar dados do paciente</span>
                <FaRegEye />
              </a>
            </li>
            <li className="actions-item">
              <a href="#">
                <span>Editar dados do paciente</span>
                <FaPen />
              </a>
            </li>
            <li className="actions-item">
              <a href="#">
                <span>Excluir paciente</span>
                <FaRegTrashAlt />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default ModalPatient