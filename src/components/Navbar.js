import React from 'react';
import { Link } from 'react-router-dom';
import  '../App.css'

export default class Navbar extends React.Component{
    render(){
        return(
            <nav className="header">
                <div className="container-titles-header">
                    <div className="title-header">
                    BUSCA MARVEL 
                    </div>
                    <div className="subtitle-header">
                    TESTE FRONT-END
                    </div>
                </div>
                <div className="participante-header">
                  MATHEUS
                </div>
                {/* <div >
                    <Link to={'/'} >
                        Home
                    </Link>
                </div> */}
            </nav>
        );
    }
}