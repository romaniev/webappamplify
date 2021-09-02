import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Header from '../../Components/Header/Header';

const Home = ({handleLogged}) => {
    return(
        <div>
            <Header isLogged={handleLogged}/>
        </div>
    )
}

export default Home;