import React, { useContext } from 'react';

import './RegisterPatientStyles.scss'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Input from '../../components/input/input';
import TextArea from '../../components/textArea/textArea';
import { FaArrowAltCircleRight, FaUpload} from 'react-icons/fa'
import Button from '../../components/button/button';

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

  let treatmentId = undefined;

  const create = () => {
    registerPatient(state, treatmentId)
  }

  const onChangeName = ({ target }) => state.name = target.value;
  const onChangeCpf = ({ target }) => state.cpf = target.value;
  const onChangeProfession = ({ target }) => state.profession = target.value;
  const onChangeBirthDate = ({ target }) => state.birthDate = target.value;
  const onChangePassword = ({ target }) => state.password = target.value;
  const onChangeEmail = ({ target }) => state.email = target.value;
  const onChangePhone = ({ target }) => state.phone = target.value;
  const onChangeCep = ({ target }) => state.cep = target.value;
  const onChangeStreet = ({ target }) => state.street = target.value;
  const onChangeHouseNumber = ({ target }) => state.houseNumber = target.value;
  const onChangeDistrict = ({ target }) => state.district = target.value;
  const onChangeCity = ({ target }) => state.city = target.value;
  const onChangeTimesAWeek = ({ target }) => state.timesAWeek = target.value;
  const onChangeTreatmentId = ({ target }) => treatmentId = target.value;

  return (
    <div className="container-register">
      <Header />
      <div className="register-forms">
        <form className="register">
          <h1>Cadastro de Paciente</h1>

          <div className="form-group">
            <label for="name">
              Nome:
            </label>
            <Input name="name" id="name" type="text" change={onChangeName} />
          </div>

          <div className="form-group">
            <label for="cpf">
              CPF:
            </label>
            <Input name="name" id="cpf" type="text" change={onChangeCpf} />
          </div>


          <div className="form-group">
            <label for="profession">
              Profissão:
            </label>
            <Input name="name" id="profession" type="text" change={onChangeProfession} />
          </div>

          <div className="form-group">
            <label for="birthDate">
              Nascimento:
            </label>
            <Input name="name" id="birthDate" type="date" change={onChangeBirthDate} className="date" />
          </div>

          <div className="form-group">
            <label for="password">
              Senha:
            </label>
            <Input name="password" id="password" type="password" change={onChangePassword} />
          </div>


          <div className="form-group">
            <label for="email">
              Email:
            </label>
            <Input name="email" id="email" type="email" change={onChangeEmail} />
          </div>


          <div className="form-group">
            <label for="phone">
              Fone:
            </label>
            <Input name="phone" id="phone" change={onChangePhone} />
          </div>

          <div className="form-group">
            <label for="cep">
              CEP:
            </label>
            <Input name="cep" id="cep" change={onChangeCep} />
          </div>



          <div className="form-group">
            <label for="street">
              Rua:
            </label>
            <Input name="street" id="street" change={onChangeStreet} />
          </div>


          <div className="form-group">
            <label for="houseNumber">
              Número:
            </label>
            <Input name="houseNumber" id="houseNumber" type={'number'} change={onChangeHouseNumber} />
          </div>

          <div className="form-group">
            <label for="district">
              Bairro:
            </label>
            <Input name="district" id="district" change={onChangeDistrict} />
          </div>

          <div className="form-group">
            <label for="city">
              Cidade:
            </label>
            <Input name="city" id="city" change={onChangeCity} />
          </div>

          <div className="form-group">
            <label for="treatmentId" className="treatment">
              Tipo de tratamento:
            </label>
            <Input name="treatmentId" id="treatmentId" change={onChangeTreatmentId} />
          </div>
          <div className="form-group">
            <label for="timesAWeek" className="treatment">
              Dias por semana:
            </label>
            <Input name="timesAWeek" id="timesAWeek" change={onChangeTimesAWeek} />
          </div>
          <Button callback={create} className={'primary'} label={'Cadastrar'} />
        </form>
        <a href="#">
          <span>
            Próximo
          </span>
          <FaArrowAltCircleRight />
        </a>
      </div>
      <Footer />
    </div>
  );
}
