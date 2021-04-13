import React from 'react';
import { Div } from './styled'
import loading from '../images/loading.gif'
import error from '../images/error.png'

export const NoDataDiv = ({statusInfo}) => {
    return <Div>
        {statusInfo === "error" ? 
        <div><img src={error} width={"200px"} alt=""/><br/>Unfortunately an error occured.<br/><br/> Please check your network connection and reload the page.</div> : 
        <div><img src={loading} alt=""/><br/>Loading data, please wait</div>}
    </Div>
};