import React from 'react';

import dadosIniciais from "./data/dados_iniciais.json";
import Menu from './components/menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <> 
      <Menu/>
      <BannerMain
        videoTitle = {dadosIniciais.categorias[0].videos[0].titulo}
        videoDescription = 'Descrição do vídeo'
        url = {dadosIniciais.categorias[0].videos[0].url}
      />
      <Carousel 
        ignoreFirstVideo
        category = {dadosIniciais.categorias[0]}
      />
      
      <Carousel 
        // ignoreFirstVideo
        category = {dadosIniciais.categorias[1]}
      />
      <Carousel 
        // ignoreFirstVideo
        category = {dadosIniciais.categorias[2]}
      />
      <Carousel 
        // ignoreFirstVideo
        category = {dadosIniciais.categorias[3]}
      />
      <Carousel 
        // ignoreFirstVideo
        category = {dadosIniciais.categorias[4]}
      />
     

      <Footer/>
    </>
  )
}

export default App;
