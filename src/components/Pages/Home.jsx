import React from 'react';
import Card from 'react-bootstrap/Card';

const Home = () => {
  return (
    <div>
    <Card className="bg-dark text-white border-0">
      <Card.Img src="/assets/Vender-en-Internet.jpg" alt="Background"  height="800px"/>
      <Card.ImgOverlay className='card-img-overlay d-flex flex-column justify-content-start'>
        <div className="container">
        <Card.Title className='card-title display-3 fw-bolder mb-0'>LLEGADAS DE NUEVA TEMPORADA</Card.Title>
        <Card.Text className='card-text lead fs-2'>
        CONSULTA TODAS LAS TENDENCIAS
        </Card.Text>
        </div>
       </Card.ImgOverlay>
       
    </Card>

    </div>
  );
}
export default Home;