import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { GatsbyImage} from "gatsby-plugin-image"
import { ImageObjects} from "../../interfaces/picturedata.interface";

type CarouselProps = {
    images: ImageObjects
}

const PictureCarousel = (props : CarouselProps) => {



    return(
        <Carousel interval={null}  variant="dark">
        {props.images.map(({id,altText,imageData}) => (
        <Carousel.Item key={id}>
        <div style={{display: 'block', margin: 'auto'}}>
        {imageData !== undefined ? <GatsbyImage image={imageData} alt={altText} /> : null}
        </div>
        </Carousel.Item>
        ))}
        </Carousel>
        )
}

export default PictureCarousel;