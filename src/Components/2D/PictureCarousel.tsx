import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ImageObject } from '../../interfaces/picturedata.interface';

interface CarouselProps {
  images: ImageObject[];
}

/**
 * This component handles rendering a picture carousel using the bootstrap carousel.
 * @param images An array of the pictures with id, alt text and image data.
 */
const PictureCarousel = ({ images }: CarouselProps) => {
  return (
    <Carousel interval={null} variant="dark">
      {images.map(({ id, altText, imageData }) => (
        <Carousel.Item key={id}>
          <div style={{ display: 'block', margin: 'auto' }}>
            {imageData !== undefined ? (
              <GatsbyImage image={imageData} alt={altText} />
            ) : null}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PictureCarousel;
