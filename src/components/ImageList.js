import './ImageList.css'
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    }) // key goes on root element
    return <div className="image-list">{images}</div>
}

export default ImageList;