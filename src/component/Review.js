import Header from "./Header"
import { useEffect, useState } from "react"
import ImageModal from "./hero/ImageModal";
import './css/review.css'
import Footer from "./Footer"
import ReviewGallery from "./ReviewGallery";
import Pagination from "./Pagination";
const Review = ()=>{
    const [images, setImageData] = useState([]);

    // const images = [/* ... */]; // Your array of image URLs
    const imagesPerPage = 9; // Number of images per page
    const [currentPage, setCurrentPage] = useState(1);
  
    const totalPages = Math.ceil(images.length / imagesPerPage);
  
    const handlePageChange = (newPage) => {
      if (newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage);
      }
    };
  
    
    const [modalShow, setModalShow] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);
        setModalShow(true);
    };

    const closeModal = () => {
        setSelectedImage('');
        setModalShow(false);
    };

    useEffect(()=>{
        window.scrollTo(0, 0);
        let review_index = []
        for (let i = 2; i < 47; i++) {
            let path = `./review/review (${i}).jpg`
            review_index.push(path)
        }
        setImageData(review_index)
    }, [])
    return(
        <>
            <Header/>
            <div className="reviews">
                <h1>รูปภาพการให้บริการ</h1>
                <ReviewGallery images={images} currentPage={currentPage} imagesPerPage={imagesPerPage} openModal={openModal}  />
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
            <ImageModal show={modalShow} onHide={closeModal} imageUrl={selectedImage} />
            <Footer/>
        </>
    )
}

export default Review