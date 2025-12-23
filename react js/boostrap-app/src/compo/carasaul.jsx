import Carousel from "react-bootstrap/Carousel";

function MyCarousel() {
  return (
    <Carousel interval={3000}>
      <Carousel.Item interval={10000}>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x300"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x300"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x300"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
