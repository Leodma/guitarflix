import styled from 'styled-components';

export const DivInput = styled.div`
    box-sizing:border-box;
   position:relative;
   font-size:18px;
   width:100%;
   padding-top:13px;
   width:90%;
   margin-bottom:35px;

   input[type="text"], textarea{
       width:100%;
       height:50px;
       padding-top:20px;
       font-size:20px;
       background:lightgray;
       border:0;
       transition: all .5s ease-out;
       
   }

   input:focus,
   textarea:focus
   {
       border:0;
       border-bottom:2px solid red;
       background:white;
       height:60px;    
   }

   textarea:focus{
       height:75px;
   }

   input::placeholder, textarea::placeholder{
       color:transparent;
   }

   label{
       position:absolute;
       top:22px;
       left:0;
       font-size:18px;
       left:5px;
       color:gray;
       transition: all .3s ease-out;
   }


   input:focus + label, input:not(:placeholder-shown) + label,
   textarea:focus + label, textarea:not(:placeholder-shown) + label
   {
      font-size:13px;
      top:13px;
   } 

   input[type="color"]{
    border:0;
    width:100%;
    height:50px;
    background-color:lightgray;
    padding:10px 10px 10px 60px;
   }

   input[type="color"] + label{
    color:gray;
   
    position:absolute;
    top: 23px;
    left:5px;
    font-size:18px;
   }



    `;