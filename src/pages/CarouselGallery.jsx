// rafce
import Carousel from 'react-bootstrap/Carousel';



const CarouselGallery = () => {
 
  return (

    <div className="karu">
        <Carousel>
      <Carousel.Item >
        
        <img
          src="esmane.jpg"
          alt="First slide"
          className="karussell"
          />
          
          
        
        <Carousel.Caption>
          {/* <h3>ArtisaN Vegan 🌿 Cakery</h3> */}
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="teisane.jpg"
          alt="Second slide"
          className="karussell"
        />
          

        <Carousel.Caption>
          {/* <h3><button>Vaata eripakkumist!</button></h3> */}
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="kolmane.png"
          alt="Third slide"
          className="karussell"
        />
          

        <Carousel.Caption>
          <h3>⁣⁣⁣⁣⁣</h3>
          <p>
         
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselGallery