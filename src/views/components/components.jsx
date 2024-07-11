import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { useDispatch, useSelector } from '../../store'

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";
import Novedades from "../../components/news/Novedades.jsx";

import { getNews } from "../../slices/products.js"

const Components = () => {

    const dispatch = useDispatch()
    const { news } = useSelector((state) => state.products)


    useEffect(() => {
        dispatch(getNews())
      }, [dispatch])

    return (
        <div id="main-wrapper">
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner />
                </div>
            </div>
            <div className="page-wrapper">
                {
                    Object.keys(news).length > 0 &&
                        <Novedades newsData={news} />
                }
            </div>
        </div>
    );
}

Components.propTypes = {
    classes: PropTypes.object
};

export default Components;
