import React from 'react';

function Pagination(probs) {
    const { currentPage, totalPages, onPageChange } = probs
    let btn = "btn mx-3"
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="pagination mt-3">
        <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={btn}
        >
            Previous
        </button>
        {pageNumbers.map((page) => (
            <button
            key={page}
            onClick={() => onPageChange(page)}
            className={currentPage === page ? btn+' active' : btn+" btn-page"}
            >
            {page}
            </button>
        ))}
        <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={btn}
        >
            Next
        </button>
        </div>
    );
}

export default Pagination;
