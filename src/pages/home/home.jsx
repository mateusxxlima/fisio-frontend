import React, { useState, useEffect, useContext } from 'react';

import './homeStyles.scss'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Input from '../../components/input/input';
import ModalPatient from '../../components/modalPatient/modalPatient';
import api from '../../services/api';
import { Context } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { FaPen, FaUserPlus } from 'react-icons/fa';

function Home() {
  const { handleLogout } = useContext(Context)
  const [patients, setPatients] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/patient');
        setPatients(data);
      } catch(err) {
        console.log(JSON.stringify(err))
      }
    })();
  }, []);

  return (
    <div className="container-home">
      <Header  />
      <button onClick={handleLogout}>Sair</button>
      <div className="actions-home">
        <div className="container-actions">
          <Input />
          <Link to="/register-patient">
            <FaUserPlus/>
          </Link>
        </div>
      </div>
      <div className="table-home">
        <table >
          <thead>
          <tr>
            <th>Nome:</th>
            <th>Tipo de tratamento</th>
            <th>Dias por semana</th>
            <th></th>
          </tr>
          </thead>
          
          <tbody>
          {
            patients.map(patient => {
              return <tr key={patient.id}>
                <td>{patient.name}</td>
                <td>{patient.treatment.name}</td>
                <td>{patient.timesAWeek}</td>
                <td className="action"><FaPen onClick={() => setShow(true)} /></td>
              </tr>
            })
          }
          </tbody>
        </table>
      </div>
      <ModalPatient show={show} onClose={() => { setShow(false) }} />
      <Footer />
    </div>
  );
}

export default Home