import React from 'react';
import { Div } from './styled'
import loading from '../images/loading.gif'
import error from '../images/error.png'

export const NoDataDiv = ({statusInfo}) => {
    return <Div>
        {statusInfo === "error" ? 
        <div><img src={error} width={"200px"} alt=""/><br/>Niestety wystąpił błąd.<br/><br/> Proszę sprawdzić połączenie z internetem i ponownie załadować stronę.</div> : 
        <div><img src={loading} alt=""/><br/>Trwa ładowanie danych, proszę czekać</div>}
    </Div>
};