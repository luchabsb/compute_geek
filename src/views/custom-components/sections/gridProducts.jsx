import React from 'react';


const data = [
  {
    image: 'https://www.muycanal.com/wp-content/uploads/2013/06/AMD-FX9000.jpg',
    title: 'Procesador',
    description: 'Procesador de alto rendimiento para gaming y productividad.'
  },
  {
    image: 'https://m.media-amazon.com/images/I/71KS7oJl5UL._AC_UF894,1000_QL80_.jpg',
    title: 'Tarjeta Gráfica',
    description: 'Tarjeta gráfica para juegos y diseño gráfico.'
  },
  {
    image: 'https://benchmarkhardware.com/wp-content/uploads/2018/02/TridenTZ-RGB-DDR4-4700MHz.jpg',
    title: 'Memoria RAM',
    description: 'Memoria RAM de alta velocidad.'
  },
  {
    image: 'https://hardzone.es/app/uploads-hardzone.es/2022/09/portada-velocidad-ssd-causas.jpg?x=480&y=375&quality=40',
    title: 'Disco Duro',
    description: 'Disco duro con gran capacidad de almacenamiento.'
  },
  {
    image: 'https://www.muycanal.com/wp-content/uploads/2013/06/AMD-FX9000.jpg',
    title: 'Procesador',
    description: 'Procesador de alto rendimiento para gaming y productividad.'
  },
  {
    image: 'https://m.media-amazon.com/images/I/71KS7oJl5UL._AC_UF894,1000_QL80_.jpg',
    title: 'Tarjeta Gráfica',
    description: 'Tarjeta gráfica para juegos y diseño gráfico.'
  },
  {
    image: 'https://benchmarkhardware.com/wp-content/uploads/2018/02/TridenTZ-RGB-DDR4-4700MHz.jpg',
    title: 'Memoria RAM',
    description: 'Memoria RAM de alta velocidad.'
  },
  {
    image: 'https://hardzone.es/app/uploads-hardzone.es/2022/09/portada-velocidad-ssd-causas.jpg?x=480&y=375&quality=40',
    title: 'Disco Duro',
    description: 'Disco duro con gran capacidad de almacenamiento.'
  }
];

const GridProducts = () => {
  return (
    <div className="container mt-4 ">
      <div className="row">
        {data.map((item, index) => (
          <div className="col-md-3" key={index}>
            <div className="card mb-4" style={{height:'400px'}}>
              <img src={item.image} className="card-img-top" alt={item.title} style={{height:'250px'}} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <button className='btn btn-success p-1'>Ir a producto</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridProducts ;
