import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import slid1 from './../../assets/img/phono-slider-1.webp'
import slid2 from './../../assets/img/phono-slider-2.webp'
import slid3 from './../../assets/img/phono-slider-3.webp'
import './MyCarcoulStyle.css'
const MyCarcoul = () => {
  return (
    <div>
        <Carousel className='position-relative'>
         <Carousel.Item>
           <img
             className="d-block w-100"
             src={slid1}
             alt="First slide"
           />
           <Carousel.Caption className='TheFirst'>
             <h2>Zania Black Edition</h2>
             <h1>Curvy Bevel Dual Audio</h1>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="d-block w-100"
             src={slid2}
             alt="Second slide"
           />
           <Carousel.Caption className='TheMiddel'>
             <h2>4K Resolution</h2>
             <h1>Exclusive Steel Frame</h1>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="d-block w-100"
             src={slid3}
             alt="Second slide"
           />
           <Carousel.Caption className='TheFirst'>
             <h2>Delta Zertiga Processor</h2>
             <h1>Full Screen Display</h1>
           </Carousel.Caption>
         </Carousel.Item>
       </Carousel>
    </div>
  )
}

export default MyCarcoul