import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Slider = () => {

  return <div>
      <UncontrolledCarousel
  items={[
    {
      altText: 'Slide 1',
      caption: '',
      key: 1,
      src: 'https://raw.githubusercontent.com/RamiroSB/imagenes/main/CARROUSEL%20IMG1.webp'
    },
    {
      altText: 'Slide 2',
      caption: '',
      key: 2,
      src: 'https://raw.githubusercontent.com/RamiroSB/imagenes/main/CARROUSEL%20IMG2.webp'
    },
    {
      altText: 'Slide 3',
      caption: '',
      key: 3,
      src: 'https://raw.githubusercontent.com/RamiroSB/imagenes/main/BANNER3.jpg'
    },
    {
      altText: 'Slide 4',
      caption: '',
      key: 4,
      src: 'https://raw.githubusercontent.com/RamiroSB/imagenes/main/CARROUSEL%20IMG3.webp'
    }
  ]}
 />
  </div>;
};
