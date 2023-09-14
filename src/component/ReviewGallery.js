import React from 'react';


function ReviewGallery(probs) {
    const { images, currentPage, imagesPerPage, openModal } = probs
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const displayedImages = images.slice(startIndex, endIndex);

    return (
        <div className="review-gallery">
        {displayedImages.map((image, index) => (
            <img key={index} src={image} alt={image} onClick={()=>{openModal(image)}}/>
        ))}
        </div>
    );
}

export default ReviewGallery;