import { useState, useEffect } from 'react';

import api from "../services/api";
import history from "../history";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const access_token = localStorage.getItem('access_token')
    if (access_token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(access_token)}`
      setAuthenticated(true)
    }
    setLoading(false)
  }, [])

  async function handleLogin(username, password) {
    try {
      const { data } = await api.post('/auth/login', { username, password })
      const { access_token } = data;
      
      localStorage.setItem('access_token', JSON.stringify(access_token))
      api.defaults.headers.Authorization = `Bearer ${access_token}`;
      setAuthenticated(true)
      history.push('/home')
    } catch (err) {
      console.log('Login ou senha inválidos')
    }
  }

  function handleLogout() {
    setAuthenticated(false)
    localStorage.removeItem('access_token')
    api.defaults.headers.Authorization = undefined;
    history.push('/')
  }

  async function registerPatient(payload, treatmentId) {
    try {
      const { data } = await api.post('/patient', payload, { params: { treatmentId } })

      console.log(data)
    } catch (err) {
      console.log(err.response)
      console.log('Erro ao cadastrar paciente')
    }
  }

  return { authenticated, loading, handleLogin, handleLogout, registerPatient }
}