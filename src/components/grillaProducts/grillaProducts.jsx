import React from 'react';

const GridProducts = ({products}) => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        {products.map((item, index) => (
          <div className="col-md-3" key={index}>
            <div className="card mb-4 p-2" style={{ maxHeight: '350px', overflowY: 'auto' }}>
              <img src={item.image} className="card-img-top" alt={item.title} style={{ height: '220px' }} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h4>${item.price}</h4>
                <button className='btn btn-success p-1'>Ir a producto</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridProducts;
