import React from 'react'
import ReactDOM from 'react-dom/client'

//componentes
import Home from './pages/Home';
import ListaServico from './pages/ListaServicos';
import Header from './components/Header';
import Footer from './components/Footer';

//estilização global
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
    {/* <ListaServico /> */}
  </React.StrictMode>,
)
