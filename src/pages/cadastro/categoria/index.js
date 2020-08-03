import React, {useState, useEffect} from 'react';
import PageDefault from '../../../components/PageDefault';
import {Link} from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';


function CadastroCategoria(){

  const ValoresIniciais = {
    nome:'Insira uma categoria',
    descricao:'Descrição da categoria',
    cor:'#000'
  }

  const [values, setValues] = useState(ValoresIniciais);
  const [categorias, setCategorias] = useState([]);

  function setValue(chave, valor){
    setValues({...values, [chave]:valor})
  }

function handleInput(el){
  
  setValue(el.target.getAttribute('name'),el.target.value);
}

useEffect(()=>{
  console.log('ativando o useEffect');
  const URL = 'http://localhost:8081/categorias';
  fetch(URL)
    .then(async(reposta_servidor)=>{
      const resposta = await reposta_servidor.json();
      console.log(resposta);
      setCategorias(resposta);
    })
},[]);

    return(
      <>
      <PageDefault>
        <h1>Cadastro de Categorias: {values.nome}</h1>

        <form  onSubmit={(e)=>{
          e.preventDefault();
          setCategorias([...categorias, values]);
        }}>

          <FormField 
            label='Categoria: '
            type = 'text'
            name = 'nome'
            placeholder = {ValoresIniciais.nome}
            onChange = {handleInput}
          />

          <FormField 
            label = 'Descrição: '
            type = 'textarea'
            name = 'descricao'
            placeholder = {ValoresIniciais.descricao}
            onChange = {handleInput}

          />

          <FormField 
            label='Cor: '
            type = 'color'
            name = 'cor'
            placeholder = {ValoresIniciais.cor}
            onChange = {handleInput}
          />
    
          <Button type='submit'>Cadastrar</Button>
        </form>

        {categorias.length === 0 && (<div>Carregando ...</div>)}

        <h3>Categorias Existentes</h3>
        <ul>
          {categorias.map(function(cat, i){
            return(
              <li key={`${cat.nome}${i}`}>
                {cat.nome} - {cat.descricao} - {cat.cor}
              </li>
            )
          })}
        </ul>

        <Link to='/cadastro/video'>Cadastrar Video</Link>
      </PageDefault>  
      </>
    );
  };

  
export default CadastroCategoria;