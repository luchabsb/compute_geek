import React, { useState } from 'react';
//import { useDispatch } from 'react-redux'; // Importa useDispatch desde 'react-redux'
import { useDispatch, useSelector } from '../../store';
import { getProductsFilter , getProduct } from '../../slices/products';


const InputSearch = ({ }) => {
    const {  } = useSelector((state) => state.search);
    const dispatch = useDispatch();
  
    const handleSearch = (e) => {

        console.log(e.target.value)

        const dataSearch = {
            filter: e.target.value
        }

        dispatch(getProductsFilter(dataSearch))
    }


    return (
        <>
            <form className='input-search' role="form" style={{ width: '40%', display: 'flex', alignItems: 'center' }} id="top-buscar">
                <input type="hidden" name="buscar" value="1" />
                <input type="text" name="palabra" className="search-form form-control p-1" autoComplete="off" onChange={handleSearch} id="palabra" placeholder="¿Qué estás buscando?" style={{ flexGrow: 1 }} />
                <button className="btn btn-buscartop p-1" type="submit" style={{ marginLeft: '10px' }}>
                    <i className="fa fa-search" style={{ color: 'yellow', }}></i>
                </button>
            </form>
        </>
    );
};

export default InputSearch;
