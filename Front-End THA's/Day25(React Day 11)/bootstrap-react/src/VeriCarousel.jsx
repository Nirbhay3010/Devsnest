import { Carousel } from "react-bootstrap";
const VeriCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Beach In India</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wet-boew.github.io/v4.0-ci/demos/tabs/img/protect-environment.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Sunset Point</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default VeriCarousel;