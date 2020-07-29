import React from 'react';
import Menu from '../menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
color: var(--white);
flex:1;
padding:50px 5% 0 5%;
`;

function PageDefault(props){
    return(
        <>
        <Menu />
            <Main>
                {props.children}
            </Main>
        <Footer/>

        </>
    )
};

export default PageDefault;