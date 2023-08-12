import React from 'react'
import ReactDOM from 'react-dom/client'

//componentes
import Home from './pages/Home';
import ListaServico from './pages/ListaServicos';
import ListaDevs from './pages/ListaDevs';
import Header from './components/Header';
import Footer from './components/Footer';

//estilização global
import "./index.css";

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  //<></> serve pra agrupar itens e pode ser chamada com React.Fragment
  <React.StrictMode>    //mostra os erros
    <BrowserRouter>{/*indica que aplicação terá rotas}
    <Routes>{/*indica uma lista de rotas*/}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} /> {/*indica o caminho do componente e o nome da rota dele*/}
        <Route path='ListaServico' element={<ListaServico />} />
        <Route path='lista/devs' element={<ListaDevs/>} />
      </Routes>
      <Footer />
    </BrowserRouter >
  </React.StrictMode >
)
