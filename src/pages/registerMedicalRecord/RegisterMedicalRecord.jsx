import React, { useContext } from 'react';

import './RegisterPatientStyles.scss'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Input from '../../components/input/input';
import TextArea from '../../components/textArea/textArea';
import { FaArrowAltCircleRight, FaUpload} from 'react-icons/fa'

import { Context } from '../../contexts/AuthContext';

export function RegisterPatient() {
  const { registerPatient } = useContext(Context);

  const state = {
    name: '',
    cpf: '',
    profession: '',
    birthDate: '',
    password: '',
    email: '',
    phone: '',
    cep: '',
    street: '',
    houseNumber: '',
    district: '',
    city: '',
    timesAWeek: 0
  }

  return (
    <div className="container-register">
      <Header />
      <div className="register-forms">
        <form className="register">
          <h1>Cadastro de Paciente</h1>




          <div className="form-group">
            <label for="disease-history" className="treatment">
              História da
              doença:
            </label>
            <TextArea name="disease-history" id="disease-history" />
          </div>

          <div className="form-group">
            <label for="History-past-illness" className="treatment">
              História da
              doença
              pregressa
            </label>
            <TextArea name="History-past-illness" id="History-past-illness" />
          </div>

          <div className="form-group">
            <label for="pains">
              Dores:
            </label>
            <Input name="pains" id="pains" />
          </div>

          <div className="form-group">
            <label for="medicines" className="treatment">
              Medicamentos
            </label>
            <TextArea name="medicines" id="medicines" />
          </div>

          <div className="form-group">
            <label for="general-observations" className="treatment">
              Observações gerais
            </label>
            <TextArea name="general-observations" id="general-observations" />
          </div> 

          <div className="register-actions">
            <fieldset>
              <legend>Tratamento</legend>
              <div className="row">
                <span>Tipo de tratamento</span>
                <div className="row-col">
                  
                  <input type="checkbox" id="physiotherapy" name="physiotherapy"
                    checked />
                  <label for="physiotherapy">Fisioterapia</label>

                  <input type="checkbox" id="pilates" name="pilates"
                    checked />
                  <label for="pilates">Pilates</label>
                </div>

              </div>
              <div className="row">
                <span>Dias por semana:</span>
                <Input type={'number'} className="min"/>
              </div>
            </fieldset>
            <fieldset>
              <legend>Upload</legend>
              <input type="file" className="hidden"/>
              <a href="#" className="input-file">
                <span>Upload Imagens</span>
                <FaUpload/>
              </a>
            </fieldset>
          </div>
        </form>
        <a href="#">
          <span>
            Próximo
          </span>
          <FaArrowAltCircleRight />
        </a>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
