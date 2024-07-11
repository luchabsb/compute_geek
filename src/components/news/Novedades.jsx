import React from 'react'
import { Row, Col, Container } from 'reactstrap'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from '../products/Product';

const Novedades = ({ newsData }) => {
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const product = newsData.map((item, i) => <Product name={item.name} price={item.price} description={item.description} image={item.image} key={i} />) 
      
    return (
        <div>
            <div className="spacer" id="card-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Últimas novedades</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
            <Carousel responsive={responsive}>
                {product}
            </Carousel>
            </Container>
        </div>
    );
}

export default Novedades;
