import React from "react";
import PropTypes from "prop-types";

// core components
import HeaderBanner2 from "../../components/banner2/banner2.jsx";

// sections for this page
import HeaderComponent from "./sections/headercomponent.jsx";
import BannerComponent from "./sections/bannercomponent.jsx";
import FormBannerComponent from "./sections/formbannercomponent.jsx";
import FeatureComponent from "./sections/featurecomponent.jsx";
import PortfolioComponent from "./sections/portfoliocomponent.jsx";
import PricingComponent from "./sections/pricingcomponent.jsx";
import TeamComponent from "./sections/teamcomponent.jsx";
import TestimonialComponent from "./sections/testimonialcomponent.jsx";
import BlogComponent from "./sections/blogcomponent.jsx";
import C2aComponent from "./sections/c2acomponent.jsx";
import ContactComponent from "./sections/contactcomponent.jsx";

const CustomComponents = () => {
    return (
        <div id="main-wrapper">
            {/* <Header /> */}
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner2 />
                    <HeaderComponent />
                    <BannerComponent />
                    <FormBannerComponent />
                    <FeatureComponent />
                    <PortfolioComponent />
                    <PricingComponent />
                    <TeamComponent />
                    <TestimonialComponent />
                    <BlogComponent />
                    <C2aComponent />
                    <ContactComponent />
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

CustomComponents.propTypes = {
    classes: PropTypes.object
};

export default CustomComponents;
