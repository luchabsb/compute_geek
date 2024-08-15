import React, { useState } from 'react';
//import { useDispatch } from 'react-redux'; // Importa useDispatch desde 'react-redux'
import { useDispatch, useSelector } from '../../store';
import { getProductsFilter, getProduct } from '../../slices/products';


const NavCategories = ({ }) => {
    const { } = useSelector((state) => state.search);
    const dispatch = useDispatch();

    /*
     const handleSearch = (e) => {
 
         console.log(e.target.value)
 
         const dataSearch = {
             filter: e.target.value
         }
 
         dispatch(getProductsFilter(dataSearch))
     }
 */

    return (
        <>
            <nav className="navbar" style={{ backgroundColor: '#000' }}>
                <div className="container justify-content-center">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link " style={{color:'#c9b000', cursor:'pointer'}} href="#computadoras">Computadoras</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link " style={{color:'#c9b000', cursor:'pointer'}} href="#placasDeVideo">Placas de Video</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " style={{color:'#c9b000', cursor:'pointer'}} href="#procesadores">Microprocesadores</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " style={{color:'#c9b000', cursor:'pointer'}} href="#gabinetes">Gabinetes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " style={{color:'#c9b000', cursor:'pointer'}} href="#notebooks">Notebooks</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " style={{color:'#c9b000', cursor:'pointer'}} href="#corporativo">Empresas</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default NavCategories;
