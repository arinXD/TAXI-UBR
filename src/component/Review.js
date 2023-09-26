import Header from "./Header"
import { useEffect, useState } from "react"
import ImageModal from "./hero/ImageModal";
import './css/review.css'
import Footer from "./Footer"
import ReviewGallery from "./ReviewGallery";
import Pagination from "./Pagination";
const Review = ()=>{
    const [images, setImageData] = useState([]);
    const [imagesPerPage, setImagesPerPage] = useState(8);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 760) {
            setImagesPerPage(8);
          } else if (window.innerWidth >= 760 && window.innerWidth < 1024) {
            setImagesPerPage(9);
          } else {
            setImagesPerPage(12);
          }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, [])

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