import React, { useContext } from 'react';

import './loginStyles.scss'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Button from '../../components/button/button';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { ImFacebook } from 'react-icons/im'
import { Context } from '../../contexts/AuthContext';

function Login() {
  const { handleLogin } = useContext(Context);

  const login = () => {
    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value
    handleLogin(username, password)
  }

  return (
      <div className="container-login">
        <Header />
        <div className="container">
          <div className="container-actions">
            <div className="container-image">
              <img src="https://images.pexels.com/photos/2294353/pexels-photo-2294353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            </div>
            <div className="container-image">
              <img src="https://images.pexels.com/photos/3984353/pexels-photo-3984353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            </div>
            <div className="container-form-login">
              <form>
                <fieldset>
                  <legend>Login</legend>
                  <input id="username" name="username" type="text" placeholder="E-mail" />
                  <input id="password" name="password" type="password" placeholder="Senha" />
                  <Button callback={login} className={'primary'} label={'Entrar'} />
                </fieldset>
              </form>
            </div>
          </div>

        </div>
        <div className="container-fluid">
          <div className="container-meta">
            <div className="meta-localization">
              <iframe title="My localization" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.844449030095!2d-52.62364808497093!3d-27.098200183048025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e4b42693aa4b8b%3A0x45d5f5791be32e66!2sAv.%20Gen.%20Os%C3%B3rio%2C%20879d%20-%20Centro%2C%20Chapec%C3%B3%20-%20SC%2C%2089802-300!5e0!3m2!1sen!2sbr!4v1634421809243!5m2!1sen!2sbr" width="450" height="290" allowfullscreen="false" loading="lazy"></iframe>
            </div>
            <div className="meta-info">
              <div className="schedules">
                <h2>Horário de funcionamento</h2>
                <ul className="schedules-list">
                  <li className="schedules-item">
                    <span className="day">Segunda</span>
                    <span className="hour">09:00-12:00, 13:30-17:30</span>
                  </li>
                  <li className="schedules-item">
                    <span className="day">Terça</span>
                    <span className="hour">09:00-12:00, 13:30-17:30</span>
                  </li>
                  <li className="schedules-item">
                    <span className="day">Quarta</span>
                    <span className="hour">09:00-12:00, 13:30-17:30</span>
                  </li>
                  <li className="schedules-item">
                    <span className="day">Quinta</span>
                    <span className="hour">09:00-12:00, 13:30-17:30</span>
                  </li>
                  <li className="schedules-item">
                    <span className="day">Sexta</span>
                    <span className="hour">09:00-12:00, 13:30-17:30</span>
                  </li>
                  <li className="schedules-item">
                    <span className="day">Sábado</span>
                    <span className="hour">fechado</span>
                  </li>
                  <li className="schedules-item">
                    <span className="day">Domingo</span>
                    <span className="hour">fechado</span>
                  </li>
                </ul>
              </div>
              <div className="contact">
                <ul className="contact-list">
                  <h1>Contato</h1>
                  <li className="contact-item">
                    <ImFacebook />
                    <span>Facebook:</span>
                    <a href="https://www.facebook.com/juliano" target="_blank" rel="noreferrer">facebook.com/juliano</a>
                  </li>
                  <li className="contact-item">
                    <BsWhatsapp />
                    <span>WhatsApp:</span>
                    <a href="https://www.whatsapp.com/juliano" target="_blank" rel="noreferrer">whatsapp.com/juliano</a>
                  </li>
                  <li className="contact-item">
                    <BsInstagram />
                    <span>Instagram:</span>
                    <a href="https://www.instagram.com/juliano" target="_blank" rel="noreferrer">instagram.com/juliano</a>
                  </li>
                </ul>
              </div>
              <div className="address">
                <h1>Endereço</h1>
                <address>Av. Gen. Osório, 879 D - Centro, Chapecó - SC, 89803-042</address>
              </div>
            </div>
          </div>
        </div>
        <Footer className="footer-bottom" />
      </div>
  );
}

export default Login