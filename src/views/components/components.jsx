import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { useDispatch, useSelector } from '../../store'

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";
import Novedades from "../../components/news/Novedades.jsx";

import { getNews, getProducts } from "../../slices/products.js"
import GridProducts from "../../components/grillaProducts/grillaProducts.jsx";

const Components = () => {

    const dispatch = useDispatch()
    const { news, products } = useSelector((state) => state.products)

    const [stateProduct, setProduct] = useState(news)


    useEffect(() => {
        dispatch(getNews())
        setProduct(news)
        if(Object.keys(products).length > 1) {
            setProduct(products)
        }else{
            setProduct(news)
        }
      }, [dispatch])

    return (
        <div id="main-wrapper">
            { console.log('products ? ', news) }
            <div className="page-wrapper header-banner" style={{height:'350px'}} >
                <div className="container-fluid" >
                    <HeaderBanner  />
                </div>
            </div>
            <div className="page-wrapper" >
                {
                 /*   Object.keys(news).length > 0 &&
                        <Novedades newsData={news} />
                */
                }
                {
                    Object.keys(news).length > 0 &&
                    <GridProducts products={news}  />
                }
                
            </div>
        </div>
    );
}

Components.propTypes = {
    classes: PropTypes.object
};

export default Components;
